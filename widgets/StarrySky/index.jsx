import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const StarrySky = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let width = window.innerWidth;
    let height = window.innerHeight;
    let mouseX = 0;
    let mouseY = 0;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 1, 1000);
    camera.position.z = 400;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
    });
    renderer.setSize(width, height);

    const starsGeometry = new THREE.BufferGeometry();
    const starCount = 10000;
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      positions[i * 3] = (Math.random() * 2 - 1) * 1000;
      positions[i * 3 + 1] = (Math.random() * 2 - 1) * 1000;
      positions[i * 3 + 2] = (Math.random() * 2 - 1) * 1000;

      const color = new THREE.Color(
        Math.random(),
        Math.random(),
        Math.random()
      );
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    starsGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    starsGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const starsMaterial = new THREE.PointsMaterial({
      size: 1.5,
      vertexColors: true,
    });

    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    function animate() {
      requestAnimationFrame(animate);

      const rotationSpeed = 0.001;
      const mouseInfluenceX = (mouseX - window.innerWidth / 2) * 0.00001;
      const mouseInfluenceY = (mouseY - window.innerHeight / 2) * 0.00001;

      stars.rotation.x += rotationSpeed + mouseInfluenceY;
      stars.rotation.y += rotationSpeed + mouseInfluenceX;

      renderer.render(scene, camera);
    }

    function onWindowResize() {
      width = window.innerWidth;
      height = window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
    }

    function onDocumentMouseMove(event) {
      mouseX = event.clientX;
      mouseY = event.clientY;
    }

    animate();

    window.addEventListener("resize", onWindowResize, false);
    document.addEventListener("mousemove", onDocumentMouseMove, false);

    return () => {
      window.removeEventListener("resize", onWindowResize, false);
      document.removeEventListener("mousemove", onDocumentMouseMove, false);
    };
  }, []);

  return (
    <canvas style={{ position: "fixed", left: 0, top: 0 }} ref={canvasRef} />
  );
};

export default StarrySky;
