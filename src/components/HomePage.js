import React from 'react';
import { link } from 'react-router';

// Homepage with link to the library
const Homepage = () => (
    <div className="jumbotron center">
    <h1 className="lead" >Welcome to Media Library</h1>
    <div>
    <Link to="library">
    <button className="btn btn-lg btn-primary">Visit Library</button>
    </Link>
    </div>
    </div>
);

export default Homepage;
