// // ✅ Use full CDN URLs to avoid "three" import error
// import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.155/build/three.module.js';
// import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.155/examples/jsm/controls/OrbitControls.js';
// import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.155/examples/jsm/loaders/GLTFLoader.js';

// // Scene, Camera, Renderer
// const scene = new THREE.Scene();
// scene.background = new THREE.Color(0x20232a);

// const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 2000);
// camera.position.set(0, 10, 20);

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

// // Load GLTF model
// const loader = new GLTFLoader();
// let model;
// loader.load('./Model/Model2.gltf', (gltf) => {
//   model = gltf.scene;
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


import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.155/build/three.module.js';
console.log(THREE);