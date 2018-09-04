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

// import './App.css';
// import { connect } from 'react-redux'
// import { changeExampleMessage } from './actions'

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
          <Route path="/home" component={LoggedInHomepageContainer}/>
          <Route path="/about" component={AboutPageContainer}/>
          <Route path="/create-new-model" component={CreateNewModelContainer}/>
          <Route path="/:model-name" component={ModelViewContainer}/>
          <Route path="/:model-name/edit" component={ModelEditContainer}/>
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
