import React from "react";
import { render, screen } from "@testing-library/react";
import { CycleHoliday } from "./CycleHoliday";

describe("CycleHoliday Component tests", () => {
    beforeEach(() => {
        render(<CycleHoliday />);
    });

    test("An initial holiday is displayed", () => {
        const initialHoliday = screen.getByText(/Holiday: (.*)/i);
        expect(initialHoliday).toBeInTheDocument();
    });

    test("There are two buttons", () => {
        const alphabetButton = screen.getByRole("button", {
            name: /Alphabet/i
        });
        const yearButton = screen.getByRole("button", {
            name: /Year/i
        });
        expect(alphabetButton).toBeInTheDocument();
        expect(yearButton).toBeInTheDocument();
    });

    test("Can cycle through 5 distinct holidays alphabetically", () => {
        const alphabetButton = screen.getByRole("button", {
            name: /Alphabet/i
        });
        const initialHoliday = screen.getByText(/Holiday ?[:)-](.*)/i);
        const states: string[] = [];
        for (let i = 0; i < 6; i++) {
            states.push(initialHoliday.textContent || "");
            alphabetButton.click();
        }
        const uniqueStates = states.filter((x, y) => states.indexOf(x) == y);
        expect(uniqueStates).toHaveLength(5);
        expect(states[0]).toEqual(states[5]);
    });

    test("Can cycle through 5 distinct holidays by year", () => {
        const yearButton = screen.getByRole("button", {
            name: /Year/i
        });
        const initialHoliday = screen.getByText(/Holiday ?[:)-](.*)/i);
        const states: string[] = [];
        for (let i = 0; i < 6; i++) {
            states.push(initialHoliday.textContent || "");
            yearButton.click();
        }
        const uniqueStates = states.filter((x, y) => states.indexOf(x) == y);
        expect(uniqueStates).toHaveLength(5);
        expect(states[0]).toEqual(states[5]);
    });
});
