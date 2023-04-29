import React from "react";
import new_logo from "./logo.svg";
import "./App.css";
import { Center, Container, Divider, Heading, ListItem, UnorderedList } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import {BlueButton} from "./components/BlueButton";
import {Solutions} from "./components/Solutions";
import { RecentAlerts } from "./components/RecentAlerts";

function App() {
    return (
        <div className="App">
            <Heading mb={10}>
                <Center>
                    <img src="old-logo.png" width="150" alt="Hackathon Logo"/>
                </Center>
                <p>HAKSafety</p>
            </Heading>
            <br/>
            <br/>
            <div>
                <Center>
                    <BlueButton></BlueButton>
                </Center>
                <br/>
                <br/>
                <Center> 
                    <Solutions></Solutions>
                </Center>
                <br/>
                <br/>
                <Center> 
                    <RecentAlerts></RecentAlerts>
                </Center>
                <br/>
                <br/>


            </div>
            <Divider orientation='horizontal' borderWidth={3} borderColor = "#2055A1"/>
            <br/>
            <Container>                
                HAKSafety 2023
                <br/>
                Heni Patel, Aman Singh, Kambria Rogalski, Sakhee Desai
            </Container>
            <br/>
            <br/>
        </div>
    );
}

export default App;
