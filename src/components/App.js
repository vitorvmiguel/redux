import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
          {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default App;
