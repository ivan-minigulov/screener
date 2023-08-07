import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
// import { Context } from './index';
import AppRouter from './components/AppRouter';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import { checkAuth, checkVisit } from './http/userAPI';
// import { Spinner } from 'react-bootstrap';

const App = observer(() => {
  // const {user} = useContext(Context)
  // const [loading, setLoading] = useState(true)

  useEffect(() => {
    checkVisit()
  }, [])

  // useEffect(() => {
  //     checkAuth().then(userData => {
  //         user.setUser({...userData})
  //         user.setIsAuth(true)
  //     }).finally(() => setLoading(false))
  // }, [])

  // if (loading) {
  //     return (
  //       <div className="grow">
  //         <Spinner animation={"grow"}/>
  //       </div>
  //     )
      
  // }

  return (
    <BrowserRouter>
      <div className='wrapper'>
        <div className='content'>
          <NavBar />
          <AppRouter />
        </div>
        <Footer />
      </div> 
    </BrowserRouter>
  )
})

export default App;
