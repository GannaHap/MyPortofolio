import React, { Component } from 'react';

// Styling
import '../css/About.css';

export default class About extends Component {
  state = {
    data: this.props.data,
  };
  render() {
    return (
      <section id="about">
        <div className="container">
          <h2>Tentang Saya</h2>
          <p>{this.state.data.desc}</p>
        </div>
      </section>
    );
  }
}
