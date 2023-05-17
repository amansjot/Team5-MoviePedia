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


export function Users(): JSX.Element {
    const USERS = [
        "Sakhee",
        "Aman",
        "Heni",
        "Julia",
        "Priya"
    ];


    const userStr = localStorage.getItem("users") || USERS.join(",");

    const allUsers = userStr.split(",");

    function selectUser(event: React.ChangeEvent<HTMLSelectElement>){
        localStorage.setItem("user", event.target.value);
    }


    return (
        <div>
            <Heading size="xl"> Select a User </Heading><br/>
            <Center>
                <Select w="200px" borderColor={"black"} _hover={{ borderColor: "black" }} onChange={(event) => selectUser(event)}>
                    { allUsers.map((user: string, key: number) => {
                        return (
                            <option value={user} key={key}>{user}</option>
                        );
                    }) }
                </Select>
            </Center><br/>
        </div>

    );
}