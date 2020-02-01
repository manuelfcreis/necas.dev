import React from "react";
import App from "../components/app";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const element = renderer.create(<App />).toJSON();
  expect(element).toMatchSnapshot();
});
