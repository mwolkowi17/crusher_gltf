import { GLTFLoader } from '../node_modules/three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';
import { scene } from './index.js';

export let mixer= new THREE.AnimationMixer();
export let action;
export let action2,action3,action4,action5,action6,action7;
export const gltfLoader2 = new GLTFLoader()

function Progress(){
  console.log('loading');
  const progressInfo=document.getElementsByClassName('progressInfo')[0];
  progressInfo.style.visibility = 'visible';
}
    //gltfLoader2.load('./zawor_kulowy_three_move3.glb', (gltf) => {
    gltfLoader2.load('./kruszarka_szczekowa1_wer15_scena3.gltf', (gltf) => {
      const root = gltf.scene;
      const anim = gltf.animations;
      root.position.y=-2;
      scene.add(root); //co zrobic z tym?
      mixer = new THREE.AnimationMixer(root);
      
      action = mixer.clipAction( anim[ 0 ]);
      action2 = mixer.clipAction(anim[2]);
      action3 = mixer.clipAction(anim[3]);
      action4 = mixer.clipAction(anim[4]);
      action5 = mixer.clipAction(anim[5]);
      action6 = mixer.clipAction(anim[6]);
      action7 = mixer.clipAction(anim[8]);
     
      //action.play();
      const progressInfo=document.getElementsByClassName('progressInfo')[0];
      progressInfo.style.visibility = 'hidden';
     
    },Progress());