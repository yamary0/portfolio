import React from 'react';
import ReactDOM from 'react-dom';
import './global.scss';
import Layout from './components/Layout'
import History from './pages/History'


ReactDOM.render(
  <Layout>
    <History />
  </Layout>,
  document.getElementById('root')
);
