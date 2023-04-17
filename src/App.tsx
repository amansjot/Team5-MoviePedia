import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Center, Container, Heading, ListItem, UnorderedList } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { CreateList } from "./components/CreateList";
import { WatchList } from "./components/WatchList";

function App() {
    return (
        <div className="App">
            <Heading mb={10}>
                <Center>
                    <img src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/200/external-film-cinema-kiranshastry-lineal-kiranshastry-3.png" alt="logo" />
                    {/* src={logo} */}
                </Center>
                <p>MoviePedia</p>
            </Heading>
            <Container>
                <b>Group Members: </b>
                Heni Patel, Sakhee Desai, Aman Singh, Priya Salako, Julia ONeill
            </Container>
            <div>
                <CreateList></CreateList>
                <WatchList></WatchList>
            </div>
        </div>
    );
}

export default App;
