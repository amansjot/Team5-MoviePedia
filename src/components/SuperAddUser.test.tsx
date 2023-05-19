import React from "react";
import { render, screen } from "@testing-library/react";
import{SuperAddUser} from "./SuperAddUser";
import userEvent from "@testing-library/user-event";


describe("SuperAddUser Component tests", () => {
    test("There is a text box", () => {
        render(
            <SuperAddUser/>
        );
        const inputBox = screen.getByRole("textbox");
        expect(inputBox).toBeInTheDocument();    
    });
    test("There are no new users", () => {
        render(
            <SuperAddUser/>
        );
        expect(
            screen.getByText(/Confirm New User:/i)
        ).toBeInTheDocument();
    });
    test("There are two buttons", () => {
        render(
            <SuperAddUser/>
        );
        const a = screen.queryAllByRole("button");
        expect(a).toHaveLength(2);    
    });
    test("Editing the textbox adds a user", () => {
        render(
            <SuperAddUser/>
        );
        const nameBox = screen.getByRole("textbox");
        userEvent.type(nameBox, "Ada Lovelace");
        const gain = screen.getByRole("button", { name: /Add/i });
        gain.click();
        expect(
            screen.getByText(/Confirm New User: Ada Lovelace/i)
        ).toBeInTheDocument();
    });
    test("Editing the textbox removes a user", () => {
        render(
            <SuperAddUser/>
        );
        const nameBox = screen.getByRole("textbox");
        userEvent.type(nameBox, "Ada Lovelace");
        const gain = screen.getByRole("button", { name: /Add/i });
        gain.click();
        userEvent.type(nameBox, "Ada Lovelace");
        const lose = screen.getByRole("button", { name: /Remove/i });
        gain.click();
        expect(
            screen.getByText(/Confirm New User:/i)
        ).toBeInTheDocument();
    });
});