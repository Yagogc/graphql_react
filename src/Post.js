import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Link } from "react-router-dom";

const POST_QUERY = gql`
  query post($id: ID!) {
    post(where: { id: $id }) {
      id
      title
      body
      createdAt
    }
  }
`;

export default class Post extends Component {
  render() {
    const { match } = this.props;
    return (
      <Query query={POST_QUERY} variables={{ id: match.params.id }}>
        {({ data, loading }) => {
          if (loading) return "Loading...";
          const { post } = data;
          return (
            <div>
              <Link to="/">
                <h3>Back</h3>
              </Link>
              <h1>{post.title}</h1>
            </div>
          );
        }}
      </Query>
    );
  }
}
