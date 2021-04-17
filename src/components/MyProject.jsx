import React, { Component } from 'react';

// Styling
import '../css/MyProject.css';

export default class MyProject extends Component {
  state = {
    data: this.props.data,
  };
  render() {
    return (
      <section id="project">
        <div className="container">
          <h2>Project Sederhana Saya</h2>
          <div className="wrap-card-project">
            {this.state.data.map((card, index) => {
              return (
                <div className="card-project" key={index}>
                  <img src={card.srcImg} alt="Project 1" />
                  <div className="detail-card">
                    <a href={card.link} target="_blank" title={card.title}>
                      {card.title}
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
