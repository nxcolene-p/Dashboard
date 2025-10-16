import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const ThreeMap = () => {
  // Create a reference to the DOM element where we'll mount the 3D scene
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Create the 3D scene (like a container for all 3D objects)
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x87CEEB); // Sky blue background

    // Create camera to see model
    const camera = new THREE.PerspectiveCamera(
      75, // Field of view in degrees
      currentMount.clientWidth / currentMount.clientHeight, // Aspect ratio
      0.1, // Near clipping plane
      10000 // Far clipping plane
    );
    camera.position.set(0, 0, 0); // Position camera above and back from origin
    camera.lookAt(0, 0, 0); // Point camera at center

    // Create renderer (converts 3D scene to 2D image)
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    currentMount.appendChild(renderer.domElement);

    // Add lighting so we can see the 3D map
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4); // Soft overall light
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // Strong directional light
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Add mouse controls for rotating, panning, and zooming
    const controls = new OrbitControls(camera, renderer.domElement);

    // Load the 3D map using GLTFLoader
    const loader = new GLTFLoader();
    loader.load('/Model/Model2.gltf', // Path to your qgis2threejs exported file
      (gltf) => {
        // Successfully loaded the 3D map
        scene.add(gltf.scene);

        // Automatically position camera to show the entire map
        const box = new THREE.Box3().setFromObject(gltf.scene);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());

        // Calculate proper distance to fit the whole map in view
        const maxDim = Math.max(size.x, size.y, size.z);
        const fov = camera.fov * (Math.PI / 180);
        let distance = Math.abs(maxDim / Math.sin(fov / 2)) * 1.2;

        // Position camera at an angle for good 3D perspective
        camera.position.set(
          center.x + distance * 0.5,
          center.y + distance * 0.8,
          center.z + distance * 0.5
        );
        camera.lookAt(center);
        controls.target.copy(center);
        controls.update();
      },
      
    );

    // Animation loop (continuously renders the scene)
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update(); // Update mouse controls
      renderer.render(scene, camera); // Draw the scene
    };
    animate();

    // Handle window resize to keep the 3D view properly sized
    const handleResize = () => {
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
      currentMount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: '100%', // Full viewport width
        height: '100%', // Full viewport height
        // position: 'fixed',
        top: 0,
        left: 0,
        margin: 0,
        padding: 0
      }}
    />
  );
};

export default ThreeMap;