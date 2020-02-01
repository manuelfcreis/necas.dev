import React from "react";
import menuWithRouter, { Menu } from "../../../components/shared/menu";
import { BrowserRouter as Router } from "react-router-dom";
import { shallow } from "enzyme";

it("renders correctly", () => {
  const element = shallow(
    <Router>
      <menuWithRouter
        positions={{ x: 50, y: 50 }}
        location={{ pathname: "/" }}
      />
    </Router>
  );
  expect(element).toMatchSnapshot();
});

it("renders correctly", () => {
  const element = shallow(
    <Router>
      <menuWithRouter
        positions={{ x: 50, y: 50 }}
        location={{ pathname: "about" }}
      />
    </Router>
  );
  expect(element).toMatchSnapshot();
});

it("renders correctly", () => {
  const element = shallow(
    <Router>
      <menuWithRouter
        positions={{ x: 50, y: 50 }}
        location={{ pathname: "blog" }}
      />
    </Router>
  );
  expect(element).toMatchSnapshot();
});

it("renders correctly", () => {
  const element = shallow(
    <Menu positions={{ x: 50, y: 50 }} location={{ pathname: "about" }} />
  );
  expect(element).toMatchSnapshot();
});
