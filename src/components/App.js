import { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../components/Home';
import Recipes from '../components/Recipes';

import '../style/App.css';
import Banner from '../components/Banner'

// class App extends Component {
//     render() {
//         return (
//             <Router>
//                 <div>
//                     <h2>Blabla</h2>
//                     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//                         <ul className="navbar-nav mr-auto">
//                             <li><Link to={'/'} className="nav-link"> Home </Link></li>
//                             <li><Link to={'/recipes'} className="nav-link">Recipes</Link></li>
//                         </ul>
//                     </nav>
//                     <hr />
//                     <Switch>
//                         <Route exact path='/' component={Home} />
//                         <Route path='/recipes' component={Recipes} />
//                     </Switch>
//                 </div>
//             </Router>
//         );
//     }
// }

function App() {
  return (
    <div className="App">
      <Banner></Banner>
    </div>
  );
}

export default App;
