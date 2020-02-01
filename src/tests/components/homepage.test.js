import React from "react";
import Homepage from "../../components/homepage";
import { shallow } from "enzyme";

it("renders correctly", () => {
  const element = shallow(
    <Homepage positions={{ x: 50, y: 50 }} small={false} />
  );
  expect(element).toMatchSnapshot();
});
