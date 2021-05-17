import { useFrame, useLoader } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import path1 from '../models/Steg1_smartSeng.glb';
import path2 from '../models/Steg2_smartSeng.glb';
import path3 from '../models/Steg3_smartSeng.glb';

const Model = (props) => {
  const ref = useRef();
  const gltf = useLoader(GLTFLoader, props.path);

  // useEffect(
  //   () =>
  //     gltf.forEach((model) =>
  //       model.scene.traverse(
  //         (obj) => obj.isMesh && (obj.castShadow = obj.receiveShadow = true)
  //       )
  //     )[gltf]
  // );

  // let i = 0;
  // useEffect(() => {
  //   gltf.forEach((scene) => {
  //     let model = scene.scene;
  //     model.name = props.step; // aka. 'Steg{X}'
  //     model.visible = props.visible[i];
  //     i++;
  //   });
  // });

  console.log(gltf);

  let mixer;

  const i = props.step.slice(-1) - 1;
  const visibility = props.visible[i];
  console.log(visibility);

  const name = visibility ? 'vis' : 'invis';

  console.log(name);

  if (gltf.animations.length) {
    mixer = new THREE.AnimationMixer(gltf.scene);

    // Choose which animations to play
    let actualAnimations = gltf.animations.filter((clip) => {
      return clip.name.indexOf(props.step) !== -1;
    });

    // Play the above chosen animations
    actualAnimations.forEach((clip) => {
      const action = mixer.clipAction(clip);
      action.setLoop(THREE.LoopPingPong);
      action.play();
      // props.play ? action.stop() : action.play();
    });
  }

  useFrame((state, delta) => {
    mixer?.update(delta);
  });

  return (
    <>
      <primitive
        object={gltf.scene}
        ref={ref}
        key={props.step}
        scale={props.scale}
        visible={visibility}
      />
    </>
  );
};

//   return gltf.map(({ scene }, index) => (
//     <>
//       <primitive
//         key={index}
//         ref={ref}
//         object={scene}
//         visible={!props.visible[index]}
//         scale={props.scale}
//       />
//     </>
//   ));
// };

export default Model;
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
