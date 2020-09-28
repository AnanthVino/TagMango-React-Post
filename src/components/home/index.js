/**
 * 
 * Code implementation
 * @Author Ananth Gunasekarapandiyan
 * @Email ananth1626p@gmail.com
 * 
 */

import React from 'react';
import './home.scss';

const Home = (props) => {

    const onRedirect = () => {
        props.history.push("create-post");
    }

    return (
        <div className="home">
            <div className="container">
                <h2>Welcome to Tag Mango</h2>
                <button type="submit" className="btn btn-primary mt-1" onClick={() => onRedirect()}>Create post</button>
            </div>
        </div>
    )
}

export default Home;