import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.155/build/three.module.js';
import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.155/examples/jsm/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x20232a);

// Camera
const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 2, 5);

// Renderer
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('threeCanvas'), antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputEncoding = THREE.sRGBEncoding;

// Light
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(10, 10, 10);
scene.add(light);
scene.add(new THREE.AmbientLight(0xffffff, 0.3));

// ✅ Load GLTF model
const loader = new GLTFLoader();
loader.load(
  './models/yourModel.glb',
  (gltf) => {
    const model = gltf.scene;
    model.position.set(0, 0, 0);
    model.scale.set(1, 1, 1);
    scene.add(model);
    console.log('Model loaded:', model);
  },
  (xhr) => {
    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
  },
  (error) => {
    console.error('An error occurred while loading the model:', error);
  }
);

// Animate
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
