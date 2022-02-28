import '../style/banner.css'
import { Component } from "react";
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Recipes from '../components/Recipes';
import Planner from '../components/Planner';

// function Tabs() {
//     const tabs = ['recipes', 'planner']
//
//     return (
//         <div className='mp-banner-tabs'>
//             <span className='mp-tabs'>
//                 {tabs[0]}
//             </span>
//             <span className='mp-tabs'>
//                 {tabs[1]}
//             </span>
//         </div>
//     )
// }

class Tabs extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link to={'/'} className="nav-link"> Home </Link>
                        <Link to={'/recipes'} className="nav-link">Recipes</Link>

                    </nav>
                    <hr />
                    <Switch>
                        <Route exact path='/planner' component={Planner} />
                        <Route path='/recipes' component={Recipes} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default Tabs