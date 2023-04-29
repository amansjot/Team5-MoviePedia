import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Center, Container, Heading, ListItem, UnorderedList } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { CreateList } from "./components/CreateList";
import { WatchList } from "./components/WatchList";
import { RoleSelect } from "./components/RoleSelect";
import {BlueButton} from "./components/BlueButton";

function App() {
    return (
        <div className="App">
            <Heading mb={10}>
                <Center>
                    <img src="logo512.png" width="150" alt="Clapboard Logo"/>
                </Center>
                <p>MoviePedia</p>
            </Heading>
            <div>
                <b>Group Members: Sakhee Desai, Heni Patel, Priya Salako, Aman Singh, Kambria Rogalski </b>
                <Center>
                    <RoleSelect></RoleSelect>
                </Center>
            </div>
            <br/>
            <div>
                <b>Group Members: </b>
                <div style={{ width: "100px", margin: "0 auto" }}>
                </div>
            </div>
            <br/>
            <div>
                <BlueButton></BlueButton>
                <CreateList></CreateList>
                <WatchList></WatchList>
            </div>
        </div>
    );
}

export default App;
