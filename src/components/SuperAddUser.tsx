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
    Divider,
    Flex,
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
            <Heading size="xl"> Add or Remove User </Heading>
            <br/>
            <div>
                <Flex justifyContent="center">
                    <FormControl w="50%">
                        <Input
                            bg="white" borderColor={"black"} _hover={{ borderColor: "black" }}
                            placeholder="Type the User's name here"
                            value={new_user}
                            onChange={set_new_user}
                        />
                    </FormControl>
                    <Button colorScheme="green" mx="2" onClick={() => localStorage.setItem("users", (localStorage.getItem("users") || USERS.join(",")) + "," + new_user)}>Add</Button>

                    <Button colorScheme="red" onClick={() => localStorage.setItem("users", USERS.filter((e,i) => e!== new_user).join(","))}>Remove</Button>
                </Flex>
            </div>
            <Heading size="s">Last User: {new_user}</Heading>
            <Center mt="5" mb="8">
                <Divider border="1px solid #333" my="auto" w="60%"></Divider>
            </Center>
            <br/>
        </div>
    );
}

// get local storage using get item (thatll be a strng)
// split that into list 
// remove list item (list.remove)
// and then join the list back together 
// set the local storage again 
// pass in the name 