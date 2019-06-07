import React, { Component } from 'react';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = { year: new Date().getFullYear() };
  }

  render() {
    return (
      <footer>
        <ul className="site-links">
          <li>
          <i className="fas fa-mobile-android-alt">+98916262307</i>
            &copy; {this.state.year} M.H.Fallah
            
          </li>
        </ul>
      </footer>
    );
  }
}

export default Footer;