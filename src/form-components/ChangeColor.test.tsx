import React from "react";
import { render, screen } from "@testing-library/react";
import { ChangeColor } from "./ChangeColor";

describe("ChangeColor Component tests", () => {
    beforeEach(() => render(<ChangeColor />));
    test("There are at least 8 radio buttons and the colored box", () => {
        const radios = screen.getAllByRole("radio");
        expect(radios.length).toBeGreaterThanOrEqual(8);
        expect(screen.getByTestId("colored-box")).toBeInTheDocument();
    });
    test("Switching the color switches the displayed color.", () => {
        const radios: HTMLInputElement[] = screen.getAllByRole("radio");
        // Switch to first
        radios[0].click();
        let coloredBox = screen.getByTestId("colored-box");
        expect(coloredBox).toHaveTextContent(radios[0].value);
        expect(coloredBox).toHaveStyle({ backgroundColor: radios[0].value });
        // Switch to third
        radios[2].click();
        coloredBox = screen.getByTestId("colored-box");
        expect(coloredBox).toHaveTextContent(radios[2].value);
        expect(coloredBox).toHaveStyle({ backgroundColor: radios[2].value });
        // Switch to 8th
        radios[7].click();
        coloredBox = screen.getByTestId("colored-box");
        expect(coloredBox).toHaveTextContent(radios[7].value);
        expect(coloredBox).toHaveStyle({ backgroundColor: radios[7].value });
        // Switch back to first
        radios[0].click();
        coloredBox = screen.getByTestId("colored-box");
        expect(coloredBox).toHaveTextContent(radios[0].value);
        expect(coloredBox).toHaveStyle({ backgroundColor: radios[0].value });
    });
});
