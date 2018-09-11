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

    this.objectPositions = [
       new THREE.Vector3(1.5, 0, 0),
       new THREE.Vector3(1, 0, 0),
       new THREE.Vector3(-2, 0, 0),
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
        position={this.objectPositions[2]}
        rotation={this.state.objectRotation}
      >
        <sphereGeometry
          radius={75}
          widthSegments={20}
          heightSegments={10}
        />
        <meshBasicMaterial
          color={0xefdeef}
        />
      </mesh>
    )
  }

  render() {
    const width = window.innerWidth; // canvas width
    const height = window.innerHeight; // canvas height

    return (

      <React3
      mainCamera="camera"
      width={width}
      height={height}
      onAnimate={this._onAnimate}
      clearColor={0xffffff}
      >

      <scene>
        <perspectiveCamera
          name="camera"
          fov={75}
          aspect={width / height}
          near={0.1}
          far={1000}
          position={this.cameraPosition}
        />

        <mesh
          position={this.objectPositions[0]}
          rotation={this.state.objectRotation}
        >
          <boxGeometry
            width={.5}
            height={.5}
            depth={.5}
          />
          <meshBasicMaterial
            color={0x00ff00}
          />
        </mesh>




        <mesh
          position={this.objectPositions[1]}
          rotation={this.state.objectRotation}
        >
          <sphereGeometry
            radius={1}
            widthSegments={20}
            heightSegments={10}
          />
          <meshBasicMaterial
            color={0xefdeef}
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
