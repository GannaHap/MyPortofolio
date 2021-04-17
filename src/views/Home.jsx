// Libraries
import React, { Component } from 'react';
import axios from 'axios';
import dataJson from '../assets/db.json';

// Component
import Navbar from '../components/Navbar';
import Jumbotron from '../components/Jumbotron';
import About from '../components/About';
import MyProject from '../components/MyProject';
import MySkills from '../components/MySkills';

// Styling
import './Home.css';
import Experiences from '../components/Experiences';
import Footer from '../components/Footer';

export default class Home extends Component {
  state = {
    data: dataJson,
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
    return (
      <div>
        <Navbar data={this.state.data.navbar} />
        <Jumbotron />
        <About data={this.state.data.about} />
        <MyProject data={this.state.data.myProject} />
        <MySkills data={this.state.data.mySkills} valueHTML={this.state.valueHTML} valueCSS={this.state.valueCSS} valueJavaScript={this.state.valueJavaScript} valuePhp={this.state.valuePHP} />
        <Experiences data={this.state.data.experiences} />
        <Footer data={this.state.data.footer} />
      </div>
    );
  }
}
