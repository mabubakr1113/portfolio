"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Local hero robot — sleek, modern humanoid with expressive eyes.
 *
 * Design notes:
 *  - Confined canvas (sized to its parent container, not the full page).
 *  - Smooth capsule + ovoid silhouette (Tesla Optimus / Figure 02 vibe).
 *  - Two articulated eyes inside a wraparound visor that:
 *      · track the cursor with smooth easing
 *      · saccade between focal points every few seconds
 *      · blink (single + occasional double-blink)
 *      · emote: neutral / happy ^_^ / surprised / focused / sleepy
 *  - Idle behaviours: floating, head turn, hand fidget, periodic wave.
 *  - No global page coupling — entirely contained in one component.
 */
export default function HeroRobot() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // ─── Sizing (responsive to parent) ────────────────────────────────────
    const getSize = () => ({
      w: container.clientWidth,
      h: container.clientHeight,
    });
    let { w, h } = getSize();

    // ─── Scene / Camera / Renderer ────────────────────────────────────────
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(28, w / h, 0.1, 50);
    camera.position.set(0, 0.4, 8.5);
    camera.lookAt(0, 0.2, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(w, h);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);
    renderer.domElement.style.display = "block";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";

    // ─── Lighting (premium soft setup) ────────────────────────────────────
    scene.add(new THREE.AmbientLight(0xfff4e0, 0.55));
    const key = new THREE.DirectionalLight(0xfff0d8, 1.4);
    key.position.set(3, 4, 4);
    scene.add(key);
    const fill = new THREE.DirectionalLight(0xb8c4ff, 0.6);
    fill.position.set(-3, 1, 3);
    scene.add(fill);
    const rim = new THREE.DirectionalLight(0xff7a45, 0.45);
    rim.position.set(-2, 2, -3);
    scene.add(rim);

    // ─── Palette + Materials ──────────────────────────────────────────────
    const ink = new THREE.Color("#1A1A1F");
    const panel = new THREE.Color("#2A2A30");
    const silver = new THREE.Color("#A8AAB0");
    const accent = new THREE.Color("#FF4D14");
    const eyeColor = new THREE.Color("#00C8FF"); // cyan eyes — modern AI look

    const bodyMat = new THREE.MeshPhysicalMaterial({
      color: ink,
      metalness: 0.5,
      roughness: 0.32,
      clearcoat: 1.0,
      clearcoatRoughness: 0.08,
    });
    const panelMat = new THREE.MeshPhysicalMaterial({
      color: panel,
      metalness: 0.7,
      roughness: 0.25,
      clearcoat: 0.8,
      clearcoatRoughness: 0.1,
    });
    const jointMat = new THREE.MeshPhysicalMaterial({
      color: silver,
      metalness: 0.95,
      roughness: 0.3,
      clearcoat: 0.5,
    });
    const visorMat = new THREE.MeshPhysicalMaterial({
      color: 0x0a0a0e,
      metalness: 0.3,
      roughness: 0.05,
      clearcoat: 1.0,
      clearcoatRoughness: 0.0,
      transmission: 0.15,
      thickness: 0.02,
    });
    const eyeMat = new THREE.MeshBasicMaterial({
      color: eyeColor,
      transparent: true,
      opacity: 1.0,
    });
    const eyeGlowMat = new THREE.MeshBasicMaterial({
      color: eyeColor,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const accentMat = new THREE.MeshBasicMaterial({
      color: accent,
      transparent: true,
      opacity: 1.0,
    });
    const accentGlowMat = new THREE.MeshBasicMaterial({
      color: accent,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    // ─── Robot root ────────────────────────────────────────────────────────
    const robot = new THREE.Group();
    robot.position.y = -0.2;
    scene.add(robot);

    // ─── Torso (slim tapered capsule, slightly forward-leaning) ───────────
    const torsoGroup = new THREE.Group();
    robot.add(torsoGroup);

    const chest = new THREE.Mesh(
      new THREE.CapsuleGeometry(0.42, 0.5, 8, 24), bodyMat
    );
    chest.scale.set(1.15, 1.0, 0.85);
    chest.position.y = 0.15;
    torsoGroup.add(chest);

    // shoulder yoke (silver crossbar that shoulders attach to)
    const yoke = new THREE.Mesh(
      new THREE.CapsuleGeometry(0.1, 0.95, 6, 16), jointMat
    );
    yoke.rotation.z = Math.PI / 2;
    yoke.position.y = 0.55;
    torsoGroup.add(yoke);

    // chest seam (subtle silver line down the front)
    const seam = new THREE.Mesh(
      new THREE.BoxGeometry(0.015, 0.85, 0.01), jointMat
    );
    seam.position.set(0, 0.15, 0.4);
    torsoGroup.add(seam);

    // chest reactor — small orange dot with halo
    const reactor = new THREE.Mesh(
      new THREE.CircleGeometry(0.05, 24), accentMat
    );
    reactor.position.set(0, 0.05, 0.405);
    torsoGroup.add(reactor);
    const reactorHalo = new THREE.Mesh(
      new THREE.CircleGeometry(0.13, 32), accentGlowMat
    );
    reactorHalo.position.set(0, 0.05, 0.402);
    torsoGroup.add(reactorHalo);

    // hip pad
    const hip = new THREE.Mesh(
      new THREE.CapsuleGeometry(0.35, 0.12, 6, 18), panelMat
    );
    hip.scale.set(1.05, 1.0, 0.85);
    hip.position.y = -0.45;
    torsoGroup.add(hip);

    // ─── Neck ──────────────────────────────────────────────────────────────
    const neck = new THREE.Mesh(
      new THREE.CylinderGeometry(0.09, 0.11, 0.14, 16), jointMat
    );
    neck.position.y = 0.85;
    robot.add(neck);

    // ─── Head (ovoid helmet with wraparound visor) ────────────────────────
    const head = new THREE.Group();
    head.position.y = 1.08;
    robot.add(head);

    // helmet — slightly egg-shaped sphere (taller than wide)
    const helmet = new THREE.Mesh(
      new THREE.SphereGeometry(0.42, 32, 24), bodyMat
    );
    helmet.scale.set(0.92, 1.0, 0.95);
    head.add(helmet);

    // back-of-head accent strip
    const headStripe = new THREE.Mesh(
      new THREE.TorusGeometry(0.4, 0.008, 8, 32, Math.PI),
      jointMat
    );
    headStripe.rotation.y = Math.PI;
    head.add(headStripe);

    // wraparound visor — sphere segment across the front of the head
    const visorGeo = new THREE.SphereGeometry(
      0.43, 32, 12,
      -Math.PI / 1.9,            // azimuth start
       Math.PI * (2 / 1.9),      // azimuth length (wide wraparound)
       Math.PI / 2.7,            // polar start
       Math.PI / 4.5             // polar length
    );
    const visor = new THREE.Mesh(visorGeo, visorMat);
    head.add(visor);

    // visor outline (thin silver edge around the visor band)
    const visorOutline = new THREE.LineSegments(
      new THREE.EdgesGeometry(visorGeo, 1),
      new THREE.LineBasicMaterial({ color: silver, transparent: true, opacity: 0.4 })
    );
    head.add(visorOutline);

    // ─── Eyes (the centrepiece — proper expressive eyes) ──────────────────
    type Eye = {
      group: THREE.Group;
      iris: THREE.Mesh;
      pupil: THREE.Mesh;
      glow: THREE.Mesh;
      basePosX: number;
    };
    const buildEye = (xOffset: number): Eye => {
      const g = new THREE.Group();
      g.position.set(xOffset, 0.04, 0.43);
      head.add(g);

      // outer glow (soft halo around the iris)
      const glow = new THREE.Mesh(
        new THREE.CircleGeometry(0.075, 32), eyeGlowMat
      );
      glow.position.z = 0.002;
      g.add(glow);

      // iris (the eye disc — what blinks/squints)
      const iris = new THREE.Mesh(
        new THREE.CircleGeometry(0.052, 32), eyeMat
      );
      iris.position.z = 0.004;
      g.add(iris);

      // pupil (small dark center — moves to track cursor)
      const pupilMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
      const pupil = new THREE.Mesh(
        new THREE.CircleGeometry(0.018, 24), pupilMat
      );
      pupil.position.z = 0.006;
      g.add(pupil);

      return { group: g, iris, pupil, glow, basePosX: xOffset };
    };

    const eyeL = buildEye(-0.14);
    const eyeR = buildEye(0.14);

    // ─── Antenna (single, sleek) ──────────────────────────────────────────
    const antennaGroup = new THREE.Group();
    antennaGroup.position.set(0.1, 0.4, -0.02);
    antennaGroup.rotation.x = 0.18;
    antennaGroup.rotation.z = -0.05;
    head.add(antennaGroup);

    const antennaRod = new THREE.Mesh(
      new THREE.CylinderGeometry(0.008, 0.008, 0.32, 12), jointMat
    );
    antennaRod.position.y = 0.16;
    antennaGroup.add(antennaRod);

    const antennaTip = new THREE.Mesh(
      new THREE.SphereGeometry(0.028, 16, 16), accentMat
    );
    antennaTip.position.y = 0.33;
    antennaGroup.add(antennaTip);

    // ─── Arms (capsule, sphere joints, three-finger hand) ─────────────────
    const buildArm = (side: 1 | -1) => {
      const armGroup = new THREE.Group();
      armGroup.position.set(side * 0.55, 0.55, 0);
      robot.add(armGroup);

      const shoulder = new THREE.Mesh(
        new THREE.SphereGeometry(0.13, 20, 20), jointMat
      );
      armGroup.add(shoulder);

      const upper = new THREE.Mesh(
        new THREE.CapsuleGeometry(0.065, 0.42, 6, 14), bodyMat
      );
      upper.position.y = -0.32;
      armGroup.add(upper);

      const elbow = new THREE.Mesh(
        new THREE.SphereGeometry(0.078, 16, 16), jointMat
      );
      elbow.position.y = -0.6;
      armGroup.add(elbow);

      const forearmGroup = new THREE.Group();
      forearmGroup.position.y = -0.6;
      armGroup.add(forearmGroup);

      const forearm = new THREE.Mesh(
        new THREE.CapsuleGeometry(0.055, 0.38, 6, 14), bodyMat
      );
      forearm.position.y = -0.28;
      forearmGroup.add(forearm);

      const wrist = new THREE.Mesh(
        new THREE.SphereGeometry(0.06, 14, 14), jointMat
      );
      wrist.position.y = -0.52;
      forearmGroup.add(wrist);

      // three-finger hand
      const palm = new THREE.Mesh(
        new THREE.CapsuleGeometry(0.05, 0.06, 4, 12), bodyMat
      );
      palm.position.y = -0.6;
      forearmGroup.add(palm);

      [-0.035, 0, 0.035].forEach((fx) => {
        const finger = new THREE.Mesh(
          new THREE.CapsuleGeometry(0.012, 0.09, 4, 8), bodyMat
        );
        finger.position.set(fx, -0.7, 0.01);
        forearmGroup.add(finger);
      });
      const thumb = new THREE.Mesh(
        new THREE.CapsuleGeometry(0.014, 0.07, 4, 8), bodyMat
      );
      thumb.position.set(side * 0.04, -0.66, -0.02);
      thumb.rotation.z = side * 0.5;
      forearmGroup.add(thumb);

      return { armGroup, forearmGroup };
    };

    const armL = buildArm(-1);
    const armR = buildArm(1);

    // ─── Legs (short capsule legs, suggesting the robot is in a "stand" pose) ─
    const buildLeg = (side: 1 | -1) => {
      const legGroup = new THREE.Group();
      legGroup.position.set(side * 0.18, -0.55, 0);
      robot.add(legGroup);

      const thigh = new THREE.Mesh(
        new THREE.CapsuleGeometry(0.09, 0.35, 6, 14), bodyMat
      );
      thigh.position.y = -0.22;
      legGroup.add(thigh);

      const knee = new THREE.Mesh(
        new THREE.SphereGeometry(0.095, 14, 14), jointMat
      );
      knee.position.y = -0.45;
      legGroup.add(knee);

      const shin = new THREE.Mesh(
        new THREE.CapsuleGeometry(0.082, 0.3, 6, 14), bodyMat
      );
      shin.position.y = -0.65;
      legGroup.add(shin);

      // sleek low-profile boot
      const boot = new THREE.Mesh(
        new THREE.CapsuleGeometry(0.1, 0.2, 4, 12), panelMat
      );
      boot.rotation.z = Math.PI / 2;
      boot.position.set(side * 0.03, -0.86, 0.08);
      legGroup.add(boot);

      return legGroup;
    };

    const legL = buildLeg(-1);
    const legR = buildLeg(1);

    // ─── Ground shadow ────────────────────────────────────────────────────
    const shadow = new THREE.Mesh(
      new THREE.CircleGeometry(0.5, 32),
      new THREE.MeshBasicMaterial({
        color: 0x000000, transparent: true, opacity: 0.18,
      })
    );
    shadow.rotation.x = -Math.PI / 2;
    shadow.position.y = -1.5;
    robot.add(shadow);

    // ─── Floating accent ring (subtle decoration around the feet) ────────
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(0.55, 0.005, 8, 64),
      new THREE.MeshBasicMaterial({
        color: accent, transparent: true, opacity: 0.55,
        blending: THREE.AdditiveBlending, depthWrite: false,
      })
    );
    ring.rotation.x = Math.PI / 2;
    ring.position.y = -1.48;
    robot.add(ring);

    // ─── Pointer + scene state ────────────────────────────────────────────
    const pointer = new THREE.Vector2(0, 0);
    const pointerTarget = new THREE.Vector2(0, 0);

    const onPointer = (e: PointerEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      // normalize relative to the canvas itself
      pointerTarget.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      pointerTarget.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    };
    window.addEventListener("pointermove", onPointer, { passive: true });

    // ─── Eye behaviour state machine ──────────────────────────────────────
    type Emotion = "neutral" | "happy" | "surprised" | "focused" | "sleepy" | "wink";
    let emotion: Emotion = "neutral";
    let emotionUntil = 0;
    const setEmotion = (e: Emotion, dur: number, now: number) => {
      emotion = e;
      emotionUntil = now + dur;
    };

    // saccade: occasional micro look-direction shifts
    let saccadeTarget = new THREE.Vector2(0, 0);
    let nextSaccadeAt = 1.5;

    // blink: periodic blinks, occasionally double
    let blinkUntil = -1;
    let nextBlinkAt = 2.5;
    let blinkDouble = false;
    let blinkSecond = -1;

    // gesture: periodic right-arm wave / head tilt / etc.
    type Gesture = "none" | "wave" | "headtilt" | "look-down" | "stretch";
    let gesture: Gesture = "none";
    let gestureStart = -1;
    let nextGestureAt = 4;
    const pickGesture = (): Gesture => {
      const opts: Gesture[] = ["wave", "headtilt", "look-down", "stretch"];
      return opts[Math.floor(Math.random() * opts.length)];
    };

    // ─── Resize ───────────────────────────────────────────────────────────
    const onResize = () => {
      const sz = getSize();
      w = sz.w; h = sz.h;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    const ro = new ResizeObserver(onResize);
    ro.observe(container);

    // ─── Animation loop ──────────────────────────────────────────────────
    const clock = new THREE.Clock();
    let raf = 0;

    armL.armGroup.rotation.z = 0.12;
    armR.armGroup.rotation.z = -0.12;
    armL.forearmGroup.rotation.x = -0.2;
    armR.forearmGroup.rotation.x = -0.2;

    const animate = () => {
      const t = clock.getElapsedTime();

      // smooth pointer
      pointer.lerp(pointerTarget, 0.1);

      // ── floating + breathing ───────────────────────────────────────────
      robot.position.y = -0.2 + Math.sin(t * 0.9) * 0.04;
      torsoGroup.scale.y = 1 + Math.sin(t * 1.3) * 0.012;

      // ── reactor + antenna pulse ────────────────────────────────────────
      const reactorPulse = 0.9 + Math.sin(t * 2.3) * 0.1;
      reactor.scale.setScalar(reactorPulse);
      reactorHalo.scale.setScalar(0.9 + Math.sin(t * 2.3 + 0.5) * 0.15);

      antennaTip.scale.setScalar(0.85 + Math.sin(t * 3.0) * 0.15);
      (antennaTip.material as THREE.MeshBasicMaterial).opacity =
        0.7 + (Math.sin(t * 3.0) * 0.5 + 0.5) * 0.3;

      // ── gesture management ──────────────────────────────────────────────
      if (gesture === "none" && t > nextGestureAt) {
        gesture = pickGesture();
        gestureStart = t;
        nextGestureAt = t + 6 + Math.random() * 6;
        // pair with an emotion
        if (gesture === "wave") setEmotion("happy", 2.2, t);
        if (gesture === "headtilt") setEmotion("focused", 2.0, t);
        if (gesture === "look-down") setEmotion("focused", 1.8, t);
        if (gesture === "stretch") setEmotion("surprised", 1.5, t);
      }
      const gAge = t - gestureStart;
      let gestureRArm = 0;       // right arm raise amount
      let gestureRForearm = 0;   // right forearm bend
      let gestureRWave = 0;      // right hand wave swing
      let gestureLArm = 0;       // left arm raise (stretch)
      let gestureHeadTilt = 0;   // head roll
      let gestureHeadDown = 0;   // head pitch down (look at page)

      if (gesture === "wave") {
        const dur = 2.4;
        const p = Math.min(gAge / dur, 1);
        const fade = Math.sin(p * Math.PI); // 0 → 1 → 0
        gestureRArm = fade * 1.9;
        gestureRForearm = -fade * 0.7;
        gestureRWave = Math.sin(gAge * 6) * fade * 0.4;
        if (p >= 1) gesture = "none";
      } else if (gesture === "headtilt") {
        const dur = 2.2;
        const p = Math.min(gAge / dur, 1);
        const fade = Math.sin(p * Math.PI);
        gestureHeadTilt = fade * 0.3;
        if (p >= 1) gesture = "none";
      } else if (gesture === "look-down") {
        const dur = 2.0;
        const p = Math.min(gAge / dur, 1);
        const fade = Math.sin(p * Math.PI);
        gestureHeadDown = fade * 0.5;
        if (p >= 1) gesture = "none";
      } else if (gesture === "stretch") {
        const dur = 1.8;
        const p = Math.min(gAge / dur, 1);
        const fade = Math.sin(p * Math.PI);
        gestureRArm = fade * 1.6;
        gestureLArm = fade * 1.6;
        if (p >= 1) gesture = "none";
      }

      // ── head tracking (pointer + autonomous scan + gesture) ───────────
      const scan = Math.sin(t * 0.35) * 0.18;
      head.rotation.y = pointer.x * 0.5 + scan;
      head.rotation.x = -pointer.y * 0.3 + Math.sin(t * 0.6) * 0.03 + gestureHeadDown;
      head.rotation.z = gestureHeadTilt;

      // ── saccades ───────────────────────────────────────────────────────
      if (t > nextSaccadeAt) {
        saccadeTarget.set(
          (Math.random() - 0.5) * 0.6,
          (Math.random() - 0.5) * 0.4
        );
        nextSaccadeAt = t + 0.8 + Math.random() * 2.2;
      }

      // pupil look direction = pointer + saccade
      const lookX = pointer.x * 0.018 + saccadeTarget.x * 0.012;
      const lookY = pointer.y * 0.014 + saccadeTarget.y * 0.01;

      [eyeL, eyeR].forEach((eye) => {
        eye.pupil.position.x = lookX;
        eye.pupil.position.y = lookY;
        // iris drifts a tiny bit too, but less
        eye.iris.position.x = lookX * 0.4;
        eye.iris.position.y = lookY * 0.4;
      });

      // ── blink scheduling ──────────────────────────────────────────────
      if (t > nextBlinkAt && blinkUntil < 0) {
        blinkUntil = t + 0.13;
        blinkDouble = Math.random() < 0.25;
        blinkSecond = blinkDouble ? t + 0.32 : -1;
        nextBlinkAt = t + 3 + Math.random() * 4;
      }
      let blinking = t < blinkUntil;
      if (blinkSecond > 0 && t > blinkSecond && t < blinkSecond + 0.13) {
        blinking = true;
      }
      if (t > blinkUntil && (blinkSecond < 0 || t > blinkSecond + 0.13)) {
        blinkUntil = -1;
        blinkSecond = -1;
      }

      // ── emotion target shape ──────────────────────────────────────────
      if (t > emotionUntil) emotion = "neutral";

      // shape each eye based on emotion
      const applyEyeShape = (eye: Eye, isLeft: boolean) => {
        let sy = 1.0;
        let sx = 1.0;
        let irisOpacity = 1.0;
        let glowOpacity = 0.35;

        switch (emotion) {
          case "happy":
            // ^^ shape — squint, slight smile bulge
            sy = 0.45; sx = 1.2;
            break;
          case "surprised":
            sy = 1.35; sx = 1.15;
            glowOpacity = 0.55;
            break;
          case "focused":
            sy = 0.65; sx = 0.85;
            break;
          case "sleepy":
            sy = 0.3;
            break;
          case "wink":
            if ((isLeft && Math.random() < 0.5) || !isLeft) sy = 0.1;
            break;
          default:
            // neutral: subtle idle modulation
            sy = 1.0 + Math.sin(t * 1.5) * 0.04;
        }

        if (blinking) {
          sy = 0.08;
          glowOpacity = 0.1;
        }

        eye.iris.scale.set(sx, sy, 1);
        eye.pupil.scale.set(sx, sy, 1);
        eye.glow.scale.set(sx, sy, 1);
        (eye.iris.material as THREE.MeshBasicMaterial).opacity = irisOpacity;
        (eye.glow.material as THREE.MeshBasicMaterial).opacity = glowOpacity;
      };
      applyEyeShape(eyeL, true);
      applyEyeShape(eyeR, false);

      // ── arms idle + gestures ──────────────────────────────────────────
      const idleL = Math.sin(t * 1.0) * 0.05;
      const idleR = Math.sin(t * 1.0 + Math.PI) * 0.05;
      armL.armGroup.rotation.z = 0.12 + idleL + gestureLArm * 0.4;
      armR.armGroup.rotation.z = -0.12 + idleR - gestureRArm * 0.3 - gestureRWave;
      armL.armGroup.rotation.x = -gestureLArm * 0.9;
      armR.armGroup.rotation.x = -gestureRArm * 1.2;
      armL.forearmGroup.rotation.x =
        -0.2 - Math.sin(t * 1.4) * 0.08 - gestureLArm * 0.6;
      armR.forearmGroup.rotation.x =
        -0.2 - Math.sin(t * 1.4 + 0.6) * 0.08 + gestureRForearm;

      // ── leg micro-shifts (no walk, just weight shift) ─────────────────
      legL.rotation.x = Math.sin(t * 1.1) * 0.02;
      legR.rotation.x = -Math.sin(t * 1.1) * 0.02;

      // ── ring drift ────────────────────────────────────────────────────
      ring.rotation.z = t * 0.2;
      (ring.material as THREE.MeshBasicMaterial).opacity =
        0.4 + (Math.sin(t * 1.2) * 0.5 + 0.5) * 0.25;

      // ── slight body sway based on pointer (engaged feel) ──────────────
      robot.rotation.y = pointer.x * 0.18;

      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onPointer);
      ro.disconnect();
      scene.traverse((obj) => {
        const m = obj as THREE.Mesh;
        if (m.geometry) m.geometry.dispose();
        const mat = m.material;
        if (Array.isArray(mat)) mat.forEach((x) => x.dispose());
        else if (mat) (mat as THREE.Material).dispose();
      });
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="relative w-full aspect-square overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at center, rgba(20,18,15,0.06), transparent 70%)",
      }}
    />
  );
}
