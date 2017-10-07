import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

        return (
            <div className='home-page' >
                <h1 className='welcomeMessage' >Welcome to Notes Keeper</h1>
                <br /><br /><br />
                <Link className='link' to='/notes' >Add your thoughts in here ...</Link>
          </div>
        )
}

export default Home;