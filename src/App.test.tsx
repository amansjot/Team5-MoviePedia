import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Central Movie List", () => {
    render(<App />);
    const linkElement = screen.getByText(/Central Movie List/i);
    expect(linkElement).toBeInTheDocument();
});
