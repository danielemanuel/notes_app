import React, {Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {

    render() {
        return (
            <div className='home-container' >
                <h1 className='welcome' >Welcome to Note Keeper </h1>
                <br /><br /><br />
                <Link className='link' to='/notes' >Add your thoughts in here ...</Link>
          </div>
        )
    }
}