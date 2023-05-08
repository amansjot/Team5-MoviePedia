import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Center, Container, Heading, ListItem, UnorderedList, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { CreateList } from "./components/CreateList";
import { WatchList } from "./components/WatchList";
import { RoleSelect } from "./components/RoleSelect";
import { SuperAddMovie } from "./components/SuperAddMovie";

function App() {
    const [selectedRole, setRole] = useState<string>("User");

    return (
        <div className="App">
            <div>{selectedRole}</div>
            <Heading mb={10}>
                <Center>
                    <img src="logo512.png" width="150" alt="Clapboard Logo"/>
                </Center>
                <p>MoviePedia</p>
            </Heading>
            <div>
                <Center>
                    <div>
                        <Heading as='h3' size="md">Change Role</Heading>
                        <RadioGroup onChange={setRole} value={selectedRole}>
                            <Stack direction='row'>
                                <Radio value='Super'>Super</Radio>
                                <Radio value='Admin'>Admin</Radio>
                                <Radio value='User'>User</Radio>
                            </Stack>
                        </RadioGroup>
                        <br/>
                        <div>
                Your Role:&nbsp;
                            <span data-testid="colored-box">
                                {selectedRole}
                            </span>
                        </div>
                        <br/>
                    </div>
                </Center>
            </div>
            <br/>
            <div>
                <b>Group Members: </b>
                <div style={{ width: "100px", margin: "0 auto" }}>
                    <ul>
                        <li>Heni Patel</li>
                        <li>Sakhee Desai</li>
                        <li>Aman Singh</li>
                        <li>Priya Salako</li>
                        <li>Julia O&lsquo;Neill</li>
                    </ul>
                </div>
            </div>
            <br/>
            <div>
                <CreateList></CreateList>
                <WatchList></WatchList>
                <SuperAddMovie></SuperAddMovie>
            </div>
        </div>
    );
}

export default App;
