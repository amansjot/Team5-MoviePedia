import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { DragAndDrop } from "./DragAndDrop";

// describe("DragAndDrop", () => {
//     it("should add a movie to the movie list on drop event", () => {
//         render(<DragAndDrop />);

//         const movie = {
//             name: "Movie 1",
//             year: 2021,
//             director: "Director 1",
//         };

//         const dropEvent = new DragEvent("drop", {
//             dataTransfer: {
//                 getData: jest.fn().mockReturnValue(JSON.stringify(movie)),
//             },
//         });

//         fireEvent(screen.getByTestId("movie-list"), dropEvent);

//         expect(screen.getByText("Movie 1 (2021)")).toBeInTheDocument();
//     });

//     it("should delete a movie from the movie list", () => {
//         render(<DragAndDrop />);

//         const movieList = [
//             { name: "Movie 1", year: 2021, director: "Director 1" },
//             { name: "Movie 2", year: 2022, director: "Director 2" },
//         ];

//         const deleteButton = screen.getByLabelText("Delete");
//         fireEvent.click(deleteButton);

//         expect(screen.queryByText("Movie 1 (2021)")).not.toBeInTheDocument();
//         expect(screen.getByText("Movie 2 (2022)")).toBeInTheDocument();
//     });

//     it("should sort the movie list by title (A-Z)", () => {
//         render(<DragAndDrop />);

//         const sortSelect = screen.getByLabelText("Sort by:");
//         fireEvent.change(sortSelect, { target: { value: "title1" } });

//         const movieList = screen.getAllByRole("heading", { level: 2 });
//         const movieNames = movieList.map((movie) => movie.textContent);

//         expect(movieNames).toEqual(["Movie 1 (2021)", "Movie 2 (2022)"]);
//     });
// });
