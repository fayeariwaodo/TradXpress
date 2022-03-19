import logo from './logo.svg';
import './App.css';
import Home from './Home.js'
import Navbar from './Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';
import Form4 from './Form4';
import Form5 from './Form5';
import Form6 from './Form6';





function App() {
  return (
    <div>
      <Router>
        <Navbar/>
          <Switch>
          <Route exact path='/'>
            <Home/>
          </Route >
          <Route path='/Form1'>
            <Form1/>
          </Route >

          <Route path='/Form2'>
            <Form2/>
          </Route >
          <Route path='/Form3'>
            <Form3/>
          </Route >
          <Route path='/Form4'>
            <Form4/>
          </Route >
          <Route path='/Form5'>
            <Form5/>
          </Route >
          <Route path='/Form6'>
            <Form6/>
          </Route >




          </Switch>
      </Router>
     
    </div>
  );
}

export default App;
