import React from "react";
import { render, screen } from "@testing-library/react";
import { MultipleChoiceQuestion } from "./MultipleChoiceQuestion";
import userEvent from "@testing-library/user-event";

describe("MultipleChoiceQuestion Component tests", () => {
    test("There is a select box", () => {
        render(
            <MultipleChoiceQuestion
                expectedAnswer="2"
                options={["1", "2", "3"]}
            />
        );
        expect(screen.getByRole("combobox")).toBeInTheDocument();
    });
    test("The answer is initially incorrect", () => {
        render(
            <MultipleChoiceQuestion
                expectedAnswer="2"
                options={["1", "2", "3"]}
            />
        );
        expect(screen.getByText(/❌/i)).toBeInTheDocument();
        expect(screen.queryByText(/✔️/i)).not.toBeInTheDocument();
    });
    test("Can choose the correct answer", () => {
        render(
            <MultipleChoiceQuestion
                expectedAnswer="2"
                options={["1", "2", "3"]}
            />
        );
        const select = screen.getByRole("combobox");
        userEvent.selectOptions(select, "2");
        expect(screen.getByText(/✔️/i)).toBeInTheDocument();
        expect(screen.queryByText(/❌/i)).not.toBeInTheDocument();
    });
    test("Can choose the correct answer and then incorrect", () => {
        render(
            <MultipleChoiceQuestion
                expectedAnswer="2"
                options={["1", "2", "3"]}
            />
        );
        const select = screen.getByRole("combobox");
        userEvent.selectOptions(select, "2");
        expect(screen.getByText(/✔️/i)).toBeInTheDocument();
        expect(screen.queryByText(/❌/i)).not.toBeInTheDocument();
        userEvent.selectOptions(select, "3");
        expect(screen.getByText(/❌/i)).toBeInTheDocument();
        expect(screen.queryByText(/✔️/i)).not.toBeInTheDocument();
    });
    test("Can start off initially correct", () => {
        render(
            <MultipleChoiceQuestion
                expectedAnswer="Alpha"
                options={["Alpha", "Beta", "Gamma"]}
            />
        );
        const select = screen.getByRole("combobox");
        userEvent.selectOptions(select, "Alpha");
        expect(screen.getByText(/✔️/i)).toBeInTheDocument();
        expect(screen.queryByText(/❌/i)).not.toBeInTheDocument();
    });
    test("One more test of choosing the right answer", () => {
        render(
            <MultipleChoiceQuestion
                expectedAnswer="World"
                options={["Hello", "World"]}
            />
        );
        expect(screen.getByText(/❌/i)).toBeInTheDocument();
        expect(screen.queryByText(/✔️/i)).not.toBeInTheDocument();
        const select = screen.getByRole("combobox");
        userEvent.selectOptions(select, "World");
        expect(screen.getByText(/✔️/i)).toBeInTheDocument();
        expect(screen.queryByText(/❌/i)).not.toBeInTheDocument();
    });
});
