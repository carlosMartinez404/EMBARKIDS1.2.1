import * as THREE from 'three';

export interface NodeParticle {
    mesh: THREE.Mesh;
    position: THREE.Vector3;
}

export interface NodeConnection{
    line: THREE.Line;
    p1: THREE.Mesh;
    p2: THREE.Mesh;
}

export interface NodesConfig {
    particleCount: number;
    radius: number; 
    particleSize: number;
    particleColor: number;
    lineColor: number;
    lineOpacity: number;
    maxConnectionDistance: number;
    rotationSpeed?: {
        x: number;
        y: number;
    }
}

export interface Scene3DConfig {
    width: number;
    height: number;
    cameraZ: number;
    backgroundColor?: number;
    backgroundAlpha?: number;
}