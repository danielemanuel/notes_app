import React, {Component } from 'react';

export default class Notes extends Component {

    render() {
        return (
            <div className='wrapper'>
                <li>
                    <h3> { this.props.title } </h3>
                    <p> { this.props.content }</p>
                    <button onClick={this.props.removeNote}> Remove Item</button>
                </li>
          </div>
        )
    }
}