import { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import {getUserAuth} from "./actions";
import { connect } from 'react-redux';

//npm install react-router-dom@5
// npm install firebase@^8.9.1
//Try different versions like dom@4.2 etc

function App(props) {
  useEffect(() => {
    props.getUserAuth();
  }, []);
  return (
    <div className="App">
      <Router>
      <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home">
            <Header />
            <Home />
          </Route>
        </Switch>
        </Router>
    </div>
  );
}

const mapStateToProps=(state)=>{
  return {};
};
const mapDispatchToProps=(dispatch)=>({
getUserAuth:()=>dispatch(getUserAuth()),
});

export default connect(mapStateToProps,mapDispatchToProps)(App);

