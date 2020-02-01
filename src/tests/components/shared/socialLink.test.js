import React from "react";
import SocialLink from "../../../components/shared/socialLink";
import { shallow } from "enzyme";

it("renders correctly", () => {
  const element = shallow(
    <SocialLink link="https://test.com" image="test.png" alt="test" />
  );
  expect(element).toMatchSnapshot();
});
