import React from "react";
import { render, screen } from "@testing-library/react";
import { ChooseTeam } from "./ChooseTeam";

describe("ChooseTeam Component tests", () => {
    beforeEach(() => {
        render(<ChooseTeam />);
    });
    test("The initial team is empty", () => {
        const currentTeam = screen.queryAllByRole("listitem");
        expect(currentTeam).toHaveLength(0);
    });
    test("There are 7 buttons.", () => {
        const adders = screen.queryAllByRole("button");
        expect(adders).toHaveLength(7);
    });
    test("Clicking first team member works", () => {
        const first = screen.queryAllByRole("button")[0];
        first.click();
        const currentTeam = screen.queryAllByRole("listitem");
        expect(currentTeam).toHaveLength(1);
        expect(currentTeam[0].textContent).toEqual(first.textContent);
    });
    test("Clicking the third team member works", () => {
        const third = screen.queryAllByRole("button")[2];
        third.click();
        const currentTeam = screen.queryAllByRole("listitem");
        expect(currentTeam).toHaveLength(1);
        expect(currentTeam[0].textContent).toEqual(third.textContent);
    });
    test("Clicking three team members works", () => {
        const [, second, third, , fifth] = screen.queryAllByRole("button");
        third.click();
        second.click();
        fifth.click();
        const currentTeam = screen.queryAllByRole("listitem");
        expect(currentTeam).toHaveLength(3);
        expect(currentTeam[0].textContent).toEqual(third.textContent);
        expect(currentTeam[1].textContent).toEqual(second.textContent);
        expect(currentTeam[2].textContent).toEqual(fifth.textContent);
    });
    test("Clearing the team works", () => {
        const [, second, third, fourth, fifth, , clear] =
            screen.queryAllByRole("button");
        third.click();
        second.click();
        fifth.click();
        let currentTeam = screen.queryAllByRole("listitem");
        expect(currentTeam).toHaveLength(3);
        expect(currentTeam[0].textContent).toEqual(third.textContent);
        expect(currentTeam[1].textContent).toEqual(second.textContent);
        expect(currentTeam[2].textContent).toEqual(fifth.textContent);
        clear.click();
        currentTeam = screen.queryAllByRole("listitem");
        expect(currentTeam).toHaveLength(0);
        fourth.click();
        currentTeam = screen.queryAllByRole("listitem");
        expect(currentTeam).toHaveLength(1);
        expect(currentTeam[0].textContent).toEqual(fourth.textContent);
    });
});
