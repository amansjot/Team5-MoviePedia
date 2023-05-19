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
import "../CustomList1.css";

export function Users(): JSX.Element {
    const USERS = [
        { name: "Sakhee", visible: false},
        { name: "Aman", visible: false},
        { name: "Heni", visible: false},
        { name: "Julia", visible: false},
        { name: "Priya", visible: false},
    ];

    const [selectedPerson, setSelectedPerson] = useState(USERS[0].name);

    const userStr = localStorage.getItem("users") || USERS.map(a=>a.name).join(",");

    const allUsers = userStr.split(",");
    
    const [visible, setVisible] = useState<boolean>(false);


    function selectUser(event: React.ChangeEvent<HTMLSelectElement>){
        localStorage.setItem("user", event.target.value);
        setSelectedPerson(event.target.value);
        USERS[USERS.findIndex(x=> x.name===event.target.value)].visible;
        setVisible(true);
    }


    return (
        <div>
            <Heading size="xl"> Select a User </Heading><br/>
            <Center>
                <Select bg="white" borderColor={"black"} _hover={{ borderColor: "black" }} w="200px" onChange={(event) => selectUser(event)}>
                    {allUsers.map((user: string, key: number) => {
                        if (localStorage.getItem("user") == user) {
                            return (
                                <option selected value={user} key={key}>{user}</option>
                            );
                        } else {
                            return (
                                <option value={user} key={key}>{user}</option>
                            );
                        }
                    }) }
                </Select>
            </Center><br/>

            {selectedPerson && (<DragAndDrop key={selectedPerson} name = {selectedPerson} />) }
            <div className="otherLists">
                {selectedPerson &&  (<CustomList1 key={selectedPerson} name = {selectedPerson} />) }
                {selectedPerson && (<CustomList2 key={selectedPerson} name = {selectedPerson} />) }     
            </div>
        </div>
    );
}