import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import './styles/main.scss';

import Main from './page/Main';

import Header from './layouts/header/Header';
import Aside from'./layouts/aside/Aside';
import Activity from './components/activity/Activity';
import Duration from './components/average/Average';
import Performance from './components/performance/Performance';
import Score from './components/score/Score'
import Error from './components/error/Error';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Aside />
      <Routes>
        <Route path='user/:userId' element={ <Main standAlone={true} /> } />
        <Route path='user/:userId/activity' element={ <Activity standAlone={true} /> } />
        <Route path='user/:userId/average-sessions' element={ <Duration standAlone={true} /> } />
        <Route path='user/:userId/performance' element={ <Performance standAlone={true} /> } />
        <Route path='user/:userId/score' element={ <Score standAlone={true} /> } />
        <Route path='/error' element={ <Error /> } />
        <Route path='/' element={<Navigate to='user/12' />} />
        {/* <Route path='/*' element={<Navigate to='/error' />} /> */}
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);