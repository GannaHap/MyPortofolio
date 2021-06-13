import React, { Component } from 'react';
import $ from 'jquery';

import './Navbar.css';

export default class Navbar extends Component {
  showNavigation = () => {
    const navigation = $('.navigation');
    navigation.animate(
      {
        opacity: 1,
      },
      300
    );
    navigation.show();
  };

  render() {
    return (
      <div className="navbar">
        <h4>{this.props.title}</h4>
        <i className="far fa-bars" onClick={() => this.showNavigation()}></i>
      </div>
    );
  }
}
