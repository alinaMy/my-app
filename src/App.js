import React, { Component } from 'react';
import './App.css';
import Header from './layout/Header/header';
import Footer from './layout/footer';
import Content from './layout/content';
import Menu from './layout/menu';
import Lang from './layout/Header/lang';


class App extends Component {

    constructor(props){
        super (props);

        this.state = {
            open: false,
        };

    }
  render() {


      return <div className="App">

          <Header/>

          <button onClick={() => this.setState({ open: !this.state.open})}>Tooggle open</button>

          {this.state.open
              ? <Content/>
              : 'No content'
          }
              <Footer />
              <Menu />
              <Lang />



              </div>;
}

          }

          export default App;

