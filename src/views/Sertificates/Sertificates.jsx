import React, { Component } from 'react';
import BackgroundBoard from '../../components/BackgroundBoard/BackgroundBoard';
import $ from 'jquery';

import './Sertificates.css';
import Navbar from '../../components/Navbar/Navbar';
import ModalSertificates from '../../components/ModalSertificates/ModalSertificates';

export default class Sertificates extends Component {
  state = {
    show: false,
    srcImg: '',
    title: '',
    publisher: '',
  };

  showSertificates = (card) => {
    const { srcImg, title, publisher } = card;
    const body = document.querySelector('body');
    body.classList.add('stuck');

    this.setState({
      show: true,
      srcImg: srcImg,
      title: title,
      publisher: publisher,
    });
  };

  closeModal = () => {
    this.setState({
      show: false,
      srcImg: '',
      title: '',
    });
  };

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
                    <button onClick={() => this.showSertificates(card)}>
                      <span></span>
                      <div className="text-button">Lihat Detail</div>
                    </button>
                  </div>
                </div>
                <p>{card.title}</p>
              </div>
            );
          })}
        </div>
        {this.state.show && <ModalSertificates closeModal={this.closeModal} data={this.state} />}
      </div>
    );
  }
}
