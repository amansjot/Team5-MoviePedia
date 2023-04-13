import React from "react";
import { render, screen } from "@testing-library/react";
import { ShoveBox } from "./ShoveBox";

describe("ShoveBox Component tests", () => {
    beforeEach(() => {
        render(<ShoveBox />);
    });
    test("The MoveableBox is initially nearby.", () => {
        const box = screen.getByTestId("moveable-box");
        expect(box).toHaveStyle({ marginLeft: "10px" });
    });
    test("There is a button", () => {
        expect(screen.getByRole("button")).toBeInTheDocument();
    });
    test("Clicking the button moves the box.", () => {
        const shoveBox = screen.getByRole("button");
        shoveBox.click();
        expect(screen.getByTestId("moveable-box")).toHaveStyle({
            marginLeft: "14px"
        });
        shoveBox.click();
        expect(screen.getByTestId("moveable-box")).toHaveStyle({
            marginLeft: "18px"
        });
        shoveBox.click();
        expect(screen.getByTestId("moveable-box")).toHaveStyle({
            marginLeft: "22px"
        });
    });
});
