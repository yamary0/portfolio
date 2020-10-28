import React from 'react';
import ReactDOM from 'react-dom';
import './global.scss';
import Header from './components/Header/Header'
// eslint-disable-next-line
import Work from './pages/Work/Work';
import History from './pages/History/History'
import Footer from './components/Footer/Footer'

ReactDOM.render(
  <React.Fragment>
    <Header />
    <History />
    <Footer />
  </React.Fragment>,
  document.getElementById('root')
);
