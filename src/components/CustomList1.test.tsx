import React from "react";
import { render, screen } from "@testing-library/react";
import { CustomList1 } from "./CustomList1";

/*
    test( ,()=>{

    });
*/
/*
describe("Custom List 1 Component tests", () => {
    beforeEach(() => {
        render(<CustomList1/>);
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
        listButton.click();
        const list = screen.getByTestId("userList");
        expect(list).toBeInTheDocument;
    });


    test("Testing to see if a movie is added to listt",()=>{
        const listButton = screen.getByRole("button", {name: "First Custom List"});
        listButton.click();
        const list = screen.getByTestId("userList");
        
    });
/*
    test( ,()=>{

    });
*/

//});
