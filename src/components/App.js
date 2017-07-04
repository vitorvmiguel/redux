import React, { Component } from 'react';
import Navbar from './Navbar';
import DishesList from './DishesList';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <DishesList />
        <Footer />
      </div>
    );
  }
}

export default App;
