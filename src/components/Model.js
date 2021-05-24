import { useFrame, useLoader } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Model = (props) => {
  const ref = useRef();
  const gltf = useLoader(GLTFLoader, props.path);
  let mixer;

  // Get correct index and set visibility
  const i = props.step.slice(-1) - 1;
  const visibility = props.visible[i];

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
      props.play ? action.stop() : action.play();
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

export default Model;
