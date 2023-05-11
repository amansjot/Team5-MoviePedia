import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Center, Container, Heading, ListItem, UnorderedList, Radio, RadioGroup, Stack, HStack, Wrap, Divider, Flex, Box } from "@chakra-ui/react";
import { Button, SimpleGrid} from "@chakra-ui/react";
import { CreateList } from "./components/CreateList";
import { DragAndDrop } from "./components/DragAndDrop";
import { ViewIcon } from "@chakra-ui/icons";
import {Genre} from "./components/Genre";
import { MovieCards } from "./components/MovieCards";
import { useDrag, useDrop } from "react-dnd";
import { WatchList } from "./components/WatchList";
import { MainMovieList } from "./components/MainMovieList";
import { CustomMovieList } from "./components/CustomMovieList";

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

function App() {
    const [selectedRole, setRole] = useState<string>(localStorage.getItem("role") || "User");

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
                    }} value={selectedRole}>
                        <Stack direction='row'>
                            <Radio borderColor="black" colorScheme='red' pr={4} value='Super'>Super</Radio>
                            <Radio borderColor="black" colorScheme='red' pr={4} value='Admin'>Admin</Radio>
                            <Radio borderColor="black" colorScheme='red' pr={4} value='User'>User</Radio>
                        </Stack>
                    </RadioGroup>
                </Stack>
            </HStack>
            <br/>
            <Flex>
                <Box w="50%">
                    <Heading size="lg">Central Movie List</Heading>
                    <br/>
                    <MovieCards role={selectedRole}></MovieCards>
                </Box>
                <Box w="50%">
                    <CreateList></CreateList>
                    <br/>
                    <Genre></Genre>
                    <br/>
                    <Divider borderWidth="2px"></Divider>
                    <br/>
                    <DragAndDrop></DragAndDrop>
                    
                </Box>
            </Flex>
            <Divider borderWidth="2px"></Divider>
            <br/>
            
            <br/>
            <HStack p={10} bg="blue.100" borderTop="2px solid black" justify="space-around">
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
// function SuperSortList(): React.ReactNode {
//     throw new Error("Function not implemented.");
// }
