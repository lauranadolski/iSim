import React from 'react';
import Header from '../components/Header';
import CreateNewModelSidebar from '../components/CreateNewModelSidebar';
import ThreeDModel from '../components/ThreeDModel';
import { connect } from 'react-redux';
import { createNewModel } from '../actions/index.js';
import { bindActionCreators } from 'redux';

class CreateNewModelContainer extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <CreateNewModelSidebar createNewModel={this.props.createNewModel} user={this.props.user}/>
        <ThreeDModel />
      </div>
    )
  }
}

const mapStateToProps = state => ({ models: state.models, user: state.user })

const mapDispatchToProps = dispatch => ({
  createNewModel: thingie => dispatch(createNewModel(thingie))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateNewModelContainer)














//
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators( { createNewModel: createNewModel }, dispatch)
// }
//
// export default connect(null, mapDispatchToProps)(CreateNewModelContainer);





// export default CreateNewModelContainer;
