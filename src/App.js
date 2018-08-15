import React from "react";
import "./App.css";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import logo from "./logo.svg";

const client = new ApolloClient({
  uri: "https://api-euwest.graphcms.com/v1/cjkvc7hft02ir01bnbhofcxxi/master"
});

const App = () => (
  <ApolloProvider client={client}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
        To get started, edit
        <code>src/App.js</code>
        and save to reload.
      </p>
    </div>
  </ApolloProvider>
);

export default App;
