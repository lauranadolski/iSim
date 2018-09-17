import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import LoginAndAccountCreationButtonBox from '../components/LoginAndAccountCreationButtonBox';
import ThreeDModel from '../components/ThreeDModel';
import { toggleEditingModelBoolean, selectModelToEdit} from '../actions/index.js';
import EditModelSidebar from '../components/EditModelSidebar';



class LandingPageContainer extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <LoginAndAccountCreationButtonBox />
      </div>
    )
  }
}

const mapStateToProps = state => ({ models: state.models, user: state.user })

const mapDispatchToProps = dispatch => ({
  toggleEditingModelBoolean: thingie => dispatch(toggleEditingModelBoolean(thingie)),
  selectModelToEdit: thingie => dispatch(selectModelToEdit(thingie))
})

export default connect(mapStateToProps, mapDispatchToProps)(LandingPageContainer)
