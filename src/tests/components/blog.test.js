import React from "react";
import Blog from "../../components/blog";
import { shallow } from "enzyme";

it("renders correctly", () => {
  const element = shallow(<Blog open={true} />);
  expect(element).toMatchSnapshot();
});
