import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { GiveAttempts } from "./GiveAttempts";
import userEvent from "@testing-library/user-event";

describe("GiveAttempts Component tests", () => {
    beforeEach(() => {
        render(<GiveAttempts />);
    });

    test("There is a number entry box and two buttons", () => {
        expect(screen.getByRole("spinbutton")).toBeInTheDocument();
        expect(screen.getAllByRole("button")).toHaveLength(2);
    });

    test("There is are initially 3 attempts", () => {
        expect(screen.getByText(/3/i)).toBeInTheDocument();
    });

    test("You can use attempts", () => {
        const use = screen.getByRole("button", { name: /use/i });
        use.click();
        expect(screen.getByText(/2/i)).toBeInTheDocument();
        use.click();
        use.click();
        expect(screen.getByText(/0/i)).toBeInTheDocument();
        expect(use).toBeDisabled();
    });
    test("You can gain arbitrary attempts", () => {
        const gain = screen.getByRole("button", { name: /gain/i });
        const amountToGive = screen.getByRole("spinbutton");
        userEvent.type(amountToGive, "10");
        gain.click();
        expect(screen.getByText(/13/i)).toBeInTheDocument();
        userEvent.type(amountToGive, "100");
        gain.click();
        expect(screen.getByText(/113/i)).toBeInTheDocument();
    });
    test("Cannot gain blank amounts", () => {
        const gain = screen.getByRole("button", { name: /gain/i });
        const amountToGive = screen.getByRole("spinbutton");
        fireEvent.change(amountToGive, { target: { value: "" } });
        gain.click();
        expect(screen.getByText(/3/i)).toBeInTheDocument();
    });
});
