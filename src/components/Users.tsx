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

import { CustomList1 } from "./CustomList1";
import { CustomList2 } from "./CustomList2";
import { DragAndDrop } from "./DragAndDrop";


export function Users(): JSX.Element {
    const USERS = [
        "Sakhee",
        "Aman",
        "Heni",
        "Julia",
        "Priya"
    ];

    const [selectedPerson, setSelectedPerson] = useState(USERS[0]);

    const userStr = localStorage.getItem("users") || USERS.join(",");

    const allUsers = userStr.split(",");

    function selectUser(event: React.ChangeEvent<HTMLSelectElement>){
        localStorage.setItem("user", event.target.value);
        setSelectedPerson(event.target.value);

    }

    return (
        <div>
            <Heading size="xl"> Select a User </Heading><br/>
            <Center>
                <Select bg="white" borderColor={"black"} _hover={{ borderColor: "black" }} w="200px" onChange={(event) => selectUser(event)}>
                    { allUsers.map((user: string, key: number) => {
                        return (
                            <option value={user} key={key}>{user}</option>
                        );
                    }) }
                </Select>
            </Center><br/>
            
            {selectedPerson && (<DragAndDrop key={selectedPerson} name = {selectedPerson} />) }
            {selectedPerson &&  (<CustomList1 key={selectedPerson} name = {selectedPerson} />) }
            {selectedPerson && (<CustomList2 key={selectedPerson} name = {selectedPerson} />) } 
            
            
        </div>

    );
}