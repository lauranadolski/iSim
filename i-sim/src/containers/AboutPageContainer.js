import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';

class AboutPageContainer extends React.Component {


  render() {
    return (
      <div>
        Hello, I am an about page container.
        <Header user={this.props.user}/>
      </div>
    )
  }
}

export default AboutPageContainer;

const mapStateToProps = state => ({ models: state.models, user: state.user })
