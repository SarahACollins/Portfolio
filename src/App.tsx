// React imports
import React, { Component } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

// Components
import { Home } from './components/pages/Home';

// Styles
import './App.css';

class App extends Component {
  render() {
    return(
      <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
