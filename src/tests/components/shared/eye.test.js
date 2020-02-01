import React from "react";
import Eye from "../../../components/shared/eye";
import { shallow } from "enzyme";

it("renders correctly", () => {
  const element = shallow(
    <Eye small={false} positions={{ x: 50, y: 50 }} hide={false} />
  );
  expect(element).toMatchSnapshot();
});

it("calculates eye position correctly", () => {
  const wrapper = shallow(
    <Eye small={false} positions={{ x: 50, y: 50 }} hide={false} />
  );

  expect(wrapper.instance().calculateEyePosition(1, 1, "top")).toEqual("80%");
});
