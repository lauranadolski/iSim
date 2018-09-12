import React from 'react';
import React3 from 'react-three-renderer';
import * as THREE from 'three';
import ReactDOM from 'react-dom';


class EightSpheres extends React.Component {


  constructor(props, context) {
    super(props, context);

    // construct the position vector here, because if we use 'new' within render,
    // React will think that things have changed when they have not.
    this.cameraPosition = new THREE.Vector3(0, 0, 5);
    this.directionalLightPosition = new THREE.Vector3(0, 1, 0);
    this.scenePosition = new THREE.Vector3(0, 0, 0);


    this.allObjectPositions = [
      new THREE.Vector3(0, 0, 0),
     new THREE.Vector3(1.25, 0, .35),
     new THREE.Vector3(0, 2, -.5),
     new THREE.Vector3(1, 1, 0),
     new THREE.Vector3(-1, 1, -.15),
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

  generateSpheres = () => {
    let numberOfCategories = this.props.selectedModel.categories.length
    let targetArrayIndex = numberOfCategories - 1
    debugger;

    if ((numberOfCategories > 0) && (numberOfCategories < 9)) {
      return (
        this.allSphereConfigurations[targetArrayIndex]
      )
    }
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

        <mesh position={this.allObjectPositions[0]} rotation={this.state.objectRotation}>
          <sphereGeometry radius={1} widthSegments={20} heightSegments={20}/>
          <materialResource resourceId="material"/>
        </mesh>

        <mesh position={this.allObjectPositions[1]} rotation={this.state.objectRotation}>
          <sphereGeometry radius={1} widthSegments={20} heightSegments={20}/>
          <materialResource resourceId="material"/>
        </mesh>

        <mesh position={this.allObjectPositions[2]} rotation={this.state.objectRotation}>
          <sphereGeometry radius={1} widthSegments={20} heightSegments={20}/>
          <materialResource resourceId="material"/>
        </mesh>

        <mesh position={this.allObjectPositions[3]} rotation={this.state.objectRotation}>
          <sphereGeometry radius={1} widthSegments={20} heightSegments={20}/>
          <materialResource resourceId="material"/>
        </mesh>

        <mesh position={this.allObjectPositions[4]} rotation={this.state.objectRotation}>
          <sphereGeometry radius={1} widthSegments={20} heightSegments={20}/>
          <materialResource resourceId="material"/>
        </mesh>

        <mesh position={this.allObjectPositions[5]} rotation={this.state.objectRotation}>
          <sphereGeometry radius={1} widthSegments={20} heightSegments={20}/>
          <materialResource resourceId="material"/>
        </mesh>

        <mesh position={this.allObjectPositions[6]} rotation={this.state.objectRotation}>
          <sphereGeometry radius={1} widthSegments={20} heightSegments={20}/>
          <materialResource resourceId="material"/>
        </mesh>

        <mesh position={this.allObjectPositions[7]} rotation={this.state.objectRotation}>
          <sphereGeometry radius={1} widthSegments={20} heightSegments={20}/>
          <materialResource resourceId="material"/>
        </mesh>


      </scene>
    </React3>);
  }
}

export default EightSpheres;
