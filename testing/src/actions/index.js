import axios from "axios";
import { save_comment, fetch_comments } from "./types";

export function saveComment(comment) {
  return {
    type: save_comment,
    payload: comment
  };
}

export function fetchComments() {
  const response = axios.get("http://jsonplaceholder.typicode.com/comments");

  return {
    type: fetch_comments,
    payload: response
  };
}
