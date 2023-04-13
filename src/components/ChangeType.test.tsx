import React from "react";
import { render, screen } from "@testing-library/react";
import { ChangeType } from "./ChangeType";

describe("ChangeType Component tests", () => {
    beforeEach(() => {
        render(<ChangeType />);
    });
    test("The initial type is Short Answer", () => {
        // We use `getByText` because the text MUST be there
        const typeText = screen.getByText(/Short Answer/i);
        expect(typeText).toBeInTheDocument();
    });
    test("The initial type is not Multiple Choice", () => {
        // We use `queryByText` because the text might not be there
        const typeText = screen.queryByText(/Multiple Choice/i);
        expect(typeText).toBeNull();
    });

    test("There is a button labeled Change Type", () => {
        const changeTypeButton = screen.getByRole("button", {
            name: /Change Type/i
        });
        expect(changeTypeButton).toBeInTheDocument();
    });

    test("Clicking the button changes the type.", () => {
        const changeTypeButton = screen.getByRole("button", {
            name: /Change Type/i
        });
        changeTypeButton.click();
        // Should be Multiple Choice
        const typeTextMC = screen.getByText(/Multiple Choice/i);
        expect(typeTextMC).toBeInTheDocument();
        // Should NOT be Short Answer
        const typeTextSA = screen.queryByText(/Short Answer/i);
        expect(typeTextSA).toBeNull();
    });

    test("Clicking the button twice keeps the type the same.", () => {
        const changeTypeButton = screen.getByRole("button", {
            name: /Change Type/i
        });
        changeTypeButton.click();
        changeTypeButton.click();
        // Should be Short Answer
        const typeTextSA = screen.getByText(/Short Answer/i);
        expect(typeTextSA).toBeInTheDocument();
        // Should NOT be Multiple Choice
        const typeTextMC = screen.queryByText(/Multiple Choice/i);
        expect(typeTextMC).toBeNull();
    });
});
