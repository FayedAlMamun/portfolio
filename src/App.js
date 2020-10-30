
import './App.css';
import Navsbar from './components/Navbar/Navsbar';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from './components/About/About';
import NoMatch from './components/NoMatch/NoMatch';
import Blogs from './components/Blogs/Blogs';
function App() {
  return (
    <Router>
      <Navsbar/>
      <Switch>
      <Route exact path='/'>
        <Home/>
        </Route>
        <Route path='/home'>
        <Home/>
        </Route>
        <Route path='/project'>
        <Projects/>
        </Route>
        <Route path='/about'>
        <About/>
        </Route>
        <Route path='/blog'>
        <Blogs/>
        </Route>
        <Route path='*'>
        <NoMatch/>
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
