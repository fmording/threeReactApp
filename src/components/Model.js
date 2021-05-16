import { useFrame, useLoader } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import path1 from '../models/Steg1_smartSeng.glb';
import path2 from '../models/Steg2_smartSeng.glb';
import path3 from '../models/Steg3_smartSeng.glb';

const Model = (props) => {
  console.log(props);

  const ref = useRef();
  const gltf = useLoader(GLTFLoader, [path1, path2, path3]);

  let mixer;

  const i = props.step.slice(-1);
  let crntModel = gltf[i - 1];

  if (crntModel.animations.length) {
    mixer = new THREE.AnimationMixer(crntModel.scene);

    // Choose which animations to play
    let actualAnimations = crntModel.animations.filter((clip) => {
      return clip.name.indexOf(props.step) !== -1;
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

  /*model.scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
      child.material.side = THREE.FrontSide;
    }
  });*/

  // Below code is unnecessary, ignore and delete after report
  /*let meshes = [];
  model.scene.traverse((child) => {
    if (child.isMesh) {
      if (child.name.indexOf('Panel') !== -1) {
        meshes.push(child);
      }
    }
  });*/
  // report material END

  return gltf.map(({ scene }, index) => (
    <>
      <primitive
        key={index}
        ref={ref}
        object={scene}
        // visible={!!visible[index]}
        scale={props.scale}
      />
    </>
  ));
};

export default Model;
