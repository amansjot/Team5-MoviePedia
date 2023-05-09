import React, { useState } from "react";
import { Button, SimpleGrid, FormControl, FormLabel, FormHelperText, Input, Heading} from "@chakra-ui/react";
import {Movie} from "./Movie";


const MOVIES = [
    "Minions",
    "Toy Story",
    "Toy Story 2",
    "Toy Story 3",
    "Cars",
    "Aladdin",
    "Tangled",
    "Frozen",
    "Wreck-It Ralph",
    "Moana",
];

export const [allOptions] = useState<string[]>(MOVIES);
export const [usermainList, setusermainList] = useState<string[]>([]);
export const [userlistbyPreference, setuserPreferenceList] = useState<string[]>([]);
export  const [preference, setPreference] = useState<string>("");

export function updatePreference(event: React.ChangeEvent<HTMLInputElement>) {
    setPreference(event.target.value);
}

export function addMovieTomainList(newMovie: string) {
    setusermainList([...usermainList, newMovie]);

}

export function clearmainList() {
    setusermainList([]);
}

export function addMovieToPreferenceList(newMovie: string) {
    if (!userlistbyPreference.includes(newMovie)){
        setuserPreferenceList([...userlistbyPreference, newMovie]);

    }
}

export function clearPreferenceList() {
    setuserPreferenceList([]);
}
export function CreateList(): JSX.Element {


    return (
        <div>
            <Heading size="lg">Personalized Lists </Heading>
            <SimpleGrid columns={2} spacing={10}>
                <div>
                    <div>
                        {allOptions.map((option: string) => (
                            <div key={option}>
                Add To Main
                                <Button onClick={() => addMovieTomainList(option)}>{option}</Button>
                            </div>
                        ))}
                    </div>
                    <div>
                        {allOptions.map((option: string) => (
                            <div key={option}>
                Add To {preference} List
                                <Button onClick={() => addMovieToPreferenceList(option)}>{option}</Button>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <div>
                        <strong>My Main List:</strong>
                        {usermainList.map((movie: string) => (
                            <li key={movie}>{movie}</li>
                        ))}
                        <Button onClick={clearmainList}>Clear List</Button>
                    </div>
                    <FormControl>
                        <FormLabel>What would you like to name your list? </FormLabel>
                        <Input type = 'preference' value = {preference} onChange = {updatePreference}/>
                    </FormControl>
                    <div>
                        <strong>My {preference} List:</strong>
                        {userlistbyPreference.map((movie: string) => (
                            <li key={movie}>{movie}</li>
                        ))}
                        <Button onClick={clearPreferenceList}>Clear List</Button>
                    </div>
                </div>
            </SimpleGrid>
        </div>
    );
}
