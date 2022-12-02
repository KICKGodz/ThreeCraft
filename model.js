const RotationFix = 0.01;
const metal =
	'data:image/webp;base64,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';

const CreateBlock = (json) => {
	let model = json;
	const obj = new THREE.Object3D();
	const group = new THREE.Group();
	const texture = LoadTexture(metal);
	const materials = new THREE.MeshBasicMaterial({
		map: texture,
		wireframe: false,
	});
	model.elements.forEach((element) => {
		// get dimensions and origin
		const width = element.to[0] - element.from[0];
		const height = element.to[1] - element.from[1];
		const length = element.to[2] - element.from[2];

		const origin = {
			x: (element.to[0] + element.from[0]) / 2 - 8,
			y: (element.to[1] + element.from[1]) / 2 - 8,
			z: (element.to[2] + element.from[2]) / 2 - 8,
		};

		const blockGeometry = new THREE.BoxGeometry(width, height, length);
		const blockMesh = new THREE.Mesh(blockGeometry, materials);

		blockMesh.position.x = origin.x;
		blockMesh.position.y = origin.y;
		blockMesh.position.z = origin.z;

		/**
		 * bake rotation start
		 */
		if (element.rotation) {
			// get origin, axis and angle
			const rotationOrigin = {
				x: element.rotation.origin[0] - 8,
				y: element.rotation.origin[1] - 8,
				z: element.rotation.origin[2] - 8,
			};

			const axis = element.rotation.axis;
			const angle = element.rotation.angle;

			// create pivot
			const pivot = new THREE.Group();
			pivot.position.x = rotationOrigin.x;
			pivot.position.y = rotationOrigin.y;
			pivot.position.z = rotationOrigin.z;

			pivot.add(blockMesh);

			// adjust mesh coordinates
			blockMesh.position.x -= rotationOrigin.x;
			blockMesh.position.y -= rotationOrigin.y;
			blockMesh.position.z -= rotationOrigin.z;

			// rotate pivot
			if (axis === 'x') {
				pivot.rotateX((angle * Math.PI) / 180);
			} else if (axis === 'y') {
				pivot.rotateY((angle * Math.PI) / 180);
			} else if (axis === 'z') {
				pivot.rotateZ((angle * Math.PI) / 180);
			}

			group.add(pivot);
		} else {
			const pivot = new THREE.Group();
			pivot.add(blockMesh);
			group.add(pivot);
		}
	});
	obj.add(group);

	return obj;
};

const LoadTexture = (data) => {
	const texture = new THREE.TextureLoader().load(data);
	texture.wrapS = THREE.RepeatWrapping;
	texture.wrapT = THREE.RepeatWrapping;
	return texture;
};
