import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class CommentBox extends Component {
  state = {
    comment: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.saveComment(this.state.comment);

    this.setState({ comment: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Adicionar um comentário</h4>
          <textarea
            name="comment"
            onChange={this.handleChange}
            value={this.state.comment}
          />
          <div>
            <button type="submit">Enviar Comentário</button>
          </div>
        </form>
        <button className="fetch-comments" onClick={this.props.fetchComments}>
          Fetch Comentários
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(CommentBox);
