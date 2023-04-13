import React from "react";
import { render, screen } from "@testing-library/react";
import { Counter } from "./Counter";

describe("Counter Component tests", () => {
    beforeEach(() => {
        render(<Counter />);
    });
    test("The initial value is 0", () => {
        // We use `getByText` because the text MUST be there
        const valueText = screen.getByText(/0/i);
        expect(valueText).toBeInTheDocument();
    });
    test("The initial value is not 1", () => {
        // We use `queryByText` because the text might not be there
        const valueText = screen.queryByText(/1/i);
        expect(valueText).toBeNull();
    });

    test("There is a button named Add One", () => {
        const addOneButton = screen.getByRole("button", { name: /Add One/i });
        expect(addOneButton).toBeInTheDocument();
    });

    test("Clicking the button once adds one", () => {
        const addOneButton = screen.getByRole("button", { name: /Add One/i });
        addOneButton.click();
        const valueText = screen.getByText(/1/i);
        expect(valueText).toBeInTheDocument();
    });

    test("Clicking the button twice adds two", () => {
        const addOneButton = screen.getByRole("button", { name: /Add One/i });
        addOneButton.click();
        addOneButton.click();
        const valueText = screen.getByText(/2/i);
        expect(valueText).toBeInTheDocument();
    });
});
