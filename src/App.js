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
            name: 'John',
            cnt: 0,
        };

    }
  render() {


      return <div className="App">

          {this.state.name}
          {this.state.cnt}

          <Header
          lang = {this.state.open ? 'open' : 'closed'}
          />


          <button onClick={() => this.setState({
              open: !this.state.open,
              name: `${this.state.name}.`,
              cnt: this.state.cnt + 1
          })}>Tooggle open</button>

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

