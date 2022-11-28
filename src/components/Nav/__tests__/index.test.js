/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render, cleanup, getByTestId } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

import Nav from "..";

const categories = [
  { name: "portraits", description: "Portraits of people in my life" },
];

const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();

describe("Nav component", () => {
  it("renders", () => {
    render(
      <Nav
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
      />
    );
  });

  it("matches snapshot", () => {
    const { asFragment } = render(
      <Nav
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

describe("emoji is visible", () => {
  it("inserts emoji into h2", () => {
    //query to return the element containing emoji
    const { getByLabelText } = render(
      <Nav
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
      />
    );

    expect(getByLabelText("camera")).toHaveTextContent("📸");
  });
});

//link visibility
describe("links are visible", () => {
  it("inserts text into the links", () => {
    const { getByTestId } = render(
      <Nav
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
      />
    );
    expect(getByTestId("link")).toHaveTextContent("Oh Snap!");
    expect(getByTestId("about")).toHaveTextContent("About me");
  });
});

afterEach(cleanup);
