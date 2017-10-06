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
                <li>
                    <h3> { this.props.title } </h3>
                    <p> { this.props.content }</p>
                   
                    <button onClick={this.props.removeNote}> Remove Note</button>
                    <button onClick={() => this.simpleDialog.show()}>View Notel</button>
                    <SkyLight hideOnOverlayClicked ref={ref => this.simpleDialog = ref} title={this.props.title} >
                            {this.props.content}
                    </SkyLight>
                 </li>
          </div>
        )
    }
}
