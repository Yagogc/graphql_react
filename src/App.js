import React from "react";
import "./App.css";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import logo from "./logo.svg";
import Post from "./Post";
import Posts from "./Posts";

const client = new ApolloClient({
  uri: "https://api-euwest.graphcms.com/v1/cjkvc7hft02ir01bnbhofcxxi/master"
});

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route path="/post/:id" component={Post} />
        </Switch>
      </div>
    </Router>
  </ApolloProvider>
);

export default App;
