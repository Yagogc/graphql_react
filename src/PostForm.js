import React, { Component } from "react";
import PropTypes from "prop-types";

export default class PostForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onSuccess: PropTypes.func,
    post: PropTypes.object
  };
  static defaultProps = {
    onSuccess: () => null,
    post: {}
  };
  state = {
    id: this.props.post.id || "",
    title: this.props.post.title || "",
    body: this.props.post.body || ""
  };

  handleInput = e => {
    const formData = {};
    formData[e.target.name] = e.target.value;
    this.setState({ ...formData });
  };

  render() {
    const { onSubmit, onSuccess } = this.props;
    const { title, body, id } = this.state;
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          onSubmit({
            variables: {
              title,
              body,
              id
            }
          })
            .then(() => {
              onSuccess();
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
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    );
  }
}
