import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import type { NodesConfig } from '../types/nodes.types';
import {
  createRenderer,
  createCamera,
  disposeScene,
} from '../utils/threeHelpers';
import {
  generateSpherePoints,
  createParticles,
  createConnections,
  updateConnections,
} from '../utils/nodeGenerator';

export const useNodesSphere = (
  containerRef: React.RefObject<HTMLDivElement | null>,
  config: NodesConfig
) => {
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Crear escena
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Crear cámara
    const camera = createCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000,
      5
    );

    // Crear renderer
    const renderer = createRenderer(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    );
    rendererRef.current = renderer;
    containerRef.current.appendChild(renderer.domElement);

    // Generar nodos
    const positions = generateSpherePoints(config.particleCount, config.radius);
    const particles = createParticles(
      positions,
      config.particleSize,
      config.particleColor
    );

    // Agregar partículas a la escena
    particles.forEach((particle) => scene.add(particle));

    // Crear conexiones
    const connections = createConnections(
      particles,
      config.maxConnectionDistance,
      config.lineColor,
      config.lineOpacity
    );

    // Agregar líneas a la escena
    connections.forEach(({ line }) => scene.add(line));

    // Animación
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      // Rotación
      if (config.rotationSpeed) {
        scene.rotation.x += config.rotationSpeed.x;
        scene.rotation.y += config.rotationSpeed.y;
      }

      // Actualizar conexiones
      updateConnections(connections);

      renderer.render(scene, camera);
    };

    animate();

    // Responsive
    const handleResize = () => {
      if (!containerRef.current) return;
      camera.aspect =
        containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(
        containerRef.current.clientWidth,
        containerRef.current.clientHeight
      );
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      disposeScene(scene);
      renderer.dispose();
    };
  }, [containerRef, config]);

  return { sceneRef, rendererRef };
};