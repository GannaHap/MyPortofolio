import React, { Component } from 'react';

// Styling
import '../css/Navbar.css';

export default class Navbar extends Component {
  state = {
    data: this.props.data,
    menuIcon: 'fas fa-bars',
    showMenu: 'menu',
    showNav: null,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    let currentScroll = window.scrollY;
    if (currentScroll > 0) {
      this.setState({
        showNav: 'show',
      });
    } else {
      this.setState({
        showNav: null,
      });
    }
  };

  handleMenuIcon = (e) => {
    if (e.currentTarget.classList.value === 'fas fa-bars') {
      this.setState({
        menuIcon: 'fas fa-times',
        showMenu: 'menu active',
      });
    } else {
      this.setState({
        menuIcon: 'fas fa-bars',
        showMenu: 'menu',
      });
    }
  };

  render() {
    return (
      <nav className={this.state.showNav}>
        <div className="icon">
          <i className="fas fa-id-badge"></i>
          <h2>PortofolioKu</h2>
        </div>
        <ul className={this.state.showMenu}>
          {this.state.data.map((menu, index) => {
            return (
              <a href={menu.link} key={index}>
                {menu.name}
              </a>
            );
          })}
        </ul>
        {/* Menu Icon Hamburger */}
        <div className="menu-icon">
          <i className={this.state.menuIcon} onClick={this.handleMenuIcon}></i>
        </div>
      </nav>
    );
  }
}
