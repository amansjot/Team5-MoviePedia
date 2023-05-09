import React, { useState } from "react";
import { Button, SimpleGrid, FormControl, FormLabel, FormHelperText, Input, Heading} from "@chakra-ui/react";


export function CreateList(): JSX.Element {
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
        if (!userlistbyPreference.includes(newMovie)){
            setuserPreferenceList([...userlistbyPreference, newMovie]);

        }
    }

    function clearPreferenceList() {
        setuserPreferenceList([]);
    }

    return (
        <div>
            <Heading size="lg">Personalized Lists </Heading>
            <div>
                <div>
                Add To {preference} List
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
        </div>
    );
}
