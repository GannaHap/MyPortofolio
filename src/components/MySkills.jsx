import React, { Component } from 'react';

import PieChartSkills from './ChartSkill/PieChartSkills';

// Styling
import '../css/MySkills.css';

export default class MySkills extends Component {
  state = {
    data: this.props.data,
  };
  render() {
    return (
      <section id="skills">
        <div className="container">
          <h2>Kemampuan</h2>
          <div className="wrap-icon-skill">
            {this.state.data.map((lang, index) => {
              return (
                <span className={lang.spanClass} key={index} title={lang.title}>
                  <i className={lang.iconLang}></i>
                  <div className="bar-lang">
                    <div className={lang.percentLang}></div>
                  </div>
                </span>
              );
            })}
          </div>
          <div className="section-bottom">
            <p>Berikut adalah Grafik kemampuan saya, menurut keseluruhan data repository Github saya.</p>
            <PieChartSkills valueHTML={this.props.valueHTML} valueCSS={this.props.valueCSS} valueJavaScript={this.props.valueJavaScript} valuePhp={this.props.valuePhp} />
          </div>
        </div>
      </section>
    );
  }
}
