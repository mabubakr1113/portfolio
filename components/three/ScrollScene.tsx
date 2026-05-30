"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const [shell, panel, accent, blue] = [0x24262a, 0xd9d1be, 0xff4d14, 0x1638ff];

function mesh(geo: THREE.BufferGeometry, mat: THREE.Material, pos: [number, number, number]) {
  const part = new THREE.Mesh(geo, mat);
  part.position.set(...pos);
  return part;
}

function createRobot() {
  const robot = new THREE.Group();
  const dark = new THREE.MeshStandardMaterial({ color: shell, metalness: 0.55, roughness: 0.34 });
  const light = new THREE.MeshStandardMaterial({ color: panel, metalness: 0.25, roughness: 0.52 });
  const glow = new THREE.MeshBasicMaterial({ color: accent });
  const visor = new THREE.MeshBasicMaterial({ color: blue });
  const body = mesh(new THREE.BoxGeometry(0.72, 0.9, 0.32), dark, [0, 0, 0]);
  const face = mesh(new THREE.CapsuleGeometry(0.22, 0.42, 8, 20), dark, [0, 0.88, 0]);
  face.rotation.z = Math.PI / 2;
  const eye = mesh(new THREE.BoxGeometry(0.42, 0.035, 0.035), visor, [0, 0.88, 0.24]);
  const core = mesh(new THREE.TorusGeometry(0.16, 0.025, 10, 36), glow, [0, 0.03, 0.19]);
  const belly = mesh(new THREE.SphereGeometry(0.38, 24, 16), dark, [0, -0.68, 0]);
  robot.add(body, face, eye, core, belly);
  [-1, 1].forEach((side) => {
    const arm = new THREE.Group();
    arm.position.set(side * 0.52, 0.22, 0);
    arm.add(mesh(new THREE.SphereGeometry(0.11, 16, 12), light, [0, 0.25, 0]));
    arm.add(mesh(new THREE.CapsuleGeometry(0.045, 0.48, 6, 12), dark, [0, -0.08, 0]));
    arm.add(mesh(new THREE.SphereGeometry(0.07, 12, 10), glow, [0, -0.4, 0]));
    robot.add(arm);
    arm.name = side < 0 ? "armLeft" : "armRight";
    const leg = new THREE.Group();
    leg.position.set(side * 0.18, -1.02, 0);
    leg.add(mesh(new THREE.CapsuleGeometry(0.06, 0.42, 6, 12), dark, [0, -0.12, 0]));
    leg.add(mesh(new THREE.BoxGeometry(0.24, 0.06, 0.16), light, [side * 0.03, -0.39, 0.06]));
    robot.add(leg);
    leg.name = side < 0 ? "legLeft" : "legRight";
  });
  const antenna = mesh(new THREE.BoxGeometry(0.36, 0.02, 0.02), visor, [0, 1.18, 0]);
  const sensor = mesh(new THREE.BoxGeometry(0.06, 0.06, 0.025), glow, [0.24, 1.18, 0.02]);
  robot.add(antenna, sensor);
  return { robot, materials: [dark, light, glow, visor] };
}

function createParticles() {
  const count = 90;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 12;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 7;
    positions[i * 3 + 2] = -1 - Math.random() * 5;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  const mat = new THREE.PointsMaterial({ color: blue, size: 0.035, transparent: true, opacity: 0.45 });
  return { points: new THREE.Points(geo, mat), geo, mat };
}

export default function ScrollScene() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, innerWidth / innerHeight, 0.1, 100);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    renderer.setSize(innerWidth, innerHeight);
    el.appendChild(renderer.domElement);
    scene.add(new THREE.AmbientLight(0xf2eadb, 1.8));
    const key = new THREE.DirectionalLight(0xffffff, 2.2);
    key.position.set(-3, 4, 5);
    scene.add(key);
    camera.position.set(0, 0.4, 8.5);
    const { robot, materials } = createRobot();
    const { points, geo, mat } = createParticles();
    scene.add(robot, points);
    const onResize = () => {
      camera.aspect = innerWidth / innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(innerWidth, innerHeight);
    };
    const pointer = new THREE.Vector2(), target = new THREE.Vector2();
    const onPointer = (event: PointerEvent) =>
      target.set((event.clientX / innerWidth) * 2 - 1, (event.clientY / innerHeight) * 2 - 1);
    addEventListener("resize", onResize);
    addEventListener("pointermove", onPointer, { passive: true });
    let raf = 0;
    const clock = new THREE.Clock();
    const animate = () => {
      const t = clock.getElapsedTime();
      const mobile = innerWidth < 768;
      pointer.lerp(target, 0.08);
      robot.position.set(pointer.x * (mobile ? 0.18 : 0.38), mobile ? -0.75 + pointer.y * 0.12 : -0.25 + Math.sin(t) * 0.06 + pointer.y * 0.2, -2.25);
      robot.scale.setScalar(mobile ? 0.46 : 0.72);
      robot.rotation.x = pointer.y * 0.14;
      robot.rotation.y = pointer.x * 0.42 + Math.sin(t * 0.45) * 0.12;
      robot.getObjectByName("armLeft")!.rotation.z = Math.sin(t * 1.6) * 0.18 + pointer.x * 0.06;
      robot.getObjectByName("armRight")!.rotation.z = -Math.sin(t * 1.6) * 0.18 + pointer.x * 0.06;
      points.rotation.y = t * 0.03;
      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    animate();
    return () => {
      cancelAnimationFrame(raf);
      removeEventListener("resize", onResize); removeEventListener("pointermove", onPointer);
      scene.traverse((obj) => (obj as THREE.Mesh).geometry?.dispose());
      materials.forEach((material) => material.dispose());
      geo.dispose();
      mat.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);
  return <div ref={ref} aria-hidden="true" className="fixed inset-0 pointer-events-none" style={{ zIndex: 0, opacity: 0.78 }} />;
}
