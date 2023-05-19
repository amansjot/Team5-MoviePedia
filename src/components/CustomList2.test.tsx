import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { CustomList2 } from "./CustomList2";

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

describe("Custom List 2 Component tests", () => {
    beforeEach(() => {
        render(<CustomList2 name={USERS[0]}/>);
    });

    test("The user list is not initially visible", ()=>{
        const list = screen.getByTestId("userList");
        expect(list).toBeNull();
    });
    test("There is a custom list button",()=>{
        const listButton = screen.getByRole("button", {name: "First Custom List"});
        expect(listButton).toBeInTheDocument();
    });

    test("Testing to see if button reveals the list",()=>{
        const listButton = screen.getByRole("button", {name: "First Custom List"});
        fireEvent.click(listButton);
        const list = screen.getByTestId("userList");
        expect(list).toBeInTheDocument;
    });


    test("Testing to see if a movie is added to listt",()=>{
        const listButton = screen.getByRole("button", {name: "First Custom List"});
        fireEvent.click(listButton);
        const list = screen.getByTestId("userList");
        
    });
    /*
    test( ,()=>{

    });
*/

});