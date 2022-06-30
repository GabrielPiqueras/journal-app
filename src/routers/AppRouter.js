import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={ <JournalScreen /> }></Route>
        <Route path='*' element={ <AuthRouter /> }></Route>
      </Routes>
    </Router>
  )
}
