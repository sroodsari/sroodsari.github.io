import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const TulipsField = () => {
	const mountRef = useRef(null);

	useEffect(() => {
		const currentMount = mountRef.current;
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
		const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(window.innerWidth, window.innerHeight);

		currentMount.appendChild(renderer.domElement);

		// Stem
		const stemGeometry = new THREE.CylinderGeometry(0.05, 0.05, 2, 12);
		const stemMaterial = new THREE.MeshBasicMaterial({ color: 0x228B22 });
		const stem = new THREE.Mesh(stemGeometry, stemMaterial);
		stem.position.y = 1; // Adjust position to ground
		scene.add(stem);

		// Tulip head - a simplified approximation using modified geometries
		const petalMaterial = new THREE.MeshBasicMaterial({ color: 0xFF6347 }); // Example petal color
		const petals = [];
		for (let i = 0; i < 6; i++) {
			const petalGeometry = new THREE.ConeGeometry(0.4, 1, 3);
			const petal = new THREE.Mesh(petalGeometry, petalMaterial);
			petal.position.y = 2;
			petal.rotation.z = Math.PI / 3;
			petal.rotation.y = (Math.PI / 3) * i * 2;
			petals.push(petal);
			scene.add(petal);
		}

		camera.position.z = 5;

		// Animation loop for swaying
		const animate = function () {
			requestAnimationFrame(animate);
			const time = Date.now() * 0.001;
			stem.rotation.z = 0.05 * Math.sin(time * 2); // Swaying effect
			petals.forEach(petal => {
				petal.rotation.z = 0.05 * Math.sin(time * 2); // Sway petals with stem
			});
			renderer.render(scene, camera);
		};

		animate();

		// Cleanup on unmount
		return () => {
			currentMount.removeChild(renderer.domElement);
		};
	}, []);

	return <div ref={mountRef} />;
};

export default TulipsField;
