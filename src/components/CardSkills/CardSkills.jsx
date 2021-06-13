import React, { Component } from 'react';
import 'jquery';

// Styling
import './CardSkills.css';

export default class CardSkills extends Component {
  render() {
    const { data } = this.props;

    return (
      <div className="board-card-skills">
        {data.map((card, index) => {
          return (
            <div className="card-skills" key={index}>
              <div className="img-icon">
                <img src={card.iconLang} alt={card.title} />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
