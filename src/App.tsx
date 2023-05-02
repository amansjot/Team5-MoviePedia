import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Center, Container, Heading, ListItem, UnorderedList, Radio, RadioGroup, Stack, HStack, Wrap, Divider } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { CreateList } from "./components/CreateList";
import { WatchList } from "./components/WatchList";
import { RoleSelect } from "./components/RoleSelect";
import { ViewIcon } from "@chakra-ui/icons";
import {Genre} from "./components/Genre";
import { MovieCards } from "./components/MovieCards";

function App() {
    const [selectedRole, setRole] = useState<string>("User");

    return (
        <div className="App">
            <HStack p={6} bg="blue.100" borderBottom="2px solid black" justify="space-between">
                <HStack>
                    <img src="logo512.png" width="50" alt="Clapboard Logo"/>
                    <Heading size="xl" pl={2}>MoviePedia</Heading>
                </HStack>
                <Stack>
                    <Heading as='h3' size="md"><ViewIcon/>&nbsp;&nbsp;Viewing as: {selectedRole}</Heading>
                    <RadioGroup onChange={setRole} value={selectedRole}>
                        <Stack direction='row'>
                            <Radio borderColor="black" colorScheme='red' pr={4} value='Super'>Super</Radio>
                            <Radio borderColor="black" colorScheme='red' pr={4} value='Admin'>Admin</Radio>
                            <Radio borderColor="black" colorScheme='red' pr={4} value='User'>User</Radio>
                        </Stack>
                    </RadioGroup>
                </Stack>
            </HStack>
            <br/>
            <Heading size="lg">Central Movie List</Heading>
            <br/>
            <MovieCards></MovieCards>
            <div>
                movies
            </div>
            <br/>
            <Divider borderWidth="2px"></Divider>
            <br/>
            <div>
                <CreateList></CreateList>
                <br/>
                <Genre></Genre>
                <br/>
                <Divider borderWidth="2px"></Divider>
                <br/>
                
                <WatchList></WatchList>
            </div>
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
