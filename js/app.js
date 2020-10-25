const randomMin = 0.01;
const randomMax = 0.05;
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, 0.1, 1000);
let renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Creating basic cube
let geometry = new THREE.BoxGeometry();
let material = new THREE.MeshBasicMaterial({color: 0x0000ff});
let cube = new THREE.Mesh(geometry, material);

scene.add(cube);
camera.position.z = 5;

// Animation loop rendering the scene with camera
let animate = () => {
    requestAnimationFrame(animate);

    // Rotating the cube
    cube.rotation.x += getRandomArbitrary(randomMin, randomMax);
    cube.rotation.y += getRandomArbitrary(randomMin, randomMax);
    cube.rotation.z += getRandomArbitrary(randomMin, randomMax);

    renderer.render(scene, camera);
}

let getRandomArbitrary = (min, max) => {
    return Math.random() * (max - min) + min;
}

animate();