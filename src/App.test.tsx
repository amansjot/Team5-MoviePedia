import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders MoviePedia somewhere", ()=> {
  render(<App />);
  const linkElement = screen.getByText(/MoviePedia/i);
  expect(linkElement).toBeInTheDocument();
});
