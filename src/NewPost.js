import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import PostForm from "./PostForm";

export default class NewPost extends Component {
  render() {
    return (
      <div>
        <h2>new post</h2>
        <Mutation mutation={NEW_POST}>
          {createPost => <PostForm onSubmit={createPost} />}
        </Mutation>
      </div>
    );
  }
}

const NEW_POST = gql`
  mutation addPost($title: String!, $body: String!) {
    createPost(data: { status: PUBLISHED, title: $title, body: $body }) {
      title
      body
      id
    }
  }
`;
