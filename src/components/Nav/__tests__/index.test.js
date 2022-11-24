import React from "react";
import { render, cleanup, getByTestId } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

import Nav from "..";

describe("Nav component", () => {
  it("renders", () => {
    render(<Nav />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<Nav />);

    expect(asFragment()).toMatchSnapshot();
  });
});

describe("emoji is visible", () => {
  it("inserts emoji into h2", () => {
    //query to return the element containing emoji
    const { getByLabelText } = render(<Nav />);

    expect(getByLabelText("camera")).toHaveTextContent("📸");
  });
});

//link visibility
describe("links are visible", () => {
  it('inserts text into the links', () => {
    const { getByTestId } = render(<Nav />);
    expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
    expect(getByTestId('about')).toHaveTextContent('About me');
  });
});

afterEach(cleanup);
