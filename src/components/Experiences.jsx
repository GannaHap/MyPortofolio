import React, { Component } from 'react';

// Styling
import '../css/Experiences.css';

export default class Experiences extends Component {
  state = {
    data: this.props.data,
  };
  render() {
    return (
      <section id="experiences">
        <div className="container">
          <h2>Pengalaman</h2>
          <div className="wrap-certificates">
            {this.state.data.map((card, index) => {
              return (
                <div className="card-certificate" key={index}>
                  <h2>{card.title}</h2>
                  <img src={card.srcImg} alt={card.title} />
                  <div className="see-certificate">
                    <a href={card.link} target="_blank" rel="noreferrer noopener">
                      Lihat Detailnya
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}
