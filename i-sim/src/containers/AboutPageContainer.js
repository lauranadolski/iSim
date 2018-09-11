import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';

class AboutPageContainer extends React.Component {


  render() {
    return (
      <div>
        Hello, I am an about page container.
        <Header user={this.props.user.user}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({ models: state.models, user: state.user })

export default connect(mapStateToProps, null)(AboutPageContainer)
