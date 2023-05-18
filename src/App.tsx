import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Center, Container, Heading, ListItem, UnorderedList, Radio, RadioGroup, Stack, HStack, Wrap, Divider, Flex, Box } from "@chakra-ui/react";

import { Button } from "@chakra-ui/react";
import { CreateList } from "./components/newCreateList";
import { CustomList1 } from "./components/CustomList1";
import { CustomList2 } from "./components/CustomList2";
import { DragAndDrop } from "./components/DragAndDrop";
import { ViewIcon } from "@chakra-ui/icons";
import { MovieCards } from "./components/MovieCards";

/*
goes under drag and drop
<div>
                <CreateList></CreateList>
                <br/>
                <Genre></Genre>
                <br/>
                <Divider borderWidth="2px"></Divider>
                <br/>
            </div>
*/

import { SuperAddMovie } from "./components/SuperAddMovie";
import { SuperAddUser } from "./components/SuperAddUser";
import { Users } from "./components/Users";


function App() {
    const [selectedRole, setRole] = useState<string>(localStorage.getItem("role") || "User");
    const [users, setUsers] = useState<string[]>(["Super", "Admin", "User"]);
    // const [currUser, setCurrUser] = useState<string[]>(localStorage.getItem("users"));

    function selectUser(): JSX.Element{
        if (selectedRole == "User"){
            return (<Users></Users>);
        } else{
            return(<></>);
        }
    }

    function superAddUser(): JSX.Element {
        if (selectedRole == "Super") {
            return (<SuperAddUser></SuperAddUser>);
        } else {
            return (<></>);
        }
    }
    
    function superAddMovie(): JSX.Element {
        if (selectedRole == "Super" || selectedRole == "Admin") {
            return (<SuperAddMovie></SuperAddMovie>);
        } else {
            return (<></>);
        }
    }

    function createList(): JSX.Element {

        if (selectedRole == "User") {
            return (
                <div>
                    <Heading size="lg">Create Custom Lists</Heading>
                    <br/>
                    {/* <Flex>
                        <Box w="50%">
                            {/* <CustomList1 name={""}></CustomList1> */}
                        </Box>
                        <Box w="50%">
                            {/* <CustomList2></CustomList2> */}
                        </Box>
                    </Flex> */}
                    
                    <CustomList1></CustomList1>
                    <br/>
                    <CustomList2></CustomList2>
                    
                </div>);
        } else {
            return (<></>);
        }
    }

    function userList(): JSX.Element {
        if (selectedRole == "User") {
            return (<DragAndDrop></DragAndDrop>);
        } else {
            return (<></>);
        }
    }

    return (
        <div className="App">
            <HStack p={6} bg="blue.100" borderBottom="2px solid black" justify="space-between">
                <HStack>
                    <img src="logo512.png" width="50" alt="Clapboard Logo"/>
                    <Heading size="xl" pl={2}>MoviePedia</Heading>
                </HStack>
                <Stack>
                    <Heading as='h3' size="md"><ViewIcon/>&nbsp;&nbsp;Viewing as: {selectedRole}</Heading>
                    <RadioGroup onChange={role => {
                        localStorage.setItem("role", role);
                        setRole(role);
                        if (!users.includes(role)){
                            setUsers([...users, role]);
                        };
                    }} value={selectedRole}>
                        <Stack direction='row'>
                            {users.map((p: string) =>
                                <Radio key={p} borderColor="black" colorScheme='red' pr={4} value={p}>{p}</Radio>
                            )}
                        </Stack>
                    </RadioGroup>
                </Stack>
            </HStack>
            <br/>
            <Flex mt="5">
                <Box w="50%">
                    <Heading size="xl">Central Movie List</Heading>
                    <br/>
                    <MovieCards role={selectedRole}></MovieCards>
                </Box>
                <Box w="50%">
                    

                    <div>
                        {superAddUser()}
                        {superAddMovie()}
                    </div>
                    <div>
                        {selectUser()}
                        {userList()}
                        {createList()}
                    </div>
                </Box>
            </Flex>
            <br/><br/>
            <HStack mt="5" p={10} bg="blue.100" borderTop="2px solid black" justify="space-around">
                <Stack>
                    <div><b>MoviePedia 2023</b></div>
                    <div>
                Sakhee Desai, Julia O&lsquo;Neill, Heni Patel, Priya Salako, Aman Singh
                    </div>
                </Stack>
            </HStack>
        </div>
    );
}

export default App;
