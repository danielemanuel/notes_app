import React, { Component } from 'react';
import './App.css';

import Header from './components/header';

class App extends Component {
  constructor() {
    super() 
    this.state = {
      title: '',
      content: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className="app">
       <header>
          <Header />
       </header>
      <div className= 'container'>
        <section className= 'add-item'>
          <form>
            <input 
              className='title' 
              type='text' 
              name='title'
              placeholder='Insert title...'
              onChange={this.handleChange}
              value={this.state.title} />
            <br />
            <br />
            <input  
              className='content' 
              type='text' 
              name='content' 
              placeholder='Insert content...'
              onChange={this.handleChange} 
              value={this.state.content}/>
            <br />
            <br />
            <button> Add Note</button>
          </form>
          <section className='display-item'>
            <div className='wrapper'>
              <ul>


              </ul>

            </div>
          </section>
        </section>

      </div>

      </div>
    );
  }
}

export default App;
