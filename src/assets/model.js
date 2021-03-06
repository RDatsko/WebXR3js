import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { AnimationMixer } from 'three';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';

//import { setupModel } from './setupModel.js';

//async function loadBirds() {
//    const loader = new GLTFLoader();

//    const [parrotData, flamingoData, storkData] = await Promise.all([
//        loader.loadAsync('./assets/models/Parrot.glb'),
//        loader.loadAsync('./assets/models/Flamingo.glb'),
//        loader.loadAsync('./assets/models/Stork.glb'),
//    ]);

//    console.log('Squaaawk!', parrotData);

//    const parrot = setupModel(parrotData);
//    parrot.position.set(0, 0, 2.5);

//    const flamingo = setupModel(flamingoData);
//    flamingo.position.set(7.5, 0, -10);

//    const stork = setupModel(storkData);
//    stork.position.set(0, -2.5, -10);

//    return {
//        parrot,
//        flamingo,
//        stork,
//    };
//}


//function setupModel(data) {
//    const model = data.scene.children[0];
//    const clip = data.animations[0];

//    const mixer = new AnimationMixer(model);
//    const action = mixer.clipAction(clip);
//    action.play();

//    model.tick = (delta) => mixer.update(delta);

//    return model;
//}


//export { loadBirds };
//export { setupModel };













/*
function getFullName(name) {
	let assetName = eval("assets." + name);
	let rtnName = assetName.firstName + " " + assetName.lastName;
	return rtnName;
}

const assets = {
	person1: { firstName: "John", lastName: "Doe", age: 46 },
	person2: { firstName: "Jane", lastName: "Smith", age: 42 }
};

let testName = getFullName("person1");

document.getElementById("demo").innerHTML += testName + "<br>";
*/










class Model extends THREE.Group {
    constructor(data) {
        super();

        let assetName = eval("asset." + data);
//        let rtnName = assetName.src;
//        alert(assetName);
        this.modelUrl = assetName.src

//        this.modelUrl = data.src;

        this.onCreate();

        //        const loader = new GLTFLoader();

//        loader.loadAsync(data);
    }

    onCreate() {
        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath( 'vendor/three/examples/js/libs/draco/' );
        dracoLoader.setDecoderConfig({ type: 'js' });

/*
        var abc = new GLTFLoader().load(
            this.modelUrl,
            gltf => {
                this.updateTransform();
                this.add(gltf.scene);

                console.log(this);

//                setDRACOLoader(dracoLoader);
            }
        );
*/
        new GLTFLoader().
            setDRACOLoader( dracoLoader ).
            load(this.modelUrl,
                gltf => {
                    this.updateTransform();
                    this.add(gltf.scene);
                    console.log(this);
          });
    }

    updateMaterials(model) {
        model.traverse(child => {
            child.material = new THREE.MeshNormalMaterial();
        });
    }

    updateTransform() {
//        this.rotation.z += Math.PI / 2;
//        this.scale.set(2.0, 2.0, 2.0);
    }

    dispose() {

    }

    rotate(x, y, z) {
        this.rotation.x = THREE.MathUtils.degToRad(x);
        this.rotation.y = THREE.MathUtils.degToRad(y);
        this.rotation.z = THREE.MathUtils.degToRad(z);
    }

    scale(x, y, z) {
        this.scale.set(x, y, z);
    }
}

export { Model };
