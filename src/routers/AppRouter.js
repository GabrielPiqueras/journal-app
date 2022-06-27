import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { JournalPage } from '../components/journal/JournalPage';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={ <JournalPage /> }></Route>
        <Route path='*' element={ <AuthRouter /> }></Route>
      </Routes>
    </Router>
  )
}
