import {Link} from 'react-router-dom';
import React from 'react';

const Main = () => {
    return (
        <div>
        <h1>Main</h1>
        <Link to="/about/100">About</Link>{" "}
        <a href="/about/2">About2</a>
        </div>
    );
}

export default Main;