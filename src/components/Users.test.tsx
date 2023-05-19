import React from "react";
import { render, screen } from "@testing-library/react";
import{Users} from "./Users";
import userEvent from "@testing-library/user-event";


describe("Genre Component tests", () => {
    test("There is a select box", () => {
        render(
            <Users/>
        );
        expect(screen.getByRole("combobox")).toBeInTheDocument();
    });
    test("The answer is initially Sakhee", () => {
        render(
            <Users/>
        );
        expect(screen.getByText(/Sakhee/i)).toBeInTheDocument();
    });
    test("Can choose a different person", () => {
        render(
            <Users
            // genreList={["Action", "Adventure", "Animation", "Comedy", "Coming-of-Age","Drama","Dystopian","Fantasy","Fiction","Horror","Musical","Psychological","Romance","Sci-Fi","Superhero","Supernatural","Thriller"]}
            />
        );
        const select = screen.getByRole("combobox");
        userEvent.selectOptions(select, "Aman");
        expect(screen.getByText(/Aman/i)).toBeInTheDocument();
        expect(screen.queryByText(/Sakhee/i)).not.toBeInTheDocument();
    });
    test("Can choose one person, then go to another", () => {
        render(
            <Users
            // genreList={["Action", "Adventure", "Animation", "Comedy", "Coming-of-Age","Drama","Dystopian","Fantasy","Fiction","Horror","Musical","Psychological","Romance","Sci-Fi","Superhero","Supernatural","Thriller"]}
            />
        );
        const select = screen.getByRole("combobox");
        userEvent.selectOptions(select, "Aman");
        expect(screen.getByText(/Aman/i)).toBeInTheDocument();
        expect(screen.queryByText(/Sakhee/i)).not.toBeInTheDocument();
        userEvent.selectOptions(select, "Julia");
        expect(screen.getByText(/Julia/i)).toBeInTheDocument();
        expect(screen.queryByText(/Aman/i)).not.toBeInTheDocument();
    });
    test("Can go from one person back to Sakhee", () => {
        render(
            <Users
            // genreList={["Action", "Adventure", "Animation", "Comedy", "Coming-of-Age","Drama","Dystopian","Fantasy","Fiction","Horror","Musical","Psychological","Romance","Sci-Fi","Superhero","Supernatural","Thriller"]}
            />
        );
        const select = screen.getByRole("combobox");
        userEvent.selectOptions(select, "Aman");
        expect(screen.getByText(/Aman/i)).toBeInTheDocument();
        expect(screen.queryByText(/Sakhee/i)).not.toBeInTheDocument();
        userEvent.selectOptions(select, "Sakhee");
        expect(screen.getByText(/Sakhee/i)).toBeInTheDocument();
        expect(screen.queryByText(/Aman/i)).not.toBeInTheDocument();
    });
});