import React from "react";
import { render, screen } from "@testing-library/react";
import{Genre} from "./Genre";
import userEvent from "@testing-library/user-event";


describe("Genre Component tests", () => {
    test("There is a select box", () => {
        render(
            <Genre/>
        );
        expect(screen.getByRole("combobox")).toBeInTheDocument();
    });
    test("The answer is initially All", () => {
        render(
            <Genre/>
        );
        expect(screen.getByText(/All/i)).toBeInTheDocument();
    });
    test("Can choose a different genre", () => {
        render(
            <Genre
            // genreList={["Action", "Adventure", "Animation", "Comedy", "Coming-of-Age","Drama","Dystopian","Fantasy","Fiction","Horror","Musical","Psychological","Romance","Sci-Fi","Superhero","Supernatural","Thriller"]}
            />
        );
        const select = screen.getByRole("combobox");
        userEvent.selectOptions(select, "Action");
        expect(screen.getByText(/Action/i)).toBeInTheDocument();
        expect(screen.queryByText(/All/i)).not.toBeInTheDocument();
    });
    test("Can choose one genre, then go to another", () => {
        render(
            <Genre
            // genreList={["Action", "Adventure", "Animation", "Comedy", "Coming-of-Age","Drama","Dystopian","Fantasy","Fiction","Horror","Musical","Psychological","Romance","Sci-Fi","Superhero","Supernatural","Thriller"]}
            />
        );
        const select = screen.getByRole("combobox");
        userEvent.selectOptions(select, "Action");
        expect(screen.getByText(/Action/i)).toBeInTheDocument();
        expect(screen.queryByText(/All/i)).not.toBeInTheDocument();
        userEvent.selectOptions(select, "Animation");
        expect(screen.getByText(/Animation/i)).toBeInTheDocument();
        expect(screen.queryByText(/All/i)).not.toBeInTheDocument();
    });
    test("Can go from one genre back to All", () => {
        render(
            <Genre
            // genreList={["Action", "Adventure", "Animation", "Comedy", "Coming-of-Age","Drama","Dystopian","Fantasy","Fiction","Horror","Musical","Psychological","Romance","Sci-Fi","Superhero","Supernatural","Thriller"]}
            />
        );
        const select = screen.getByRole("combobox");
        userEvent.selectOptions(select, "Action");
        expect(screen.getByText(/Action/i)).toBeInTheDocument();
        expect(screen.queryByText(/All/i)).not.toBeInTheDocument();
        userEvent.selectOptions(select, "All");
        expect(screen.getByText(/All/i)).toBeInTheDocument();
        expect(screen.queryByText(/Action/i)).not.toBeInTheDocument();
    });
});