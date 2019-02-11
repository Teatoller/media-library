import REACT, { Component, PropTypes } from 'react';
import Header from '../common/Header';

//Parent component render Header component 
// and components in the route the user navigates to
class App extends Component {
    render() {
        return (
            <div className="container-fluid text-center">
            <Header/>
            { this.props.children }
            </div>
        );
    }
}
App.PropTypes = {
    children: PropTypes.object.isRequired
};
