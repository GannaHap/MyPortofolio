import React, { Component } from 'react';
import BackgroundBoard from '../../components/BackgroundBoard/BackgroundBoard';
import $ from 'jquery';

import './Sertificates.css';
import Navbar from '../../components/Navbar/Navbar';

export default class Sertificates extends Component {
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
      <div className="sertificates">
        <Navbar title="SERTIFICATES" />
        <BackgroundBoard />
        <div className="board-sertificates">
          {data.map((card, index) => {
            return (
              <div className="card-sertif" key={index}>
                <div className="img-sertificate">
                  <img src={card.srcImg} alt={card.title} />

                  <div className="see-sertificate">
                    <a href={card.link} target="_blank" rel="noreferrer">
                      <span></span>
                      <div className="text-button">Lihat Project</div>
                    </a>
                  </div>
                </div>
                <p>{card.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
