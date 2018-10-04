import React from 'react';
import ReactDOM from 'react-dom';
import OneSphere from './3DModels/OneSphere';
import TwoSpheres from './3DModels/TwoSpheres';
import ThreeSpheres from './3DModels/ThreeSpheres';
import FourSpheres from './3DModels/FourSpheres';
import FiveSpheres from './3DModels/FiveSpheres';
import SixSpheres from './3DModels/SixSpheres';
import SevenSpheres from './3DModels/SevenSpheres';
import EightSpheres from './3DModels/EightSpheres';

class ThreeDModel extends React.Component {

  selectSphereComponent = () => {
    let numberOfCategories = this.props.selectedModel.categories.length

    if (numberOfCategories === 1) {
      return (<OneSphere />)
    } else if (numberOfCategories === 2) {
      return (<TwoSpheres />)
    } else if (numberOfCategories === 3) {
      return (<ThreeSpheres />)
    } else if (numberOfCategories === 4) {
      return (<FourSpheres />)
    } else if (numberOfCategories === 5) {
      return (<FiveSpheres />)
    } else if (numberOfCategories === 6) {
      return (<SixSpheres />)
    } else if (numberOfCategories === 7) {
      return (<SevenSpheres />)
    } else if (numberOfCategories === 8) {
      return (<EightSpheres />)
    }
    return(
      <div></div>
    )
  }

  generateCategoryList = () => {
    return this.props.selectedModel.categories.map ((category) => {
      return (
        <div className="Category-list-on-side">
        {category.name}
        </div>
      )
    })
  }

  render() {
    return(
      <div>
      {this.selectSphereComponent()}
      <div id="Category-list-container">
      {this.generateCategoryList()}
      </div>
      </div>
    )
  }
}

export default ThreeDModel;
