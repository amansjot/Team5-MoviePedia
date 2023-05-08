import React, { useState } from "react";
import { FormControl, FormLabel, Heading, Input, Select } from "@chakra-ui/react";
import {CreateList} from "./CreateList";
import {moviesList} from "./MoviesList";

export function Genre(): JSX.Element {
    const [chosenGenre, setGenre] = useState<string>("Genre");

    const GENRES: string[][] = moviesList.map((x) => x.genre);
    let genreSet: Set<string> = new Set();
    for (let i = 0; i < GENRES.length; i++) {
        for (let j = 0; j < GENRES[i].length; j++) {
            genreSet.add(GENRES[i][j]);
        }
    }
    const genreList: string[] = Array.from(genreSet);


    // function solution(event: React.ChangeEvent<HTMLSelectElement>){
    //     if(event.target.value === "horror"){
    //         setSoln("");
    //     }
    //     if(event.target.value === "comedy"){
    //         setSoln("");
    //     }
    //     if(event.target.value === "rom-com"){
    //         setSoln("");
    //     }
    //     if(event.target.value === "action"){
    //         setSoln("");
    //     }


    // }

    function updateGenre (event: React.ChangeEvent<HTMLSelectElement>){
        setGenre(event.target.value);
    }

    return (
        <div>
            <Heading size="lg">Genre Lists </Heading>
            <br />
            <FormLabel>Choose a genre to create a list for: </FormLabel>
            <Select placeholder='Select type' onChange={(event) => updateGenre(event)}>
                { genreList.map((genre: string, key: number) => {
                    return (
                        <option value={genre} key={key}>{genre}</option>
                    );
                }) }
                {/* <option value='horror'>Horror</option>
                <option value='comedy'>Comedy</option>
                <option value='rom-com'>Rom-Com</option>
                <option value='action'>Action</option> */}
            </Select>
        </div>
    );
}

//                  <Select placeholder='Select type' onChange={(event) => solution(event)}>
//                      <option value = 'horror'>Horror</option>
//                      <option value = 'comedy'>Comedy</option>
//                      <option value = 'rom-com'>Rom-Com</option>
//                      <option value = 'action'>Action</option>
//                 </Select>
//              </FormControl>
//              <br/>
//              <div> {soln} </div>
//         </div>
//      );
//  } */
//  }