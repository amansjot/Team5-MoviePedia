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
        localStorage.setUser(event.target.value);
    }

    function set_user_list(new_user:string){
        localStorage.setUserList([...allUsers, new_user]);
    }



    return (
        <div>
            <br></br>
            <Heading> Add User </Heading>
            <div>
                <FormControl>
                    <Input
                        placeholder="Add your new User's name here"
                        value={new_user}
                        onChange={set_new_user}
                    />
                </FormControl>
                <Button onClick={() => localStorage.setItem("users", localStorage.getItem("users") || "") + "," + {new_user}}>Add</Button>
                {allUsers}
            </div>
        </div>
    );
}