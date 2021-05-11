import { useFrame, useLoader } from '@react-three/fiber';
import { useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Model = (props) => {
  const model = useLoader(GLTFLoader, props.path);
  let mixer;

  let stepIndex = parseFloat(props.step.slice(-1));
  /*if (stepIndex === 1) {
    const meshes = model.scene.traverse((child) => {
      console.log(child);
    });
     meshes.filter((child) => {
      setCrntMesh(child.name.indexOf('Steg1') !== -1 ? child.name : '');
      return crntMesh;
    });
    console.log(crntMesh);
  }*/

  if (model.animations.length) {
    mixer = new THREE.AnimationMixer(model.scene);

    // Choose which animations to play
    let actualAnimations = model.animations.filter((clip) => {
      return (
        clip.name.indexOf(props.step) !== -1 // || clip.name.indexOf('Steg1') !== -1
      );
    });

    // Play the above chosen animations
    actualAnimations.forEach((clip) => {
      const action = mixer.clipAction(clip);
      action.setLoop(THREE.LoopPingPong);
      props.play ? action.stop() : action.play();
    });
  }

  useFrame((state, delta) => {
    mixer?.update(delta);
  });

  model.scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
      child.material.side = THREE.FrontSide;
    }
  });
  const [crntMesh, setCrntMesh] = useState([]);

  let meshes = [];
  model.scene.traverse((child) => {
    if (child.isMesh) {
      if (child.name.indexOf('Panel') !== -1) {
        meshes.push(child);
      }
    }
  });

  console.log(meshes);
  return (
    <>
      <primitive object={model.scene} scale={props.scale} />
    </>
  );
};

export default Model;
