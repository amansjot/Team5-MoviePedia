import React from "react";
import { render, screen } from "@testing-library/react";
import { ColoredBox } from "./ColoredBox";

describe("ColoredBox Component tests", () => {
    beforeEach(() => {
        render(<ColoredBox />);
    });
    test("The ColoredBox is initially red.", () => {
        const box = screen.getByTestId("colored-box");
        expect(box).toHaveStyle({ backgroundColor: "red" });
    });
    test("There is a button", () => {
        expect(screen.getByRole("button")).toBeInTheDocument();
    });
    test("Clicking the button advances the color.", () => {
        const nextColor = screen.getByRole("button");
        nextColor.click();
        expect(screen.getByTestId("colored-box")).toHaveStyle({
            backgroundColor: "blue"
        });
        nextColor.click();
        expect(screen.getByTestId("colored-box")).toHaveStyle({
            backgroundColor: "green"
        });
        nextColor.click();
        expect(screen.getByTestId("colored-box")).toHaveStyle({
            backgroundColor: "red"
        });
    });
});
