import React from "react";
import Card from "../../../components/shared/card";
import { shallow } from "enzyme";

it("renders correctly", () => {
  const element = shallow(<Card />);
  expect(element).toMatchSnapshot();
});
