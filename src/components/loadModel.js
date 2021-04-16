import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { setupModel } from './setupModel';

const loadModel = async () => {
  const loader = new GLTFLoader();

  const modelData = await loader.loadAsync(
    'srcmodel\topAndSidePanels_NoAnim.glb'
  );

  console.log('The model: ', modelData);

  const modelMesh = setupModel(modelData);

  return modelMesh;
};

export default loadModel;
export { loadModel };
