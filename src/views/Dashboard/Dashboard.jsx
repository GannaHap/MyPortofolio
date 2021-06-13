import React, { Component } from 'react';
import BackgroundBoard from '../../components/BackgroundBoard/BackgroundBoard';
import Navbar from '../../components/Navbar/Navbar';

import './Dashboard.css';

export default class Dashboard extends Component {
  render() {
    const { data } = this.props;
    const { imgProfile, sosmed } = data;
    return (
      <div className="dashboard">
        <Navbar title="DASHBOARD" />
        <BackgroundBoard />
        <div className="board-dashboard">
          <img src={imgProfile} alt="Me-Dashboard" />

          <div className="content-dashboard">
            <p>
              Halloo... Saya <span className="nickName">Ganna</span>. Saya tertarik belajar dan bekerja dalam bidang Front-End Web.
            </p>
            <div className="content-sosmed">
              {sosmed.map((card, index) => {
                return (
                  <a href={card.link} key={index} target="_blank" rel="noreferrer">
                    <i className={card.icon}></i>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
