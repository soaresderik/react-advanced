import React from "react";
import { mount } from "enzyme";
import CommentBox from "../CommentBox";
import Root from "../../Root";

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterAll(() => {
  wrapper.unmount();
});

it("has a text area and a button", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(2);
});

describe("the text area", () => {
  let comment;
  beforeEach(() => {
    comment = "Novo Comentário";

    wrapped.find("textarea").simulate("change", {
      target: { value: comment, name: "comment" }
    });
  });

  it("has a text area that users can type in", () => {
    expect(wrapped.find("textarea").prop("value")).toEqual(comment);
  });

  it("when form is submitted, text area gets emptied", () => {
    wrapped.find("form").simulate("submit");
    expect(wrapped.find("textarea").prop("value")).toEqual("");
  });
});
