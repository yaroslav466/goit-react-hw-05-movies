import { NavLink } from 'react-router-dom';
import React from 'react';

const Layout = ({ children }) => {

    return (
        <div>
            <header>
                <NavLink to="/">
                    Home
                </NavLink>
                <NavLink to="/movies">
                    Movies
                </NavLink>
                
            </header>
            <main>
                <div>{children}</div>
            </main>
        </div>
    );

};

export default Layout;