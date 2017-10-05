import React, { Component } from 'react';
import firebase from './firebase'; 
import './App.css';

import Header from './components/header';
import Notes from './components/notes';

class App extends Component {
  constructor() {
    super() 
    this.state = {
      title: '',
      content: '',
      notes: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const notesRef = firebase.database().ref('notes');
    notesRef.on('value', (snapshot) => {
      let notes = snapshot.val();
      let newState = [];
      for(let note in notes) {
        newState.push({
          id: note,
          title: notes[note].title,
          content: notes[note].content
        });
      }
      this.setState({
        notes: newState
      })
    })

  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const notesRef = firebase.database().ref('notes');
    const note = {
      title: this.state.title,
      content: this.state.content
    }

    notesRef.push(note);
    this.setState({
      title:'',
      content: ''
     
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
          <form onSubmit={this.handleSubmit} >
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
                {
                  this.state.notes.map(note => {
                    return(
                      <Notes 
                        key ={note.id} 
                        title={note.title}
                        content={note.content}
                        />
                    )
                  })
                }
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
