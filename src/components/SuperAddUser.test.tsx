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
            screen.getByText(/Last User: Ada Lovelace/i)
        ).toBeInTheDocument();
    });
    // test("Can choose one genre, then go to another", () => {
    //     render(
    //         <SuperAddUser
    //         />
    //     );
    //     const select = screen.getByRole("combobox");
    //     userEvent.selectOptions(select, "Action");
    //     expect(screen.getByText(/Action/i)).toBeInTheDocument();
    //     expect(screen.queryByText(/All/i)).not.toBeInTheDocument();
    //     userEvent.selectOptions(select, "Animation");
    //     expect(screen.getByText(/Animation/i)).toBeInTheDocument();
    //     expect(screen.queryByText(/All/i)).not.toBeInTheDocument();
    // });
    // test("Can go from one genre back to All", () => {
    //     render(
    //         <SuperAddUser
    //         />
    //     );
    //     const select = screen.getByRole("combobox");
    //     userEvent.selectOptions(select, "Action");
    //     expect(screen.getByText(/Action/i)).toBeInTheDocument();
    //     expect(screen.queryByText(/All/i)).not.toBeInTheDocument();
    //     userEvent.selectOptions(select, "All");
    //     expect(screen.getByText(/All/i)).toBeInTheDocument();
    //     expect(screen.queryByText(/Action/i)).not.toBeInTheDocument();
    // });
});