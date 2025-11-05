import * as THREE from 'three';

/*
    Crea un render WebGL con configuración base
*/

export const createRenderer = (
    width: number,
    height: number,
    alpha: boolean = true
): THREE.WebGLRenderer => {
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha})
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    return renderer
}

/**
 *  Crea una camara de perspectiva
 */

export const createCamera = (
    fov: number,
    aspect: number,
    near: number,
    far: number,
    z: number
): THREE.PerspectiveCamera => {
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = z;
    return camera;
}


/**
 *  Limpia los recursos de Three.js
 */


export const disposeScene = (scene: THREE.Scene): void =>{
    scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
            object.geometry?.dispose();
            if (object.material instanceof THREE.Material) {
                object.material.dispose();
            }
        }
    })
}