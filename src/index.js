import React from 'react';
import ReactDOM from 'react-dom';
import './global.scss';
import Layout from './components/Layout/Layout'
import Work from './pages/Work/Work'
// import History from './pages/History/History'


ReactDOM.render(
  <Layout>
    <Work />
    {/* <History /> */}
  </Layout>,
  document.getElementById('root')
);
