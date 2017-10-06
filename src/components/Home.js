import React, {Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {

    render() {
        return (
            <div className='home-page' >
                <h1 className='welcomeMessage' >Welcome to Note Keeper </h1>
                <br /><br /><br />
                <Link className='link' to='/notes' >Add your thoughts in here ...</Link>
          </div>
        )
    }
}