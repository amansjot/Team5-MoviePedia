import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Center, Container, Heading, ListItem, UnorderedList } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { CreateList } from "./components/CreateList";
import { WatchList } from "./components/WatchList";
import { isLineBreak } from "typescript";

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
            </div>
        </div>
    );
}

export default App;
