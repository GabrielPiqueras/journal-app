import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { startLoadingNotes } from '../actions/notes';
import { Private } from './Private';
import { Public } from './Public';
import { Loading } from '../components/ui/Loading';

export const AppRouter = () => {

  const auth = getAuth();
  const dispatch = useDispatch();

  const [ checking, setChecking ] = useState(true);
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);

  useEffect(() => {
    
    // onAuthStateChanged es un Observable que comprueba si hay un usuario
    // autenticado, en caso de ser así recibo ese usuario e inicio su sesión
    // con la accion del Login
    onAuthStateChanged(auth, async (user) => {
      // Si user existe y el uid no es nulo
      if ( user?.uid ) {
        dispatch( login( user.uid, user.displayName ) );
        setIsLoggedIn( true );
        dispatch( startLoadingNotes( user.uid ) );
        
      } else {
          setIsLoggedIn( false );
      }

      setChecking(false);
      })
  }, [ dispatch, setChecking, setIsLoggedIn, auth ]) // por el warning de que tiene esa dependencia

  if ( checking ) {
    return <Loading />
  }
  
  return (
    <Router>
      <Routes>
        <Route path='/auth' element={ <Public isAuth={isLoggedIn} component={AuthRouter} /> }></Route>
        <Route exact path='/' element={ <Private isAuth={isLoggedIn} component={JournalScreen} /> }></Route>
        <Route path='*' element={ <Public isAuth={isLoggedIn} component={AuthRouter} /> }></Route>

        {/* <Route exact path='/' element={ <JournalScreen /> }></Route>
        <Route path='*' element={ <AuthRouter /> }></Route> */}
      </Routes>
    </Router>
  )
}