import React, { useState } from "react";
import { Select } from "@chakra-ui/react";
import {moviesList} from "./MoviesList";

export function Genre(): JSX.Element {
    const [filter, setFilter] = useState<string>("Genre");

    const GENRES: string[][] = moviesList.map((x) => x.genre);
    let genreSet: Set<string> = new Set();
    for (let i = 0; i < GENRES.length; i++) {
        for (let j = 0; j < GENRES[i].length; j++) {
            genreSet.add(GENRES[i][j]);
        }
    }
    const genreList: string[] = Array.from(genreSet);
    genreList.sort();
    genreList.unshift("[All]");

    function filterGenre (event: React.ChangeEvent<HTMLSelectElement>){
        const genre: string = event.target.value; 
        setFilter(genre);
        if (genre != "[All]") {

        } else {

        }
    }

    return (
        <Select w="200px" borderColor={"black"} _hover={{ borderColor: "black" }} onChange={(event) => filterGenre(event)}>
            { genreList.map((genre: string, key: number) => {
                return (
                    <option value={genre} key={key}>{genre}</option>
                );
            }) }
        </Select>
    );
}
