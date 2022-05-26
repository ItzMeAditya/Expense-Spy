import React from 'react';

import Navigation from './Navigation';
import './MainHeader.css';

const MainHeader = (props) => {
    return (
        <header className='main-header'>
            <h1>Expense-Spy</h1>
            <Navigation  isLogedIn={props.isAuthenticated} onLogout={props.onLogout}/>
        </header>
    )
}

export default MainHeader;