import { save_comment, fetch_comments } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case save_comment:
      return [...state, action.payload];
    case fetch_comments:
      const comments = action.payload.data.map(comment => comment.name);

      return [...state, ...comments];
    default:
      return state;
  }
}
