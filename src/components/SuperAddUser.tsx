import React, { useState } from "react";
import {
    Button,
    SimpleGrid,
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    Heading,
    Select,
    Center,
} from "@chakra-ui/react";


export function SuperAddUser(): JSX.Element {
    const USERS = [
        "Sakhee",
        "Aman",
        "Heni",
        "Julia",
        "Priya"
    ];

    const [allUsers, setUserList] = useState<string[]>(USERS);
    const [new_user, setUser] = useState<string>("");

    function set_new_user(event: React.ChangeEvent<HTMLInputElement>) {
        setUser(event.target.value);
    }

    function set_user_list(new_user:string){
        setUserList([...allUsers, new_user]);
    }




    return (
        <div>
            <br></br>
            <Heading> Add or Remove User </Heading>
            <div>
                <FormControl>
                    <Input
                        placeholder="Type the User's name here"
                        value={new_user}
                        onChange={set_new_user}
                    />
                </FormControl>
                <Button onClick={() => localStorage.setItem("users", (localStorage.getItem("users") || USERS.join(",")) + "," + new_user)}>Add</Button>

                <Button onClick={() => localStorage.setItem("users", USERS.filter((e,i) => e!== new_user).join(","))}>Remove</Button>
            </div>
        </div>
    );
}

// get local storage using get item (thatll be a strng)
// split that into list 
// remove list item (list.remove)
// and then join the list back together 
// set the local storage again 
// pass in the name 