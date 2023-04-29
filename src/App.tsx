import React from "react";
import new_logo from "./logo.svg";
import "./App.css";
import { Center, Container, Divider, Heading, ListItem, Tab, TabList, TabPanel, TabPanels, Tabs, UnorderedList } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import {BlueButton} from "./components/BlueButton";
import {Solutions} from "./components/Solutions";
import { RecentAlerts } from "./components/RecentAlerts";

function App() {
    return (
        <div className="App">
            <div style={{"backgroundColor": "#bee3f8"}}>
                <Heading pt={8} pb={1} bg="#bee3f8">
                    <Center mb={3}>
                        <img src="old-logo.png" width="70" alt="Hackathon Logo"/>
                    </Center>
                    <p>HAKSafety</p>
                </Heading>
                <Container pb={5} bg="#bee3f8">Safety Reimagined.</Container>
            </div>
            <Divider orientation='horizontal' borderWidth={3} borderColor = "#2055A1"/>
            
            <Tabs pt="2" bg="white" align="center" variant='soft-rounded' colorScheme='blue' defaultIndex={1}>
                <TabList bg="white" pt="5">
                    <Tab>Recent Alerts</Tab>
                    <Tab>Blue Button</Tab>
                    <Tab>Alert Advice</Tab>
                </TabList>
                <TabPanels bg="white" pb="5">
                    <TabPanel>
                        <Center> 
                            <RecentAlerts></RecentAlerts>
                        </Center>
                    </TabPanel>
                    <TabPanel>
                        <Center>
                            <BlueButton></BlueButton>
                        </Center>
                    </TabPanel>
                    <TabPanel>
                        <Center> 
                            <Solutions></Solutions>
                        </Center>
                    </TabPanel>
                </TabPanels>
            </Tabs>
            <Divider orientation='horizontal' borderWidth={3}  borderColor = "#2055A1"/>
            <div style={{"backgroundColor": "#bee3f8", "padding": "30px 0 40px 0"}}>                
                <b>HAKSafety 2023</b><br/>
                <div>HenHacks UD</div><br/>
                Heni Patel, Aman Singh, Kambria Rogalski, Sakhee Desai
            </div>
        </div>
    );
}

export default App;
