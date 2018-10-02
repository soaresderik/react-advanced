import React, { Component } from "react";
import { connect } from "react-redux";

class CommentList extends Component {
  renderComments() {
    return this.props.comments.map((comment, idx) => {
      return <li key={idx}>{comment}</li>;
    });
  }
  render() {
    return (
      <div>
        <ul>{this.renderComments()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  comments: state.comments
});

export default connect(mapStateToProps)(CommentList);
