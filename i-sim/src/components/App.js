import React, { Component } from 'react';
import Header from './Header';
import LoginAndAccountCreationButtonBox from './LoginAndAccountCreationButtonBox';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AccountCreationContainer from '../containers/AccountCreationContainer';
import LandingPageContainer from '../containers/LandingPageContainer';
import AboutPageContainer from '../containers/AboutPageContainer';
import CreateNewModelContainer from '../containers/CreateNewModelContainer';
import ModelViewContainer from '../containers/ModelViewContainer';
import ModelEditContainer from '../containers/ModelEditContainer';
import LoggedInHomepageContainer from '../containers/LoggedInHomepageContainer';
import withAuth from '../hocs/withAuth';
import '../App.css';

// import { connect } from 'react-redux'
// import { changeExampleMessage } from './actions'

const AuthedLoggedInHomepageContainer = withAuth(LoggedInHomepageContainer, "/")
const AuthedCreateNewModelContainer = withAuth(CreateNewModelContainer, "/")
const AuthedModelViewContainer = withAuth(ModelViewContainer, "/")
const AuthedModelEditContainer = withAuth(ModelEditContainer, "/")

class App extends Component {

  // handleClick = () => {
  //   console.log('hello')
  //   this.props.changeExampleMessage()
  // }

  render() {
    return (
        <Switch>
          <Route exact path="/" component={LandingPageContainer}/>
          <Route path="/create-account" component={AccountCreationContainer}/>
          <Route path="/home" component={AuthedLoggedInHomepageContainer}/>
          <Route path="/about" component={AboutPageContainer}/>
          <Route path="/create-new-model" component={AuthedCreateNewModelContainer}/>
          <Route path="/:model-name" component={AuthedModelViewContainer}/>
          <Route path="/:model-name/edit" component={AuthedModelEditContainer}/>
        </Switch>
    );
  }
}

export default App;

// const mapStateToProps = (state) => {
//   return {
//     exampleMessage: state.exampleState.exampleMessage
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     changeExampleMessage: () => { dispatch(changeExampleMessage()) }
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);

// {/* <h3> { this.props.exampleMessage }</h3>
// <button onClick={this.handleClick}> Click me </button> */}
