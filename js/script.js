// Step 1: Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

// Append the renderer to the div
document.getElementById('globe-container').appendChild(renderer.domElement);

// Step 2: Create a sphere (representing the globe)
const geometry = new THREE.SphereGeometry(5, 32, 32);

// Load Earth texture
const textureLoader = new THREE.TextureLoader();
const earthTexture = textureLoader.load('https://threejsfundamentals.org/threejs/resources/images/earth.jpg');
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });


const globe = new THREE.Mesh(geometry, material);
scene.add(globe);

// Position the camera
camera.position.z = 15;

// Step 3: Create an animation loop to rotate the globe
function animate() {
  requestAnimationFrame(animate);

  // Rotate the globe
  globe.rotation.y += 0.01;

  // Render the scene
  renderer.render(scene, camera);
}

// Handle window resize
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

// Start the animation
animate();
