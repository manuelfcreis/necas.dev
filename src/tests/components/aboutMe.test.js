import React from "react";
import AboutMe from "../../components/aboutMe";
import { shallow } from "enzyme";

it("renders correctly", () => {
  const element = shallow(<AboutMe />);
  expect(element).toMatchSnapshot();
});
