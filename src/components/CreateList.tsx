import React, { useState } from "react";
import {
    Button,
    SimpleGrid,
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    Heading,
} from "@chakra-ui/react";

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

export function CreateList(): JSX.Element {

    const [allOptions] = useState<string[]>(MOVIES);
    const [usermainList, setusermainList] = useState<string[]>([]);
    const [userlistbyPreference, setuserPreferenceList] = useState<string[]>([]);
    const [preference, setPreference] = useState<string>("");

    function updatePreference(event: React.ChangeEvent<HTMLInputElement>) {
        setPreference(event.target.value);
    }

    function addMovieTomainList(newMovie: string) {
        setusermainList([...usermainList, newMovie]);
    }

    function clearmainList() {
        setusermainList([]);
    }

    function addMovieToPreferenceList(newMovie: string) {
        if (!userlistbyPreference.includes(newMovie)) {
            setuserPreferenceList([...userlistbyPreference, newMovie]);
        }
    }

    function clearPreferenceList() {
        setuserPreferenceList([]);
    }
    return (
        <div>
            <Heading size="lg">Create a List</Heading>
            <SimpleGrid columns={2} spacing={10}>
                <div>
                    <div>
                        {allOptions.map((option: string) => (
                            <div key={option}>
                Add To Main
                                <Button onClick={() => addMovieTomainList(option)}>
                                    {option}
                                </Button>
                            </div>
                        ))}
                    </div>
                    <div>
                        {allOptions.map((option: string) => (
                            <div key={option}>
                Add To {preference} List
                                <Button onClick={() => addMovieToPreferenceList(option)}>
                                    {option}
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <div>
                        <strong>My Mai List:</strong>
                        {usermainList.map((movie: string) => (
                            <li key={movie}>{movie}</li>
                        ))}
                        <Button onClick={clearmainList}>Car List</Button>
                    </div>
                    <FormControl>
                        <FormLabel>
              List Name (ex. My Favorite Movies, Watch List, My Horror List)
                        </FormLabel>
                        <Input
                            type="preference"
                            value={preference}
                            onChange={updatePreference}
                        />
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
