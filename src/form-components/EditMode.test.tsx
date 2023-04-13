import React from "react";
import { render, screen } from "@testing-library/react";
import { EditMode } from "./EditMode";
import userEvent from "@testing-library/user-event";

describe("EditMode Component tests", () => {
    beforeEach(() => render(<EditMode />));
    test("There is one checkbox and no textboxes", () => {
        const switchButton = screen.getByRole("checkbox");
        expect(switchButton).toBeInTheDocument();
        expect(switchButton.parentElement).toHaveClass("form-switch");
        expect(screen.queryByRole("textbox")).not.toBeInTheDocument();
    });
    test("Initial text should be 'Your Name is a student'.", () => {
        expect(screen.getByText(/Your Name is a student/i)).toBeInTheDocument();
    });
    test("Can switch into Edit Mode", () => {
        const switchButton = screen.getByRole("checkbox");
        switchButton.click();
        expect(screen.getByRole("textbox")).toBeInTheDocument();
        expect(screen.getAllByRole("checkbox")).toHaveLength(2);
    });
    test("Editing the name and student status changes the text", () => {
        const switchButton = screen.getByRole("checkbox");
        switchButton.click();
        const nameBox = screen.getByRole("textbox");
        userEvent.type(nameBox, "Ada Lovelace");
        const studentBox = screen.getByRole("checkbox", { name: /student/i });
        studentBox.click();
        switchButton.click();
        expect(
            screen.getByText(/Ada Lovelace is not a student/i)
        ).toBeInTheDocument();
    });
    test("Different name, click student box twice changes the text", () => {
        const switchButton = screen.getByRole("checkbox");
        switchButton.click();
        const nameBox = screen.getByRole("textbox");
        userEvent.type(nameBox, "Alan Turing");
        const studentBox = screen.getByRole("checkbox", { name: /student/i });
        studentBox.click();
        studentBox.click();
        switchButton.click();
        expect(
            screen.getByText(/Alan Turing is a student/i)
        ).toBeInTheDocument();
    });
});
