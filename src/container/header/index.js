import React from 'react';
import './header.scss';

const Header =() => {
    return (
        <div className="header">
            <div className="container">
                <nav className="navbar navbar-light">
                    <div className="navbar-header">
                        <div className="navbar-brand text-white text-lg mt-4 brand-text font-weight-bold">
                            TAGMANGO
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header