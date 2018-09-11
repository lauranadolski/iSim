import React from 'react';
import React3 from 'react-three-renderer';
import * as THREE from 'three';
import ReactDOM from 'react-dom';

class ThreeDModel extends React.Component {


  constructor(props, context) {
    super(props, context);

    // construct the position vector here, because if we use 'new' within render,
    // React will think that things have changed when they have not.
    this.cameraPosition = new THREE.Vector3(0, 0, 5);
    this.directionalLightPosition = new THREE.Vector3(0, 1, 0);
    this.scenePosition = new THREE.Vector3(0, 0, 0);

    this.objectPositions = [
       new THREE.Vector3(0, 0, 0),
       new THREE.Vector3(1, 0, .5),
       new THREE.Vector3(0, 2, -.5),
       new THREE.Vector3(1, 1, 0),
       new THREE.Vector3(-1, 1, 0),
       new THREE.Vector3(-2, 0, 0),
       new THREE.Vector3(-1.25, -1, 0.25),
       new THREE.Vector3(.5, -1.5, 0)
    ]

    this.state = {
      objectRotation: new THREE.Euler(),
    };

    this._onAnimate = () => {
      // we will get this callback every frame

      // pretend cubeRotation is immutable.
      // this helps with updates and pure rendering.
      // React will be sure that the rotation has now updated.
      this.setState({
        objectRotation: new THREE.Euler(
          this.state.objectRotation.x + 0.01,
          this.state.objectRotation.y + 0.01,
          0
        ),
      });
    };
  }

  generateIndividualSphere = () => {
    return (
      <mesh
        position={this.objectPositions[1]}
        rotation={this.state.objectRotation}
      >
        <sphereGeometry
          radius={1}
          widthSegments={20}
          heightSegments={20}
        />
        <materialResource
          resourceId="material"
        />

      </mesh>
    )
  }

  generateAllSpheres = () => {

  }

  render() {
    const width = window.innerWidth; // canvas width
    const height = window.innerHeight; // canvas height

    return (

      <React3
        mainCamera="camera"
        width={width}
        height={height}
        antialias
        pixelRatio={window.devicePixelRatio}
        onAnimate={this._onAnimate}
        clearColor={0xffffff}
      >

      <resources>
        <texture
          resourceId="texture"
          url='/jpeg_sphere_texture.png'
          wrapS={THREE.RepeatWrapping}
          wrapT={THREE.RepeatWrapping}
          anisotropy={12}
        />
        <meshNormalMaterial
          resourceId="material"
          side={THREE.DoubleSide}
        >
          <textureResource
            resourceId="texture"
          />
        </meshNormalMaterial>
      </resources>

      <scene>
        <perspectiveCamera
          name="camera"
          fov={75}
          aspect={width / height}
          near={0.1}
          far={1000}
          position={this.cameraPosition}
        />
        <ambientLight
          color={0x404040}
        />
        <directionalLight
          color={0xffffff}
          position={this.directionalLightPosition}
          lookAt={this.scenePosition}
        />

        <mesh
          position={this.objectPositions[0]}
          rotation={this.state.objectRotation}
        >
          <sphereGeometry
            radius={1}
            widthSegments={10}
            heightSegments={10}
          />
          <materialResource
            resourceId="material"
          />

        </mesh>

        <mesh
          position={this.objectPositions[1]}
          rotation={this.state.objectRotation}
        >
          <sphereGeometry
            radius={1}
            widthSegments={20}
            heightSegments={20}
          />
          <materialResource
            resourceId="material"
          />

        </mesh>

        <mesh
          position={this.objectPositions[2]}
          rotation={this.state.objectRotation}
        >
          <sphereGeometry
            radius={1}
            widthSegments={20}
            heightSegments={20}
          />
          <materialResource
            resourceId="material"
          />

        </mesh>

        <mesh
          position={this.objectPositions[3]}
          rotation={this.state.objectRotation}
        >
          <sphereGeometry
            radius={1}
            widthSegments={10}
            heightSegments={10}
          />
          <materialResource
            resourceId="material"
          />

        </mesh>

        <mesh
          position={this.objectPositions[4]}
          rotation={this.state.objectRotation}
        >
          <sphereGeometry
            radius={1}
            widthSegments={10}
            heightSegments={10}
          />
          <materialResource
            resourceId="material"
          />

        </mesh>

        <mesh
          position={this.objectPositions[5]}
          rotation={this.state.objectRotation}
        >
          <sphereGeometry
            radius={1}
            widthSegments={20}
            heightSegments={20}
          />
          <materialResource
            resourceId="material"
          />

        </mesh>

        <mesh
          position={this.objectPositions[6]}
          rotation={this.state.objectRotation}
        >
          <sphereGeometry
            radius={1}
            widthSegments={20}
            heightSegments={20}
          />
          <materialResource
            resourceId="material"
          />

        </mesh>

        <mesh
          position={this.objectPositions[7]}
          rotation={this.state.objectRotation}
        >
          <sphereGeometry
            radius={1}
            widthSegments={20}
            heightSegments={20}
          />
          <materialResource
            resourceId="material"
          />

        </mesh>

      </scene>
    </React3>);
  }
}

export default ThreeDModel;



// <mesh
//   position={this.objectPositions[1]}
//   rotation={this.state.objectRotation}
// >
//   <boxGeometry
//     width={1}
//     height={1}
//     depth={1}
//   />
//   <meshBasicMaterial
//     color={0xff69b4}
//   />
// </mesh>

// <meshBasicMaterial
//   color={0xefdeef}
// />


// <mesh
//   position={this.objectPositions[0]}
//   rotation={this.state.objectRotation}
// >
//   <boxGeometry
//     width={.5}
//     height={.5}
//     depth={.5}
//   />
//   <meshBasicMaterial
//     color={0x00ff00}
//   />
// </mesh>

// <perspectiveCamera
//    fov={45}
//    aspect={width / height}
//    near={1}
//    far={2000}
//    lookAt={this.scenePosition}
//    name="mainCamera"
//    position={new THREE.Vector3(
//      Math.cos(timer) * 800,
//      400,
//      Math.sin(timer) * 800
//    )}
// />
