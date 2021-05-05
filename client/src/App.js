import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        {/* <Route path='/' exact={true} component={Home}/>
        <Route path='/home' exact={true} component={Home}/>
        <Route path='/profile' exact={true} component={Profile}/>
        <Route path='/user' exact={true} component={UserPage}/> */}
        <Route path='/login' exact={true} component={Login}/>
        {/* <Route path='/signup' exact={true} component={SignUp}/>   */}
      </Switch>
  </Router>
  );
}

export default App;
