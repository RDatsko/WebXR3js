import { Color, Scene } from 'three';
/*
function createScene() {
    const scene = new Scene();

    scene.background = new Color('skyblue');

    return scene;
}

export { createScene };
*/

class World extends Scene {
    constructor() {
        super();

        this.onCreate();
    }

    onCreate() {
        new Scene();
        this.background = new Color('skyblue');
    }
}

export { World };
