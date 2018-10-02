import React from "react";
import { mount } from "enzyme";

import CommentList from "../CommentList";
import Root from "../../Root";

let wrapped;

beforeEach(() => {
  const initialState = {
    comments: ["Comentário 1", "Comentário 2"]
  };
  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

it("create one LI per comment", () => {
  expect(wrapped.find("li").length).toEqual(2);
});

it("shows the text for each comment", () => {
  expect(wrapped.render().text()).toContain("Comentário 1");
  expect(wrapped.render().text()).toContain("Comentário 2");
});
