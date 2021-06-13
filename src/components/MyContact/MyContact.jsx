import React, { Component } from 'react';

import './MyContact.css';

export default class MyContact extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="my-contact">
        <img src="/assets/img/imgContact.png" alt="Profile" />
        <div className="contact-sosmed">
          {data.map((sosmed, index) => {
            return (
              <a href={sosmed.classIcon} target="_blank" rel="noreferrer" key={index} title={sosmed.title}>
                <i className={sosmed.classIcon}></i>
              </a>
            );
          })}
        </div>
        <h5>Ganna Hinggil Anugrah Prasetya</h5>
        <p>Ngawi, Jawa Timur</p>
        <p>gannahap02@gmail.com</p>

        <h5 className="school">SMK Muhammadiyah 2 Ngawi</h5>
        <p className="major">Teknik Komputer dan Jaringan</p>
      </div>
    );
  }
}
