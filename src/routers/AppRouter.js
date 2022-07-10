import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { Private } from './Private';
import { Public } from './Public';
import { Loading } from '../components/ui/Loading';

export const AppRouter = () => {

  const auth = getAuth();
  const dispatch = useDispatch();

  const [ checking, setChecking ] = useState(true);
  const [ isLogged, setIsLogged ] = useState(false);

  useEffect(() => {
    
    // onAuthStateChanged es un Observable que comprueba si hay un usuario
    // autenticado, en caso de ser así recibo ese usuario e inicio su sesión
    // con la accion del Login
    onAuthStateChanged(auth, (user) => {
      console.log('user', user);
      // Si user existe y el uid no es nulo
      if ( user?.uid ) {
        dispatch(login(user.uid, user.displayName));

        setIsLogged(true);
      } else {
        setIsLogged(false);
      }

      setChecking(false);
    })
  }, [ dispatch, setChecking, setIsLogged ]) // por el warning de que tiene esa dependencia
  
  console.log('checking', checking);
  console.log('isLogged', isLogged);

  if ( checking ) {
    return <Loading />
    // return <h1>Espere...</h1>
  }
  
  return (
    <Router>
      <Routes>
        <Route path='/auth' element={ <Public isAuth={isLogged} component={AuthRouter} /> }></Route>
        <Route exact path='/' element={ <Private isAuth={isLogged} component={JournalScreen} /> }></Route>
        <Route path='*' element={ <Public isAuth={isLogged} component={AuthRouter} /> }></Route>

        {/* <Route exact path='/' element={ <JournalScreen /> }></Route>
        <Route path='*' element={ <AuthRouter /> }></Route> */}
      </Routes>
    </Router>
  )
}