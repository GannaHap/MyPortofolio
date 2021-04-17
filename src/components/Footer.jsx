import React, { Component } from 'react';

// Styling
import '../css/Footer.css';

export default class Footer extends Component {
  state = {
    data: this.props.data,
  };
  render() {
    return (
      <footer>
        <div className="footer-top">
          <div className="footer-side-left">
            <h4>Alamat</h4>
            <p>Jl. Mantingan-Pakah, RT 4 /RW 1, Semen, Kedungharjo, Kec. Mantingan, Kabupaten Ngawi, Jawa Timur 63261</p>
          </div>
          <div className="footer-side-right">
            <h4>Kontak Saya</h4>
            <div className="wrap-sosmed">
              {this.state.data.map((sosmed) => {
                return (
                  <a href={sosmed.link} className="sosmed" title={sosmed.title} target="_blank" rel="noreferrer noopener">
                    <i className={sosmed.classIcon}></i>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>Create by Me @GannaHAP</span>
        </div>
      </footer>
    );
  }
}
