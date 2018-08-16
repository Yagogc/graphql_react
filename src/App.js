import React from "react";
import "./App.css";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Post from "./Post";
import Posts from "./Posts";
import NewPost from "./NewPost";

const client = new ApolloClient({
  uri: "https://api-euwest.graphcms.com/v1/cjkvc7hft02ir01bnbhofcxxi/master"
});

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <h1 className="App-title">Welcome to GraphQL React</h1>
          </Link>
        </header>
        <Link to="/post/new">Add Post</Link>
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route path="/post/new" component={NewPost} />
          <Route path="/post/:id" component={Post} />
        </Switch>
      </div>
    </Router>
  </ApolloProvider>
);

export default App;
