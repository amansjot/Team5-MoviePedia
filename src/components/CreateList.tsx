import React, { useState } from "react";
import { Button, SimpleGrid } from "@chakra-ui/react";
import {Movie} from "./Movie";
import movies from "./movie.json";


// const MOVIES = [
//     "Minions",
//     "Toy Story",
//     "Toy Story 2",
//     "Toy Story 3",
//     "Cars",
//     "Aladdin",
//     "Tangled",
//     "Frozen",
//     "Wreck-It Ralph",
//     "Moana",
// ];


export function CreateList(): JSX.Element {
    const {masterlist}: Record<string, Movie[]> = movies as Record<string, Movie[]>;
    const [allOptions] = useState<Movie[]>(masterlist);
    const [usermainList, setusermainList] = useState<Movie[]>([]);
    const [userlistbyGenre, setuserGenreList] = useState<Movie[]>([]);

    function addMovieTomainList(newMovie: Movie) {
        if (!usermainList.includes(newMovie)){
            setusermainList([...usermainList, newMovie]);

        }
    }

    function clearmainList() {
        setusermainList([]);
    }

    function addMovieTogenreList(newMovie: Movie) {
        if (!userlistbyGenre.includes(newMovie)){
            setuserGenreList([...userlistbyGenre, newMovie]);

        }
    }

    function cleargenreList() {
        setuserGenreList([]);
    }

    return (
        <div>
            <h1>Create A List </h1>
            <SimpleGrid columns={2} spacing={10}>
                <div>
                    <div>
                        {allOptions.map((option: Movie) => (
                            <div key={option.name}>
                Add To Main
                                <Button onClick={() => addMovieTomainList(option)}>{option.name}</Button>
                            </div>
                        ))}
                    </div>
                    <div>
                        {allOptions.map((option: Movie) => (
                            <div key={option.name}>
                Add To Genre List
                                <Button onClick={() => addMovieTogenreList(option)}>{option.name}</Button>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <div>
                        <strong>My Main List:</strong>
                        {usermainList.map((movie: Movie) => (
                            <li key={movie.name}>{movie.name}</li>
                        ))}
                        <Button onClick={clearmainList}>Clear List</Button>
                    </div>
                    <div>
                        <strong>My Genre List:</strong>
                        {userlistbyGenre.map((movie: Movie) => (
                            <li key={movie.name}>{movie.name}</li>
                        ))}
                        <Button onClick={cleargenreList}>Clear List</Button>
                    </div>
                </div>
            </SimpleGrid>
        </div>
    );
}
