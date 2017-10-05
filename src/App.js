import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <header>
          <div className='wrapper'>
            <h1>Notes App  </h1>
          </div>
       </header>
      <div className= 'constainer'>
        <section className= 'add-item'>
          <form>
            <input type='text' name='title' placeholder='Insert title...' />
            <input type='text' name='content' placeholder='Insert content...' />
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
