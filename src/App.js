import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Payment from './Payment';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fragment, useEffect } from 'react';
import Login from './Login';
import { auth } from './firebase';
import  "firebase/compat/auth";
import { useStateValue } from "./StateProvider";



function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(()=>{
    //this will only run once when the app component loads...
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);

      if(authUser){
        // the user just logged in / the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
        //the user is logged out

        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })

  }, [])
  return (
    //BEM convention
    <Router>
      <div className="app">
        <Routes>

          <Route exact path="/login" element= {
            <Fragment>
              <Login />
            </Fragment>
            }/>
          

          <Route exact path="/checkout" element={
            <Fragment>
              <Header />
              <Checkout />
            </Fragment>
          }/> 
          
          
          <Route exact path="/payment" element={
            <Fragment>
              <Header />
              <Payment />
            </Fragment>
          }/>  


          <Route exact path="/" element= {
            <Fragment>
              <Header />
              <Home/>
            </Fragment>
            }/>
            

        </Routes>
  
      </div>
    </Router>
  );
}

export default App;
