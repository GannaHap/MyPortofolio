import React, { Component } from 'react';
import BackgroundBoard from '../../components/BackgroundBoard/BackgroundBoard';
import ContactMe from '../../components/ContactMe/ContactMe';
import MyContact from '../../components/MyContact/MyContact';
import Navbar from '../../components/Navbar/Navbar';

import './Contact.css';

export default class Contact extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="contact">
        <Navbar title="CONTACT" />
        <BackgroundBoard />
        <div className="content-contact">
          <MyContact data={data} />
          <ContactMe />
        </div>
      </div>
    );
  }
}
