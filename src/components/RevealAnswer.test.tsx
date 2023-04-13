import React from "react";
import { render, screen } from "@testing-library/react";
import { RevealAnswer } from "./RevealAnswer";

describe("RevealAnswer Component tests", () => {
    beforeEach(() => {
        render(<RevealAnswer />);
    });
    test("The answer '42' is not visible initially", () => {
        const answerText = screen.queryByText(/42/);
        expect(answerText).toBeNull();
    });
    test("There is a Reveal Answer button", () => {
        const revealButton = screen.getByRole("button", {
            name: /Reveal Answer/i
        });
        expect(revealButton).toBeInTheDocument();
    });
    test("Clicking Reveal Answer button reveals the '42'", () => {
        const revealButton = screen.getByRole("button", {
            name: /Reveal Answer/i
        });
        revealButton.click();
        const answerText = screen.getByText(/42/);
        expect(answerText).toBeInTheDocument();
    });
    test("Clicking Reveal Answer button twice hides the '42'", () => {
        const revealButton = screen.getByRole("button", {
            name: /Reveal Answer/i
        });
        revealButton.click();
        revealButton.click();
        const answerText = screen.queryByText(/42/);
        expect(answerText).toBeNull();
    });
});
