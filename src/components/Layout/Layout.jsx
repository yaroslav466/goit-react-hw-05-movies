import { NavLink } from 'react-router-dom';
import React from 'react';
import css from './Layout.module.css';

const Layout = ({ children }) => {

    return (
        <div>
            <header className={css.header}>
                <NavLink className={css.navlink} to="/">
                    Home
                </NavLink>
                <NavLink className={css.navlink} to="/movies">
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