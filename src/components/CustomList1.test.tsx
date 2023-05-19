import React from "react";
import { render, screen,fireEvent } from "@testing-library/react";
import { CustomList1 } from "./CustomList1";
import userEvent from "@testing-library/user-event";

/*
    test( ,()=>{

    });
*/

const USERS = [
    "Sakhee",
    "Aman",
    "Heni",
    "Julia",
    "Priya"
];

describe("Custom List 1 Component tests", () => {
    beforeEach(() => {
        render(<CustomList1 name={USERS[0]}/>);
    });

    test("The user list is not initially visible", ()=>{
        const list = screen.getByTestId("userList");
        expect(list).notToBeInTheDocument();
    });
    test("There is a custom list button",()=>{
        const listButton = screen.getByTestId("button");
        expect(listButton).toBeInTheDocument();
    });

    test("Testing to see if button reveals the list",()=>{
        const listButton = screen.getByTestId("button");
        fireEvent.click(listButton);
        const list = screen.getByTestId("userList");
        expect(list).toBeInTheDocument;
    });


    test("Testing to see if a movie is added to listt",()=>{
        const listButton = screen.getByTestId("button");
        fireEvent.click( listButton);
        const list = screen.getByTestId("userList");
        const movieCard= screen.getByTestId("movieCard");
        fireEvent.drop(movieCard);
        expect(movieCard).toBeInTheDocument();
    });
    /*
    test( ,()=>{

    });
*/

});
