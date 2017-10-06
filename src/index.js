import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import App from './App';
import Home from './components/Home';

ReactDOM.render(
    <BrowserRouter>
        <div>
        <Route exact path='/' component={Home} />
        <Route path='/notes' component={App} />
        </div>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
