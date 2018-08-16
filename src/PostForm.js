import React, { Component } from "react";

export default class PostForm extends Component {
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
    const { onSubmit } = this.props;
    const { title, body } = this.state;
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          onSubmit({
            variables: {
              title,
              body
            }
          })
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
    );
  }
}
