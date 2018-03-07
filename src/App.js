import React, { Component } from 'react';
import './App.css';
import Header from './layout/Header/header';
import Footer from './layout/footer';
import Content from './layout/content';
import Menu from './layout/menu';
import Lang from './layout/Header/lang';


class App extends Component {
  render() {
      return (<div className="App">
          <Header />
          <Menu />
          <Lang />
          <Content />
          <Footer />



      </div>);
  }
}

export default App;
