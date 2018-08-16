import React from "react";
import "./App.css";
import { ApolloProvider, Query } from "react-apollo";
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import logo from "./logo.svg";

const client = new ApolloClient({
  uri: "https://api-euwest.graphcms.com/v1/cjkvc7hft02ir01bnbhofcxxi/master"
});

const POSTS_QUERY = gql`
  query allPosts {
    posts {
      id
      title
      body
      createdAt
    }
  }
`;

// client.query({ POSTS_QUERY }).then(res => console.log(res.data.posts));

const App = () => (
  <ApolloProvider client={client}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <Query query={POSTS_QUERY}>
        {({ loading, data }) => {
          if (loading) return "Loading...";
          const { posts } = data;
          return posts.map(post => <h1 key={post.id}>{post.title}</h1>);
        }}
      </Query>
    </div>
  </ApolloProvider>
);

export default App;
