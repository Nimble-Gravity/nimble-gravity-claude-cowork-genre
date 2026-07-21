// The 3D operations floor. A bank of review stations facing a master status
// board; each station is an open exception until its evidence is accepted.
// This module wraps the visuals behind a small API so game logic never touches
// THREE:
//   glideTo(i, instant)  — move camera to station i (i === count → master board)
//   setActive(i)         — mark station i as the one being worked
//   startUnlock(i)       — play the sign-off animation for station i
//   openInstant(i)       — jump station i to its cleared end-state (refresh restore)
//   setDone(v)           — stand the floor down from alert
//   celebrate()          — sign-off burst at the master board
// Throws if WebGL is unavailable — callers fall back to a no-3D mode.
import {
  floorTex, steelTex, wallTex, screenTex, terminalTex, signTex, boardTex, videoWallTex, envMap,
} from './textures.js';

const THREE = globalThis.THREE;

const AMBER = 0xE0A93E;
const TEAL = 0x58C7B4;

export function createScene({ container, roomCount, reduceMotion, stationLabels = [] }) {
  const env = envMap();

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  container.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x070b14);
  scene.fog = new THREE.Fog(0x070b14, 34, 90);

  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 200);

  /* Lighting: cool ambient, with the working station lit from above */
  scene.add(new THREE.AmbientLight(0x2a3854, 0.7));
  const key = new THREE.DirectionalLight(0xaebfdd, 0.32);
  key.position.set(-16, 24, 12);
  scene.add(key);

  const spot = new THREE.SpotLight(0xdfeaff, 1.25, 42, Math.PI / 5.5, 0.45, 1.2);
  spot.castShadow = true;
  spot.shadow.mapSize.set(1024, 1024);
  scene.add(spot);
  scene.add(spot.target);

  /* Floor plan */
  const BAY_W = 8, BAY_D = 7, GAP = 3.5, CEIL_H = 8.2;
  const startX = -((roomCount - 1) / 2) * (BAY_W + GAP);
  const endX = startX + (roomCount - 1) * (BAY_W + GAP);

  const floorMat = new THREE.MeshStandardMaterial({
    map: floorTex(), color: 0xffffff, roughness: 0.34, metalness: 0.45,
    envMap: env, envMapIntensity: 0.6,
  });
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(190, 190), floorMat);
  floor.rotation.x = -Math.PI / 2;
  floor.receiveShadow = true;
  scene.add(floor);

  /* Equipment-rack back wall */
  const wall = new THREE.Mesh(
    new THREE.PlaneGeometry(190, CEIL_H),
    new THREE.MeshStandardMaterial({ map: wallTex(), roughness: 0.85, metalness: 0.15 })
  );
  wall.position.set(0, CEIL_H / 2, -BAY_D / 2 - 5);
  scene.add(wall);

  /* Ambient video wall in front of the racks */
  {
    const vw = new THREE.Mesh(
      new THREE.PlaneGeometry(Math.max(52, (endX - startX) + 26), 3.4),
      new THREE.MeshBasicMaterial({ map: videoWallTex() })
    );
    vw.position.set((startX + endX) / 2, 4.5, -BAY_D / 2 - 4.85);
    scene.add(vw);
  }

  /* Ceiling + alert strips (pulse amber while exceptions are open) */
  const ceil = new THREE.Mesh(
    new THREE.PlaneGeometry(190, 60),
    new THREE.MeshStandardMaterial({ color: 0x0a101c, roughness: 0.95, metalness: 0.05 })
  );
  ceil.rotation.x = Math.PI / 2;
  ceil.position.y = CEIL_H;
  scene.add(ceil);

  const alertStrips = [];
  for (let i = -9; i <= 11; i++) {
    const panel = new THREE.Mesh(
      new THREE.PlaneGeometry(2.4, 0.9),
      new THREE.MeshBasicMaterial({ color: 0xcfdbee })
    );
    panel.rotation.x = Math.PI / 2;
    panel.position.set(i * 4.2, CEIL_H - 0.03, 4.5);
    scene.add(panel);

    const strip = new THREE.Mesh(
      new THREE.PlaneGeometry(2.4, 0.14),
      new THREE.MeshBasicMaterial({ color: AMBER, transparent: true, opacity: 0.75 })
    );
    strip.rotation.x = Math.PI / 2;
    strip.position.set(i * 4.2, CEIL_H - 0.04, 6.1);
    scene.add(strip);
    alertStrips.push(strip);
  }

  /* Cable-tray guide line along the floor */
  for (let i = 0; i < 34; i++) {
    const seg = new THREE.Mesh(
      new THREE.BoxGeometry(1.3, 0.03, 0.16),
      new THREE.MeshBasicMaterial({ color: 0x46587a })
    );
    seg.position.set(-26 + i * 1.7, 0.03, 6.4);
    scene.add(seg);
  }

  const steelMat = new THREE.MeshStandardMaterial({
    map: steelTex(), color: 0xffffff, roughness: 0.35, metalness: 0.85,
    envMap: env, envMapIntensity: 0.85,
  });
  const shellMat = new THREE.MeshStandardMaterial({
    color: 0x1b2536, roughness: 0.55, metalness: 0.5, envMap: env, envMapIntensity: 0.5,
  });

  /* Holographic exception beacon above an unresolved station */
  function makeBeacon() {
    const g = new THREE.Group();
    const mk = (geo, op) => {
      const m = new THREE.Mesh(
        geo, new THREE.MeshBasicMaterial({ color: AMBER, transparent: true, opacity: op })
      );
      m.userData.baseOpacity = op;
      return m;
    };
    const ring = mk(new THREE.TorusGeometry(0.85, 0.04, 12, 64), 0.95);
    const ring2 = mk(new THREE.TorusGeometry(0.62, 0.026, 12, 64), 0.45);
    ring2.rotation.x = Math.PI / 3;
    // warning triangle
    const side = 0.62, bar = 0.05;
    for (let a = 0; a < 3; a++) {
      const edge = mk(new THREE.BoxGeometry(side, bar, bar), 0.95);
      const ang = a * (Math.PI * 2 / 3) + Math.PI / 2;
      edge.position.set(Math.cos(ang) * 0.18, Math.sin(ang) * 0.18, 0);
      edge.rotation.z = ang + Math.PI / 2;
      g.add(edge);
    }
    const stem = mk(new THREE.BoxGeometry(0.05, 0.22, 0.05), 0.95);
    stem.position.y = 0.04;
    const dot = mk(new THREE.BoxGeometry(0.07, 0.07, 0.05), 0.95);
    dot.position.y = -0.14;
    g.add(ring, ring2, stem, dot);
    return g;
  }

  const stations = [];
  function makeStation(i) {
    const g = new THREE.Group();
    const x = startX + i * (BAY_W + GAP);
    g.position.set(x, 0, 0);

    /* Desk: a slab on two plinths */
    const desk = new THREE.Mesh(new THREE.BoxGeometry(6.4, 0.16, 2.2), steelMat);
    desk.position.set(0, 0.95, 1.4);
    desk.castShadow = true;
    desk.receiveShadow = true;
    g.add(desk);
    [-2.5, 2.5].forEach((px) => {
      const plinth = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.95, 1.9), shellMat);
      plinth.position.set(px, 0.475, 1.4);
      plinth.castShadow = true;
      g.add(plinth);
    });
    // modesty panel
    const panel = new THREE.Mesh(new THREE.BoxGeometry(5.1, 0.75, 0.08), shellMat);
    panel.position.set(0, 0.5, 2.42);
    g.add(panel);

    /* Desk edge status bar — the at-a-glance state of this station */
    const barMat = new THREE.MeshBasicMaterial({ color: AMBER });
    const statusBar = new THREE.Mesh(new THREE.BoxGeometry(6.4, 0.09, 0.09), barMat);
    statusBar.position.set(0, 1.02, 2.5);
    g.add(statusBar);

    /* Monitor bank: three angled screens on a crossbar */
    const crossbar = new THREE.Mesh(new THREE.BoxGeometry(5.6, 0.09, 0.09), steelMat);
    crossbar.position.set(0, 1.55, 0.75);
    g.add(crossbar);
    [-1.5, 0, 1.5].forEach((px) => {
      const stalk = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.5, 0.07), steelMat);
      stalk.position.set(px, 1.3, 0.75);
      g.add(stalk);
    });

    const monitors = [];
    [-1.95, 0, 1.95].forEach((px, k) => {
      const bezel = new THREE.Mesh(new THREE.BoxGeometry(1.85, 1.16, 0.07), shellMat);
      const yaw = -px * 0.12;
      bezel.position.set(px, 2.28, 0.72 + Math.abs(px) * 0.06);
      bezel.rotation.y = yaw;
      bezel.rotation.x = -0.07;
      g.add(bezel);

      const offMat = new THREE.MeshBasicMaterial({ map: screenTex('offline', i * 3 + k) });
      const liveMat = new THREE.MeshBasicMaterial({ map: screenTex('live', i * 3 + k) });
      const face = new THREE.Mesh(new THREE.PlaneGeometry(1.7, 1.02), offMat);
      face.position.set(0, 0, 0.038);
      bezel.add(face);
      monitors.push({ face, offMat, liveMat });
    });

    /* Desk terminal — where sign-off lands */
    const termLocked = new THREE.MeshBasicMaterial({ map: terminalTex('locked') });
    const termCleared = new THREE.MeshBasicMaterial({ map: terminalTex('cleared') });
    const terminal = new THREE.Mesh(new THREE.BoxGeometry(0.78, 0.98, 0.06), termLocked);
    terminal.position.set(2.15, 1.36, 1.55);
    terminal.rotation.x = -0.5;
    g.add(terminal);

    /* Evidence hologram: three bars that stand up when the station clears */
    const holo = new THREE.Group();
    const holoBars = [];
    [-0.26, 0, 0.26].forEach((px, k) => {
      const m = new THREE.Mesh(
        new THREE.BoxGeometry(0.16, 0.5 + k * 0.22, 0.16),
        new THREE.MeshBasicMaterial({ color: AMBER, transparent: true, opacity: 0.5 })
      );
      m.position.set(px, (0.5 + k * 0.22) / 2, 0);
      holo.add(m);
      holoBars.push(m);
    });
    holo.position.set(-2.0, 1.06, 1.5);
    holo.scale.setScalar(0.9);
    g.add(holo);

    /* Nameplate */
    const sign = new THREE.Mesh(
      new THREE.PlaneGeometry(2.9, 0.96),
      new THREE.MeshBasicMaterial({ map: signTex(i + 1, stationLabels[i] || '') })
    );
    sign.position.set(0, 3.55, 0.4);
    g.add(sign);

    const beacon = makeBeacon();
    beacon.position.set(0, 4.75, 0.4);
    g.add(beacon);

    const glow = new THREE.PointLight(TEAL, 0, 13);
    glow.position.set(0, 2.6, 1.6);
    g.add(glow);

    scene.add(g);
    return {
      group: g, monitors, terminal, termCleared, statusBar, holo, holoBars, beacon, glow, x,
      unlockT: -1, state: i === 0 ? 'active' : 'locked',
    };
  }
  for (let i = 0; i < roomCount; i++) stations.push(makeStation(i));

  /* Master status board */
  let openCount = roomCount;
  const boardMat = new THREE.MeshBasicMaterial({ map: boardTex(openCount, roomCount) });
  const board = new THREE.Mesh(new THREE.PlaneGeometry(10.4, 5.2), boardMat);
  board.position.set(endX + BAY_W / 2 + 9, 4.1, -2.2);
  scene.add(board);
  {
    const frame = new THREE.Mesh(new THREE.BoxGeometry(10.9, 5.7, 0.18), shellMat);
    frame.position.copy(board.position);
    frame.position.z -= 0.12;
    scene.add(frame);
    // support legs
    [-4.4, 4.4].forEach((px) => {
      const leg = new THREE.Mesh(new THREE.BoxGeometry(0.22, 3.1, 0.22), steelMat);
      leg.position.set(board.position.x + px, 1.55, board.position.z - 0.1);
      scene.add(leg);
    });
  }
  const boardGlow = new THREE.PointLight(AMBER, 0.45, 20);
  boardGlow.position.set(board.position.x, 4.2, 2.2);
  scene.add(boardGlow);

  function refreshBoard() {
    boardMat.map.dispose();
    boardMat.map = boardTex(openCount, roomCount);
    boardMat.needsUpdate = true;
    boardGlow.color.set(openCount === 0 ? TEAL : AMBER);
  }

  /* Dust motes in the light beams */
  let motes = null;
  {
    const n = 170, pos = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      pos[i * 3] = startX - 6 + Math.random() * (endX - startX + 26);
      pos[i * 3 + 1] = 0.4 + Math.random() * 6.5;
      pos[i * 3 + 2] = -3 + Math.random() * 11;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    motes = new THREE.Points(geo, new THREE.PointsMaterial({
      color: 0x8fa4c4, size: 0.045, transparent: true, opacity: 0.5, depthWrite: false,
    }));
    scene.add(motes);
  }

  /* Sign-off burst at the board */
  let burst = null;
  function launchBurst() {
    const n = 350, pos = new Float32Array(n * 3), vel = [];
    const cx = board.position.x - 2;
    for (let i = 0; i < n; i++) {
      pos[i * 3] = cx;
      pos[i * 3 + 1] = 3.2;
      pos[i * 3 + 2] = 0;
      vel.push([(Math.random() - 0.5) * 0.22, Math.random() * 0.3 + 0.08, (Math.random() - 0.5) * 0.22]);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    burst = {
      pts: new THREE.Points(geo, new THREE.PointsMaterial({ size: 0.18, color: TEAL })),
      vel, life: 0,
    };
    scene.add(burst.pts);
  }

  /* Camera */
  let done = false;
  function camTargetFor(i) {
    if (i >= roomCount) {
      return {
        pos: new THREE.Vector3(board.position.x - 13, 6.6, 14),
        look: new THREE.Vector3(board.position.x, 3.8, 0),
      };
    }
    const x = stations[i].x;
    return { pos: new THREE.Vector3(x - 4.2, 6.4, 15.2), look: new THREE.Vector3(x, 2.1, 0) };
  }
  let camFrom = camTargetFor(0), camTo = camTargetFor(0), camT = 1;
  camera.position.copy(camTo.pos);
  const lookCur = camTo.look.clone();

  function glideTo(i, instant = false) {
    camFrom = { pos: camera.position.clone(), look: lookCur.clone() };
    camTo = camTargetFor(i);
    camT = (reduceMotion || instant) ? 1 : 0;
    if (camT === 1) {
      camera.position.copy(camTo.pos);
      lookCur.copy(camTo.look);
    }
    const t = i >= roomCount ? board.position : new THREE.Vector3(stations[i].x, 0, 0);
    spot.position.set(t.x, CEIL_H - 0.4, 4.4);
    spot.target.position.set(t.x, 0, 1.4);
  }
  spot.position.set(stations[0].x, CEIL_H - 0.4, 4.4);
  spot.target.position.set(stations[0].x, 0, 1.4);
  const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

  function resize() {
    const r = container.getBoundingClientRect();
    renderer.setSize(r.width, r.height);
    camera.aspect = r.width / r.height;
    camera.updateProjectionMatrix();
  }
  addEventListener('resize', resize);
  resize();

  /* Drop a station straight into its cleared end-state */
  function applyCleared(s) {
    s.state = 'open';
    s.unlockT = -1;
    s.beacon.visible = false;
    s.monitors.forEach((m) => { m.face.material = m.liveMat; });
    s.terminal.material = s.termCleared;
    s.statusBar.material.color.set(TEAL);
    s.holoBars.forEach((b) => { b.material.color.set(TEAL); b.material.opacity = 0.85; });
    s.glow.intensity = 1.5;
  }

  const clock = new THREE.Clock();
  function animate() {
    requestAnimationFrame(animate);
    const dt = Math.min(clock.getDelta(), 0.05);
    const t = clock.elapsedTime;

    if (camT < 1) camT = Math.min(1, camT + dt / 1.8);
    const e = easeInOut(camT);
    camera.position.lerpVectors(camFrom.pos, camTo.pos, e);
    lookCur.lerpVectors(camFrom.look, camTo.look, e);
    if (!reduceMotion) {
      camera.position.y += Math.sin(t * 0.5) * 0.05;
      camera.position.x += Math.sin(t * 0.31) * 0.045;
    }
    camera.lookAt(lookCur);

    // ceiling alert strips: pulse amber on alert, settle teal when stood down
    const pulse = done ? 0.35 : 0.45 + Math.sin(t * 2.2) * 0.3;
    alertStrips.forEach((s) => {
      s.material.opacity = reduceMotion ? (done ? 0.35 : 0.6) : pulse;
      s.material.color.set(done ? TEAL : AMBER);
    });

    stations.forEach((s, i) => {
      // beacon: spin + hologram flicker while the exception is open
      if (s.state !== 'open' || s.unlockT >= 0) {
        s.beacon.rotation.y += dt * (s.state === 'active' ? 1.1 : 0.35);
        if (!reduceMotion) {
          s.beacon.position.y = 4.75 + Math.sin(t * 1.4 + i) * 0.11;
          const f = 0.86 + Math.sin(t * 23 + i * 7) * 0.06 + Math.sin(t * 61 + i * 3) * 0.04;
          if (s.unlockT < 0) {
            s.beacon.children.forEach((m) => {
              m.material.opacity = (m.userData.baseOpacity || 0.9) * f;
            });
          }
        }
      }
      // evidence hologram idles
      s.holo.rotation.y += dt * 0.55;
      if (!reduceMotion) {
        s.holoBars.forEach((b, k) => {
          b.material.opacity = (s.state === 'open' ? 0.85 : 0.5) + Math.sin(t * 1.6 + k) * 0.08;
        });
      }

      if (s.unlockT >= 0) {
        s.unlockT += dt;
        const u = s.unlockT;
        // beacon flares teal and dissolves
        s.beacon.children.forEach((m) => {
          m.material.color.set(TEAL);
          m.material.opacity = Math.max(0, 1 - u / 0.9);
        });
        s.beacon.scale.setScalar(1 + u * 1.6);
        // monitors come online one after another
        s.monitors.forEach((m, k) => {
          if (u > 0.3 + k * 0.18 && m.face.material !== m.liveMat) m.face.material = m.liveMat;
        });
        if (u > 0.2 && s.statusBar.material.color.getHex() !== 0x58C7B4) {
          s.statusBar.material.color.set(TEAL);
          s.terminal.material = s.termCleared;
          s.holoBars.forEach((b) => b.material.color.set(TEAL));
        }
        s.glow.intensity = Math.min(1.5, u * 2);
        if (u > 1.2) {
          s.beacon.visible = false;
          s.unlockT = -1;
          s.state = 'open';
        }
      }
    });

    if (motes && !reduceMotion) {
      const p = motes.geometry.attributes.position.array;
      for (let i = 0; i < p.length; i += 3) {
        p[i] += Math.sin(t * 0.3 + i) * 0.0008;
        p[i + 1] += 0.0016;
        if (p[i + 1] > 7) p[i + 1] = 0.4;
      }
      motes.geometry.attributes.position.needsUpdate = true;
    }

    if (burst) {
      burst.life += dt;
      const p = burst.pts.geometry.attributes.position.array;
      burst.vel.forEach((v, i) => {
        v[1] -= dt * 0.35;
        p[i * 3] += v[0];
        p[i * 3 + 1] += v[1];
        p[i * 3 + 2] += v[2];
        if (p[i * 3 + 1] < 0.05) {
          p[i * 3 + 1] = 0.05;
          v[1] = 0;
          v[0] *= 0.9;
          v[2] *= 0.9;
        }
      });
      burst.pts.geometry.attributes.position.needsUpdate = true;
      burst.pts.material.opacity = Math.max(0, 1 - burst.life / 6);
      burst.pts.material.transparent = true;
    }

    renderer.render(scene, camera);
  }
  animate();

  return {
    glideTo,
    setActive(i) {
      if (stations[i] && stations[i].state === 'locked') stations[i].state = 'active';
    },
    startUnlock(i) {
      if (!stations[i]) return;
      stations[i].unlockT = 0;
      openCount = Math.max(0, openCount - 1);
      refreshBoard();
    },
    // Jump straight to the cleared end-state — matches where startUnlock's
    // animation lands, used when restoring a refreshed session.
    openInstant(i) {
      const s = stations[i];
      if (!s) return;
      applyCleared(s);
      openCount = Math.max(0, roomCount - stations.filter((x) => x.state === 'open').length);
      refreshBoard();
    },
    setDone(v) {
      done = !!v;
      if (done) {
        openCount = 0;
        refreshBoard();
      }
    },
    celebrate() {
      launchBurst();
      boardGlow.intensity = 1.5;
      boardGlow.color.set(TEAL);
    },
  };
}
