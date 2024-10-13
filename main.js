import * as three from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const w = window.innerWidth;
const h = window.innerHeight;
const scene = new three.Scene();
const camera = new three.PerspectiveCamera(75, w / h, 0.1, 1000);
camera.position.z = 5;
const renderer = new three.WebGLRenderer({ antialias: true });
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);

new OrbitControls(camera, renderer.domElement);

const geometry = new three.IcosahedronGeometry(1, 8); // Changed to BoxGeometry
const material = new three.MeshStandardMaterial({ color: 0xffff00, flatshading : true}); // Changed to MeshStandardMaterial
const cube = new three.Mesh(geometry, material);
scene.add(cube);

const hemiLight = new three.HemisphereLight(0xffffbb, 0x080820, 1);
scene.add(hemiLight);

const pointLight = new three.PointLight(0xffffff, 1);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate();

// Resize listener
window.addEventListener('resize', () => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
});
