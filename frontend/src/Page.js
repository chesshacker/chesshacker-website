import './Page.css';
import React, { Component } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

class Page extends Component {
  render() {
    return (
      <div id="page">
        <div id="everything-except-footer-wrap">
          <div id="everything-except-footer">
            <Navigation />
            {this.props.children}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Page;
