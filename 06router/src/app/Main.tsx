import {Link, useNavigate} from 'react-router-dom';
import React from 'react';

const Main = () => {
    const navigate = useNavigate();
    return (
        <div>
        <h1>Main</h1>
        <Link to="/about/100">About</Link>{" "}
        <a href="/about/2">About2</a>
        <button onClick={() => navigate("/about/3")}>About3</button>
        </div>
    );
}

export default Main;