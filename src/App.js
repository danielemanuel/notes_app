import React, { Component } from 'react';
import firebase from './firebase'; 
import Modal from 'tg-modal';
import './App.css';
import SkyLight from 'react-skylight';

import Header from './components/Header';
import Notes from './components/Notes';

class App extends Component {
  constructor() {
    super() 
    this.state = {
      title: '',
      content: '',
      isOpen: false,
      notes: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeNote = this.removeNote.bind(this);
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

    if(this.state.title === '' && this.state.content === '' ){
      alert("Please fill in at least one of the fields !!!")  
      return this.setState({ title: '', content: '' })
    }

    if(this.state.title === '') {
      return this.setState({ title: '(empty note title)'})
    }
    
    notesRef.push(note);
    this.setState({
      title:'',
      content: ''
    })
  }

  displayNotes() {
   return( <ul>
    {
      this.state.notes.map(note => {
       
         return (                      
           <Notes 
               key={note.id} 
               title={note.title}
               content={note.content}
               noteId= {note.id}
               removeNote = {() => this.removeNote(note.id) }
           />
              )
          })
     }
        </ul>  
   )}

  notesForm() {
    return( <form onSubmit={this.handleSubmit} >
        <input 
          className='title' 
          type='text' 
          name='title'
          placeholder='Insert title...'
          onChange={this.handleChange}
          value={this.state.title} />
        <br /><br />
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
    )
  }

  removeNote(Id) {   
    const noteRef = firebase.database().ref(`/notes/${Id}` );
    noteRef.remove();
  }
  
  render() {
    return (
      <div>
        <Header />          
      <div className="app">       
        <div className= 'container'>
          <section className= 'add-item'>
            { this.notesForm()}
          <section className='display-item'>
              <div className='wrapper'>
              { this.displayNotes()}        
              </div>
            </section>
          </section>
        </div>
      </div>
      </div>
    );
  }
}

export default App;





                   