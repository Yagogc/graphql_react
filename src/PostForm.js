import React, { Component } from "react";

export default class PostForm extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="title" />
        <textarea name="" id="" cols="30" rows="10" />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
