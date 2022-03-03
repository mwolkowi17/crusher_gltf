import { GLTFLoader } from '../node_modules/three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';
import { scene } from './index.js';

export let mixer= new THREE.AnimationMixer();
export let action;
export let action2,action3,action4,action5,action6,action7,action8,action9,action10,action11,action12,action13,action14,action15,action16,action17;
export const gltfLoader2 = new GLTFLoader()

function Progress(){
  console.log('loading');
  const progressInfo=document.getElementsByClassName('progressInfo')[0];
  progressInfo.style.visibility = 'visible';
}
    
    gltfLoader2.load('./kruszarka_szczekowa1_wer15_scena3.gltf', (gltf) => {
      const root = gltf.scene;
      const anim = gltf.animations;
      root.position.y=-1;
      scene.add(root); 
      mixer = new THREE.AnimationMixer(root);
      
      action = mixer.clipAction( anim[ 0 ]);
      action2 = mixer.clipAction(anim[2]);
      action3 = mixer.clipAction(anim[3]);
      action4 = mixer.clipAction(anim[4]);
      action5 = mixer.clipAction(anim[5]);
      action6 = mixer.clipAction(anim[6]);
      action7 = mixer.clipAction(anim[7]);
      action8 = mixer.clipAction(anim[8]);
      action9 = mixer.clipAction(anim[9]);
      action10 = mixer.clipAction(anim[10]);
      action11 = mixer.clipAction(anim[11]);
      action12 = mixer.clipAction(anim[12]);
      action13 = mixer.clipAction(anim[13]);
      action14 = mixer.clipAction(anim[14]);
      action15 = mixer.clipAction(anim[15]);
      action16 = mixer.clipAction(anim[16]);
      action17 = mixer.clipAction(anim[17]);
     
      console.log(anim);
      //action.play();
      const progressInfo=document.getElementsByClassName('progressInfo')[0];
      progressInfo.style.visibility = 'hidden';
     
    },Progress());