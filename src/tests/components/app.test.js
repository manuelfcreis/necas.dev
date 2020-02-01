import React from "react";
import App from "../../components/App";
import { shallow } from "enzyme";

it("renders correctly", () => {
  const element = shallow(<App />);
  expect(element).toMatchSnapshot();
});
