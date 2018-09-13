import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';

class AboutPageContainer extends React.Component {


  render() {
    return (
      <div className="About-page-container">
        <Header user={this.props.user.user}/>

        <div id="About-this-project">About This Project</div>
        <div className="About-this-project-container">

          <div id="About-me-contact-text">About Me / Contact</div>
          <div className="About-me-container">
          My name is.. your mom.
          </div>

          <div id="History-text">History</div>
          <div className="History-container">
          </div>
        </div>

        <div id="FAQ-and-resources">FAQ & Resources</div>
        <div className="About-this-project-container">

          <div id="What-is-intersectionality-text">What is intersectionality?</div>
          <div className="What-is-intersectionality-container">

          </div>
        </div>


      </div>
    )
  }
}

const mapStateToProps = state => ({ models: state.models, user: state.user })

export default connect(mapStateToProps, null)(AboutPageContainer)
