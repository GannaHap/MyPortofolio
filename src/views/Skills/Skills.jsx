import axios from 'axios';
import React, { Component } from 'react';
import BackgroundBoard from '../../components/BackgroundBoard/BackgroundBoard';
import CardSkills from '../../components/CardSkills/CardSkills';
import ChartSkills from '../../components/ChartSkills/ChartSkills';
import $ from 'jquery';

import './Skills.css';
import Navbar from '../../components/Navbar/Navbar';

export default class Skills extends Component {
  state = {
    valueHTML: 0,
    valueCSS: 0,
    valueJavaScript: 0,
    valuePHP: 0,
  };

  gettingAllLink() {
    axios
      .get('https://api.github.com/users/GannaHap/repos')
      .then((repo) => {
        return repo.data.map((link) => link.languages_url);
      })
      .then((res) => {
        res.forEach((link) => {
          axios.get(link).then((result) => {
            if (result.data.HTML) {
              this.setState({
                valueHTML: this.state.valueHTML + result.data.HTML,
              });
            }
            if (result.data.CSS) {
              this.setState({
                valueCSS: this.state.valueCSS + result.data.CSS,
              });
            }
            if (result.data.JavaScript) {
              this.setState({
                valueJavaScript: this.state.valueJavaScript + result.data.JavaScript,
              });
            }
            if (result.data.PHP) {
              this.setState({
                valuePHP: this.state.valuePHP + result.data.PHP,
              });
            }
          });
        });
      });
  }

  async gettingDataRepos() {
    await this.gettingAllLink();
  }

  componentDidMount() {
    this.gettingDataRepos();
  }

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
      <div className="skills">
        <BackgroundBoard />
        <Navbar title="SKILLS & TOOLS" />

        <div className="board-skill">
          <ChartSkills valueHTML={this.state.valueHTML} valueCSS={this.state.valueCSS} valueJavaScript={this.state.valueJavaScript} valuePhp={this.state.valuePHP} />
          <CardSkills data={data} />
        </div>
      </div>
    );
  }
}
