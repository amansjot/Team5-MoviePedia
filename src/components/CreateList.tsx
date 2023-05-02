import React, { useState } from "react";
import { Button, Heading, SimpleGrid } from "@chakra-ui/react";
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
    const ml = movies.MOVIES; 
    const masterlist = ml.map(a=>({
        name:a.name, poster:a.poster, year:a.year, actors:a.actors, plot:a.plot, director:a.director, genre:a.genre, rating:a.rating
    }));
    const [allOptions] = useState<Movie[]>(masterlist);
    const [usermainList, setusermainList] = useState<Movie[]>([]);
    const [userlistbyGenre, setuserGenreList] = useState<Movie[]>([]);
    "";
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
            <Heading size="lg">Create A List </Heading>
            <SimpleGrid columns={2} spacing={10}>
                <div>
                    <div>
                        {allOptions.map((option: Movie) => (
                            <div key={option.name}>
                Add To Main&nbsp;&nbsp;&nbsp;&nbsp;
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
                    <br/>
                </div>
            </SimpleGrid>
        </div>
    );
}
