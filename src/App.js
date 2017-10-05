import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
       <header>
          <div className='wrapper'>
            <h1>Notes App  </h1>
          </div>
       </header>
      <div className= 'container'>
        <section className= 'add-item'>
          <form>
            <input className='title' type='text' name='title' placeholder='Insert title...' />
            <br />
            <br />
            <input  className='content' type='text' name='content' placeholder='Insert content...' />
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
