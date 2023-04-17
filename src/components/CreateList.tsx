import React, { useState } from "react";
import { Button, SimpleGrid } from "@chakra-ui/react";

const MOVIES = [
    "Minions",
    "Toy Story",
    "Toy Story 2",
    "Toy Story 3",
    "Cars",
    "Aladin",
    "Tangled",
    "Frozen",
    "Wreck-It Ralph",
    "Moana",
];

export function CreateList(): JSX.Element {
    const [allOptions] = useState<string[]>(MOVIES);
    const [userList, setuserList] = useState<string[]>([]);

    function addMovieToList(newMovie: string) {
        setuserList([...userList, newMovie]);
    }

    function clearList() {
        setuserList([]);
    }

    return (
        <div>
            <h1>Create A List </h1>
            <SimpleGrid columns={2} spacing={10}>
                <div>
                    <div>
                        {allOptions.map((option: string) => (
                            <div key={option}>
                Add{" "}
                                <Button onClick={() => addMovieToList(option)}>{option}</Button>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <div>
                        <strong>My List:</strong>
                        {userList.map((movie: string) => (
                            <li key={movie}>{movie}</li>
                        ))}
                        <Button onClick={clearList}>Clear List</Button>
                    </div>
                </div>
            </SimpleGrid>
        </div>
    );
}
