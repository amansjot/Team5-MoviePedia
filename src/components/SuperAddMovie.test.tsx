import React from "react";

import{Users} from "./Users";
import userEvent from "@testing-library/user-event";
import { render, fireEvent, screen } from "@testing-library/react";
import { SuperAddMovie } from "./SuperAddMovie";

describe("Adding Movies Component tests", () => {
    test("should update movie name when input value changes", () => {
        const { getByPlaceholderText } = render(<SuperAddMovie />);
        const nameInput = getByPlaceholderText("Insert Movie Name");

        fireEvent.change(nameInput, { target: { value: "New Movie" } });

        expect(nameInput).toBe("New Movie");
    });

    test("should update poster when input value changes", () => {
        const { getByPlaceholderText } = render(<SuperAddMovie />);
        const posterInput = getByPlaceholderText("Insert Poster");
    
        fireEvent.change(posterInput, { target: { value: "https://example.com/poster.jpg" } });
    
        expect(posterInput).toBe("https://example.com/poster.jpg");
    });
    
    test("renders component with default values", () => {
        render(<SuperAddMovie />);
        
        // Assert that the component renders with default values
        expect(screen.getByText("Add a New Movie")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Insert Movie Name")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Insert Poster")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Insert Year Published")).toBeInTheDocument();
        // Add more assertions for other input fields
    });

    test("should update year when input value changes", () => {
        const { getByPlaceholderText } = render(<SuperAddMovie />);
        const yearInput = getByPlaceholderText("Insert Year Published");
    
        fireEvent.change(yearInput, { target: { value: "2022" } });
    
        expect(yearInput).toBe("2022");
    });
    
    test("should return a movie object with the provided data", () => {
        const movie = addMovie("Movie Name", "https://example.com/poster.jpg", 2023, ["Actor 1", "Actor 2"], "Plot", "Director", ["Genre 1", "Genre 2"], 0);
    
        expect(movie).toEqual({
            name: "Movie Name",
            poster: "https://example.com/poster.jpg",
            year: 2023,
            actors: ["Actor 1", "Actor 2"],
            plot: "Plot",
            director: "Director",
            genre: ["Genre 1", "Genre 2"],
            rating: 0,
        });
    });

});


function addMovie(arg0: string, arg1: string, arg2: number, arg3: string[], arg4: string, arg5: string, arg6: string[], arg7: number) {
    throw new Error("Function not implemented.");
}
