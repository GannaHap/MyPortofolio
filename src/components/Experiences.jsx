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
            {this.state.data.map((card) => {
              return (
                <div className="card-certificate">
                  <h2>{card.title}</h2>
                  <img src={card.srcImg} alt={card.title} />
                  <div className="see-certificate">
                    <a href={card.link} target="_blank">
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
