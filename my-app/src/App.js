import './App.css';
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Header from './Components/Header.js';
import { useUser } from './Components/context/UserContext.js';
import Auth from './Components/Auth/Auth.js';

function App() {
    const { user } = useUser();
    return (
        <div className='App'>
            <Header />
            <Routes>
                <Route exact path='/auth/:type' component={Auth} />
                <Route exact path='/'>
                    <>
                        {user && <Navigate to='/list' />}
                        {!user && <Navigate to='/auth/sign-in' />}
                    </>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
