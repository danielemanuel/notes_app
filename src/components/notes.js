import React, {Component } from 'react';
import SkyLight from 'react-skylight';

export default class Notes extends Component {
    constructor(){
        super();
        this.state = {
            isOpen: false,
        }
    }

    toggleModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    render() {
        return (
            <div className='wrapper'>
                <li className='noteItem' >
                    <h3> { this.props.title } </h3>                   
                    <button  className='removeButton' onClick={this.props.removeNote}>Remove Note</button>                    
                    <div className='divider'></div>
                    <button className='viewNoteButton' onClick={() => this.simpleDialog.show()}>View Note</button>
                    <SkyLight hideOnOverlayClicked ref={ref => this.simpleDialog = ref} title={this.props.title} >
                         Note Content: <hr /> {this.props.content}
                    </SkyLight>
                 </li>
          </div>
        )
    }
}
