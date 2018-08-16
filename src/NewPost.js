import React, { Component } from "react";
import PostForm from "./PostForm";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

export default class NewPost extends Component {
  state = {
    title: "",
    body: ""
  };
  handleInput = e => {
    const formData = {};
    formData[e.target.name] = e.target.value;
    this.setState({ ...formData });
  };
  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h2>new post</h2>
        <Mutation mutation={NEW_POST} variables={{ title, body }}>
          {createdPost => (
            <form
              onSubmit={e => {
                e.preventDefault();
                createdPost()
                  .then(() => {
                    this.setState({
                      title: "",
                      body: ""
                    });
                  })
                  .catch(e => console.log(e));
              }}
            >
              <input
                name="title"
                type="text"
                placeholder="title"
                value={title}
                onChange={this.handleInput}
              />
              <textarea
                name="body"
                id=""
                cols="30"
                rows="10"
                placeholder="body"
                value={body}
                onChange={this.handleInput}
              />
              <button type="submit">Submit</button>
            </form>
          )}
        </Mutation>
        {/* <PostForm /> */}
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
