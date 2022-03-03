import { GLTFLoader } from '../node_modules/three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';
import * as OrbitControls from 'three-orbitcontrols';
import { light2, light3, light4 } from './direct_light.js';
import { mixer, action, action2, action3,action4,action5,action6,action7,action8,action9,action10,action11,action12,action13,action14,action15,action16,action17, gltfLoader2 } from './loader';

export const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

scene.background = new THREE.Color( 0xFFFFFF );

scene.add(light2);
scene.add(light2.target);
scene.add(light3);
scene.add(light3.target);
scene.add(light4);
scene.add(light4.target);

let ifPlayed=false;
let closed = false;
let actionbutton = document.getElementById("start_button")

actionbutton.addEventListener("click",function(){
  if(ifPlayed===false){
    mixer.setTime(0);
  }
  

  mixer.timeScale=1
  closed=true;
 action.play();
 action2.play();
 action3.play();
 action4.play();
 action5.play();
 action6.play();
 action7.play();
 action8.play();
 action9.play();
 action10.play();
 action11.play();
 action12.play();
 action13.play();
 action14.play();
 action15.play();
 action16.play();
 action17.play();
 
},false)


let stopbutton = document.getElementById("stop_button");
stopbutton.addEventListener("click", function(){
  mixer.timeScale=0
 
  ifPlayed=true;
 
}, false)

let resetbutton = document.getElementById("reset_button");
resetbutton.addEventListener("click", function(){
  ifPlayed=false;
  if(ifPlayed===false){
    mixer.setTime(0);
  };
  mixer.timeScale=1;
  mixer.timeScale=0;
}, false)

let closebutton = document.getElementById("close_button");
closebutton.addEventListener("click", function(){
  closed=false;
  mixer.timeScale=1;
}, false)
closebutton.style.visibility='hidden';

    
camera.position.z = 6;
camera.position.y = 2;

const controls = new OrbitControls( camera, renderer.domElement );

//controls.update() must be called after any manual changes to the camera's transform
//camera.position.set( 0, 20, 100 );
controls.update();
controls.autoRotate=false;
const clock= new THREE.Clock();

const animate = function () {
    requestAnimationFrame(animate);

    //cube.rotation.x += 0.02;
    //cube.rotation.y += 0.01;
   
    var delta = clock.getDelta(); // clock is an instance of THREE.Clock

    renderer.render(scene, camera);
    
  
    controls.update()
    if (mixer ) mixer.update( delta );
    if (mixer.time>30 && closed===true){ 
      mixer.timeScale=0;
     }

    if (mixer.time>10 && closed===false){
      mixer.timeScale=0;
    }

};

animate();