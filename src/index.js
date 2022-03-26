// Asset Imports
import { Image } from './assets/image.js';
import { Audio } from './assets/audio.js';
import { Video } from './assets/video.js';
import { Model } from './assets/model.js';

// Scene Imports
import { createRenderer } from './systems/renderer.js';
import { Camera } from './components/camera.js';
import { World } from './components/scene.js';
import { Loop } from './systems/loop.js';
import { Resizer } from './systems/resizer.js';
import { createLights } from './components/light.js';

// XR Imports
import { VRButton } from 'three/examples/jsm/webxr/VRButton.js';

// Constrols
import { createControls } from './systems/controls.js';





let camera;
let controls;
let renderer;
let scene;
let loop;

let container;

class App {
    constructor() {
        camera = new Camera();
        renderer = createRenderer();
        scene = new World();
        loop = new Loop(camera, scene, renderer);

        container = document.querySelector('#xrscene');
        container.append(renderer.domElement);

        controls = createControls(camera, renderer.domElement);

        const { ambientLight, mainLight } = createLights();

        loop.updatables.push(controls);
        scene.add(ambientLight, mainLight);

        const resizer = new Resizer(container, camera, renderer);
    }

    async init() {
        this.setupXR();
    }

    renderer() {
        renderer.render(scene, camera);
    }

    start() {
        loop.start();
    }

    stop() {
        loop.stop();
    }

    setupXR(){
//        this.renderer.xr.enabled = true;
//        new VRButton( this.renderer );
//        this.renderer.setAnimationLoop( this.render.bind(this) );

        renderer.xr.enabled = true;
        new VRButton( this.renderer );
        loop.tick();

        document.body.appendChild( VRButton.createButton( renderer ) );
    }

//    toString() {
//        return `(${this.x}, ${this.y})`;
//    }
}

// OK, but can only have one export
//export default App;

// Broken using {}
export { App, camera, scene, Model };

