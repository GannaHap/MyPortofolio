import React, { Component } from 'react';
import { connect } from 'react-redux';
import ActionType from '../../redux/ActionType';

import './NavigationSide.css';

class NavigationSide extends Component {
  render() {
    return (
      <div className="navigation-side">
        <div className="header-navigation-side">
          <div className="title-navigation-side">
            <img src="/assets/logo.png" alt="Ganna" className="logo" />
            <h2>Portfolio</h2>
          </div>

          <i className="far fa-times" onClick={() => this.hideNavigation()}></i>
        </div>
        <div className="list-menu">
          <div className="list active" name="Dashboard" onClick={(e) => this.props.handleChangeDisplay(e)}>
            <i className="fas fa-th-large"></i>
            <p>Dashboard</p>
          </div>
          <div className="list" name="Skills" onClick={(e) => this.props.handleChangeDisplay(e)}>
            <i className="fas fa-cogs"></i>
            <p>Skills</p>
          </div>
          <div className="list" name="MyProjects" onClick={(e) => this.props.handleChangeDisplay(e)}>
            <i className="fas fa-chart-pie"></i>
            <p>Simple Project</p>
          </div>
          <div className="list" name="Sertificates" onClick={(e) => this.props.handleChangeDisplay(e)}>
            <i className="fas fa-certificate"></i>
            <p>Sertificates</p>
          </div>
          <div className="list" name="Contact" onClick={(e) => this.props.handleChangeDisplay(e)}>
            <i className="far fa-address-book"></i>
            <p>Contact</p>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

const reduxDispatch = (dispatch) => {
  return {
    handleChangeDisplay: (e) => dispatch({ type: ActionType.CHANGE_DISPLAY, name: e.currentTarget.getAttribute('name'), event: e.currentTarget }),
  };
};

export default connect(null, reduxDispatch)(NavigationSide);
