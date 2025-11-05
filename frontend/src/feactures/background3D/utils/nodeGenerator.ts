import * as THREE from 'three';
import type { NodesConfig } from '../types/nodes.types';

/**
 * Genera posiciones aleatorias en forma de esfera
 */
export const generateSpherePoints = (
  count: number,
  radius: number
): THREE.Vector3[] => {
  const points: THREE.Vector3[] = [];

  for (let i = 0; i < count; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);

    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);

    points.push(new THREE.Vector3(x, y, z));
  }

  return points;
};

/**
 * Crea partículas (nodos) en las posiciones dadas
 */
export const createParticles = (
  positions: THREE.Vector3[],
  size: number,
  color: number
): THREE.Mesh[] => {
  const particles: THREE.Mesh[] = [];
  const geometry = new THREE.SphereGeometry(size, 8, 8);
  const material = new THREE.MeshBasicMaterial({ color });

  positions.forEach((position) => {
    const particle = new THREE.Mesh(geometry, material);
    particle.position.copy(position);
    particles.push(particle);
  });

  return particles;
};

/**
 * Crea conexiones (líneas) entre partículas cercanas
 */
export const createConnections = (
  particles: THREE.Mesh[],
  maxDistance: number,
  color: number,
  opacity: number
): Array<{ line: THREE.Line; p1: THREE.Mesh; p2: THREE.Mesh }> => {
  const connections: Array<{ line: THREE.Line; p1: THREE.Mesh; p2: THREE.Mesh }> = [];
  const lineMaterial = new THREE.LineBasicMaterial({
    color,
    transparent: true,
    opacity,
  });

  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const distance = particles[i].position.distanceTo(particles[j].position);

      if (distance < maxDistance) {
        const lineGeometry = new THREE.BufferGeometry().setFromPoints([
          particles[i].position,
          particles[j].position,
        ]);
        const line = new THREE.Line(lineGeometry, lineMaterial);
        connections.push({ line, p1: particles[i], p2: particles[j] });
      }
    }
  }

  return connections;
};

/**
 * Actualiza las posiciones de las líneas (necesario después de rotar)
 */
export const updateConnections = (
  connections: Array<{ line: THREE.Line; p1: THREE.Mesh; p2: THREE.Mesh }>
): void => {
  connections.forEach(({ line, p1, p2 }) => {
    const positions = line.geometry.attributes.position.array as Float32Array;
    positions[0] = p1.position.x;
    positions[1] = p1.position.y;
    positions[2] = p1.position.z;
    positions[3] = p2.position.x;
    positions[4] = p2.position.y;
    positions[5] = p2.position.z;
    line.geometry.attributes.position.needsUpdate = true;
  });
};