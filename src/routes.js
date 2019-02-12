import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './components/HomePage';

// Map components to different routes
// Parent component wraps other components
// and serves as the entrance to other
// React components
// Index Route maps Homepage component
// to default route
export default (
    <Route path="/" component={ App }>
    <IndexRoute component={ HomePage }/>
    </Route>
);
