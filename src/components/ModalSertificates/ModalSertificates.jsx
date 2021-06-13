import React, { Component } from 'react';
import './ModalSertificates.css';

export default class ModalSertificates extends Component {
  hideModal = (event) => {
    const target = event.target;
    if (target.classList.contains('modal-sertificates')) {
      const body = document.querySelector('body');
      body.classList.remove('stuck');
      this.props.closeModal();
    }
  };

  render() {
    const { srcImg, title, publisher } = this.props.data;
    return (
      <div className="modal-sertificates" onClick={(e) => this.hideModal(e)}>
        <div className="modal">
          <img src={srcImg} alt={title} />
          <div className="text-detail">
            <h4>{title}</h4>
            <h5>{publisher}</h5>
          </div>
        </div>
      </div>
    );
  }
}
