import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { SuperAddMovie } from "./SuperAddMovie";
import userEvent from "@testing-library/user-event";
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

    test("There is a box for add movie",()=>{
        render(<SuperAddMovie/>);
        const newMovieBox = screen.getByRole("container");
        expect(newMovieBox).toBeInTheDocument();
    });
    test("Testing to see if the user inputs are there",()=>{
        render(
            <SuperAddMovie/>
        );
        const newMovieBox = screen.getByRole("container");
        expect(newMovieBox).toBeInTheDocument();
        expect(screen.getByText(/Movie Name/i)).toBeInTheDocument();
        expect(screen.getByText(/Year/i)).toBeInTheDocument();
        expect(screen.getByText(/Poster/i)).toBeInTheDocument();
        expect(screen.getByText(/Plot/i)).toBeInTheDocument();
        expect(screen.getByText(/Actors/i)).toBeInTheDocument();
        expect(screen.getByText(/Director/i)).toBeInTheDocument();
        expect(screen.getByText(/Genre/i)).toBeInTheDocument();
    });
    test("Testing to see is user input boxes appear",()=>{
        render(<SuperAddMovie/>);
        const newMovieBox = screen.getByRole("container");
        expect(newMovieBox).toBeInTheDocument();
        expect(screen.getByText(/Movie Name/i)).toBeInTheDocument();
        expect(screen.getByText(/Year/i)).toBeInTheDocument();
        expect(screen.getByText(/Poster/i)).toBeInTheDocument();
        expect(screen.getByText(/Plot/i)).toBeInTheDocument();
        expect(screen.getByText(/Actors/i)).toBeInTheDocument();
        expect(screen.getByText(/Director/i)).toBeInTheDocument();
        expect(screen.getByText(/Genre/i)).toBeInTheDocument();
    
    });

    test("Testing movie box input" ,()=>{
        render(<SuperAddMovie/>);
        const newMovieBox = screen.getByRole("container");
        expect(newMovieBox).toBeInTheDocument();
        const movieInput = screen.getByRole("textbox");
        userEvent.type(movieInput, "The Lego Movie");
        expect(screen.getByText(/The Lego Movie/i)).toBeInTheDocument();
        const yearInput= screen.getByRole("textbox");
        userEvent.type(yearInput, "2014");
        expect(screen.getByText(/2014 /i)).toBeInTheDocument();
        const posterInput = screen.getByRole("textbox");
        userEvent.type(posterInput, "poster.img");
        expect(screen.getByText(/poster.img /i)).toBeInTheDocument();
        const plotInput = screen.getByRole("textbox");
        userEvent.type(plotInput, "A lego man goes through a journey");
        expect(screen.getByText(/A lego man goes through a journey/i)).toBeInTheDocument();
        const actorInput = screen.getByRole("textbox");
        userEvent.type(actorInput, "Will Ferrell, Chris Pratt");
        expect(screen.getByText(/Will Ferrell, Chris Pratt /i)).toBeInTheDocument();
        const directorInput = screen.getByRole("textbox");
        userEvent.type(directorInput, "Dan Lin");
        expect(screen.getByText(/ Dan Lin/i)).toBeInTheDocument();
        const genreInput = screen.getByRole("textbox");
        userEvent.type(genreInput, "Comedy, Action");
        expect(screen.getByText(/Comedy, Action /i)).toBeInTheDocument();
    });
});
