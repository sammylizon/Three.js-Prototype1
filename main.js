import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// Initialize the scene, camera, and renderer first
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create controls after the camera and renderer are initialized
const controls = new OrbitControls(camera, renderer.domElement);
const loader = new GLTFLoader();

// Create a cube and add it to the scene
const boxMesh = new THREE.Mesh(
        new THREE.BoxGeometry(1, 2, 1), 
        new THREE.MeshBasicMaterial({ color: 0x808080 })
    );

//Creating a sphere and adding to the scene
const sphereMesh = new THREE.Mesh(
        new THREE.SphereGeometry(1, 22, 16, 0, 6.28318, 0, 3.14159), 
        new THREE.MeshBasicMaterial({ color: 0x808080 })
    );

const planeMesh = new THREE.Mesh(
        new THREE.BoxGeometry(1, 2, 1), 
        new THREE.MeshBasicMaterial({ color: 0x808080 })
    );

function RotateObject(obj){
    obj.rotation.x += 0.01;
    obj.rotation.y += 0.01;
};

//Adding to scene
scene.add(boxMesh, sphereMesh);



// Set the camera position
camera.position.z = 5;

//positions
boxMesh.position.x = 2;

// Animation loop
function animate() {
    RotateObject(boxMesh);
    RotateObject(sphereMesh);
    controls.update(); // Update controls if needed
    renderer.render(scene, camera);
}

// Set the animation loop
renderer.setAnimationLoop(animate);
