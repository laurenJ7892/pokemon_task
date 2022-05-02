import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.min.css';
import Main from './pages/Main';
import Header from './components/Header.js';
import '../styles/styles.css';

function App()
{
  return (
    <div className="app">
      <Header/>
      <Main />
    </div>
  );
}

ReactDOM.render((<BrowserRouter><App/></BrowserRouter>), document.getElementById('app'));