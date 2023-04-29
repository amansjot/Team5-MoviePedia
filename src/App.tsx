import React from "react";
import new_logo from "./logo.svg";
import "./App.css";
import { Center, Container, Heading, ListItem, UnorderedList } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { CreateList } from "./components/CreateList";
import { WatchList } from "./components/WatchList";
import { RoleSelect } from "./components/RoleSelect";
import {BlueButton} from "./components/BlueButton";
import {Solutions} from "./components/Solutions";

function App() {
    return (
        <div className="App">
            <Heading mb={10}>
                <Center>
                    <img src="logo.png" width="150" alt="Hackathon Logo"/>
                </Center>
                <p>HAKSafety</p>
            </Heading>
            <div>
                <b>Group Members: Sakhee Desai, Heni Patel, Aman Singh, Kambria Rogalski </b>
            </div>
            <br/>
            <br/>
            <div>
                <Center>
                    <BlueButton></BlueButton>
                </Center>
                <Center> 
                    <Solutions></Solutions>
                </Center>

            </div>
        </div>
    );
}

export default App;
