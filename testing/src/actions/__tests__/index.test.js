import { saveComment } from "../";
import { save_comment } from "../types";

describe("saveComment", () => {
  it("has the correct type", () => {
    const action = saveComment();
    expect(action.type).toEqual(save_comment);
  });

  it("has the correct payload", () => {
    const payload = "Novo Comentário";
    const action = saveComment(payload);

    expect(action.payload).toEqual(payload);
  });
});
