import React, { useState } from "react";
import { Button, SimpleGrid, FormControl, FormLabel, FormHelperText, Input, Heading, Container, HStack} from "@chakra-ui/react";


export function CreateList(): JSX.Element {
    const [usermainList, setusermainList] = useState<string[]>([]);
    const [userlistbyPreference, setuserPreferenceList] = useState<string[]>([]);
    const [preference, setPreference] = useState<string>("");

    function updateNewName(event: React.ChangeEvent<HTMLInputElement>) {
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
        <Container mt="-6">
            <Heading size="lg">Create a List</Heading>
            (not implemented)
            <div>
                {usermainList.map((movie: string) => (
                    <li key={movie}>{movie}</li>
                ))}
                <br/>
                <FormControl>
                    <HStack m="0 auto">
                        <Input bg="white" borderColor="black" _hover={{ borderColor: "black" }} placeholder="List Name (ex. Favorite Movies, Watch List, Horror List)"  type = 'text'/>
                        <Button border="1px solid black" pl="6" pr="6" borderColor="black" onClick={clearPreferenceList}>Create List</Button>
                    </HStack>
                </FormControl>
                <div>
                    {userlistbyPreference.map((movie: string) => (
                        <li key={movie}>{movie}</li>
                    ))}
                    {/* <Button onClick={clearPreferenceList}>Clear List</Button> */}
                </div>
            </div>
        </Container>
    );
}
