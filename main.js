// // ✅ Use full CDN URLs to avoid "three" import error
// import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.155/build/three.module.js';
// import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.155/examples/jsm/controls/OrbitControls.js';
// import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.155/examples/jsm/loaders/GLTFLoader.js';

// // Scene, Camera, Renderer
// const scene = new THREE.Scene();
// scene.background = new THREE.Color(0x20232a);

// const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 2000);
// camera.position.set(0, 50, 100);
// controls.update();

// const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('threeCanvas'), antialias: true });
// renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.outputEncoding = THREE.sRGBEncoding;

// // Lighting
// const ambient = new THREE.AmbientLight(0xffffff, 0.6);
// const sun = new THREE.DirectionalLight(0xffffff, 1);
// sun.position.set(10, 15, 10);
// scene.add(ambient, sun);

// // Controls
// const controls = new OrbitControls(camera, renderer.domElement);
// controls.update();

// // Load GLTF model
// const loader = new GLTFLoader();
// let model;
// loader.load('./Model/Model2.gltf', (gltf) => {
//   model = gltf.scene;
//   model.scale.set(0.1, 0.1, 0.1);  
//   scene.add(model);
// }, undefined, (error) => console.error(error));

// // Responsive
// window.addEventListener('resize', () => {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// });

// // Animate
// function animate() {
//   requestAnimationFrame(animate);
//   controls.update();
//   renderer.render(scene, camera);
// }
// animate();

// // Toggle button example
// document.getElementById('btnBuildings').addEventListener('click', () => {
//   if (model) model.visible = !model.visible;
// });
// const geometry = new THREE.BoxGeometry(10,10,10);
// const material = new THREE.MeshStandardMaterial({ color: 0xff0000 });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.155/build/three.module.js';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x20232a);

// Camera
const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 0, 10);

// Renderer
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('threeCanvas') });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputEncoding = THREE.sRGBEncoding;

// Cube
const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshStandardMaterial({ color: 0xff0000 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Light
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(10, 10, 10);
scene.add(light);

// Animate
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();
