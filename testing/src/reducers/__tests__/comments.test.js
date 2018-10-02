import commentsReducer from "../comments";
import { save_comment } from "../../actions/types";

it("handles actions of type save_comment", () => {
  const comment = "Novo Comentário";

  const action = {
    type: save_comment,
    payload: comment
  };

  const newState = commentsReducer([], action);

  expect(newState).toEqual([comment]);
});

it("handle action with unknown type", () => {
  const newState = commentsReducer([], { type: "asdfasdhas" });
  expect(newState).toEqual([]);
});
