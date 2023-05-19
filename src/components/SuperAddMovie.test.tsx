import React from "react";
import { render, screen } from "@testing-library/react";
import { SuperAddMovie } from "./SuperAddMovie";

/*
    test( ,()=>{
        render();
    
    });
*/


describe("Genre Component tests", () => {
    test("Testing to see is Super role select is there" ,()=>{
        render(
            <SuperAddMovie/>
        );
        expect(screen.getByRole("combobox")).toBeInTheDocument();
    });
    test("There is a box for edit movie",()=>{
        render(
            <SuperAddMovie/>
        );
        const movieBox = screen.getByTestId("edit-movie-box");
        expect(movieBox).toBeInTheDocument(); 
    });
    
});
