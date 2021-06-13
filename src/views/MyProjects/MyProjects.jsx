import React, { Component } from 'react';
import BackgroundBoard from '../../components/BackgroundBoard/BackgroundBoard';
import $ from 'jquery';

import './MyProjects.css';
import Navbar from '../../components/Navbar/Navbar';

export default class MyProjects extends Component {
  render() {
    const { data } = this.props;
    const documentHTML = $(document);
    documentHTML.on('scroll', () => {
      let currentScroll = documentHTML.scrollTop();
      const nav = $('.navbar');
      if (currentScroll > 0) {
        nav.addClass('shadow');
      } else {
        nav.removeClass('shadow');
      }
    });
    return (
      <div className="my-projects">
        <Navbar title="MY SIMPLE PROJECTS" />
        <BackgroundBoard />
        <div className="board-projects">
          {data.map((card, index) => {
            return (
              <div key={index} className="card-projects">
                <img src={card.srcImg} alt="" />
                <p>{card.title}</p>
                <div className="wrapper-button">
                  <a href={card.link} target="_blank" rel="noreferrer">
                    Lihat Project
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
