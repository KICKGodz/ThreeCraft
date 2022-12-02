const blocks = (blocks) => {
	return blocks * 16;
};

const checkerboard = (segments) => {
	var errorCorrection = blocks(segments) / 2 - 8;
	var geometry = new THREE.BoxGeometry(16, 16, 16);
	var light = new THREE.MeshBasicMaterial({ color: 0xf2f5ee });
	var dark = new THREE.MeshBasicMaterial({ color: 0xcbcec7 });

	var board = new THREE.Group();

	for (var i = 0; i < segments; i++) {
		for (var j = 0; j < segments; j++) {
			var cube = new THREE.Mesh(
				geometry,
				(i + j) % 2 == 0 ? dark : light
			);
			cube.position.x = i * 16 - errorCorrection;
			cube.position.y = 0;
			cube.position.z = j * 16 - errorCorrection;
			board.add(cube);
		}
	}

	return board;
};

const baseSize = [blocks(5), blocks(1), blocks(5)];

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x2e2e2e);
const camera = new THREE.PerspectiveCamera(
	50,
	window.innerWidth / window.innerHeight,
	0.1,
	1000
);
camera.position.set(75, 100, 115);
camera.lookAt(0, 0, 0);

var board = checkerboard(5);
board.position.set(0, -16, 0);
scene.add(board);

let scog = CreateBlock(small_cogwheel);
scog.position.set(16, 0, -16);
scene.add(scog);

let lcog = CreateBlock(large_cogwheel);
lcog.rotation.set(0, 1 - RotationFix, 0);
scene.add(lcog);

let crushomg = CreateBlock(crushing_wheel);
crushomg.position.set(-32, -5, 32);
scene.add(crushomg);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new THREE.OrbitControls(camera, renderer.domElement);

window.addEventListener('resize', () => {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
});

let clock = new THREE.Clock();
const tick = 1 / 20;

const RPMInterval = (RPM) => {
	return (clock.getDelta() * ((360 * RPM) / 60) * Math.PI) / 180;
};

function animate() {
	setTimeout(() => {
		requestAnimationFrame(animate);
	}, tick);
	controls.update();
	let rpm = RPMInterval(4);
	scog.rotation.y += rpm * 2;
	lcog.rotation.y -= rpm;
	renderer.render(scene, camera);
}

animate();
