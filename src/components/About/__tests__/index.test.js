import React from "react";
import { render, cleanup } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

import About from "..";
const { asFragment } = render (<About />);

describe("About component", () => {
  //renders About test
  //test 1
  it("renders", () => {
    render(<About />);
  });
  //test 2
  it('matches snapshot DOM node structure', () => {
    expect(asFragment()).toMatchSnapshot();
  })
});

afterEach(cleanup);
