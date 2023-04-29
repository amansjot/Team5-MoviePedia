import { Card, CardBody, Stack, Heading, Divider, CardFooter, ButtonGroup, Button } from "@chakra-ui/react";
import React, { useState } from "react";

export function RecentAlerts(): JSX.Element {
    return (
        
        <div>
            <Card
                direction={{ base: "column", sm: "row" }}
                overflow='hidden'
                variant='outline'
                style={{"width": "90vw"}}
            >
                <img
                    src='https://images.unsplash.com/photo-1581955957646-b5a446b6100a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80'
                    alt='Gun'
                    style={{"width": "100px"}}
                />

                <Stack>
                    <CardBody>
                        <Heading size='md'>Crime Alert: Shooting</Heading>

                        <span style={{"width": "100px"}}>
                        Newark Police Department is investigating a report of shots fired in the area East Main Street/Choate Street. Avoid the area. Call UDPD 831-2222 or 911 if you need emergency assistance. Members of our community are reminded to be vigilant. If you see something, say something.  Be aware of your surroundings and use well-lit paths.  Travel in groups when possible and call 911 to report suspicious activity.  
                        </span>
                    </CardBody>

                </Stack>
            </Card>

            <Card
                direction={{ base: "column", sm: "row" }}
                overflow='hidden'
                variant='outline'
                style={{"width": "90vw"}}
            >
                <img
                    src='https://images.unsplash.com/photo-1453592256941-41c97c1d396a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1891&q=80'
                    alt='Just Say No'
                    style={{"width": "100px"}}
                />

                <Stack>
                    <CardBody>
                        <Heading size='md'>Crime Alert: Sexual Assault </Heading>

                        <span style={{"width": "50vw"}}>
                            The University of Delaware Police Department is investigating the report of a sexual assault that occurred on east campus.  Members of the community are reminded to be vigilant.  If you see something, say something.  UDPD is committed to assisting victims.  UD’s Sexual Offense Support program provides crisis support and victim advocacy 24/7 by calling (302)831-1001 and pressing “1”. 
                        </span>
                    </CardBody>

                </Stack>
            </Card>

            <Card
                direction={{ base: "column", sm: "row" }}
                overflow='hidden'
                variant='outline'
                style={{"width": "90vw"}}
            >
                <img
                    src='https://plus.unsplash.com/premium_photo-1664303499312-917c50e4047b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
                    alt='Hurrciane'
                    style={{"width": "100px"}}
                />

                <Stack>
                    <CardBody>
                        <Heading size='md'>Weather Alert: Tornado </Heading>

                        <span style={{"width": "50vw"}}>
                        A Tornado Warning for New Castle County until 7PM. Move indoors to a low level or secure interior space. Stay away from windows/glass walls. Monitor weather updates on television/radio. Refer to https://www1.udel.edu/safety/info/tornado.html for safety and related additional information.
                        </span>
                    </CardBody>

                </Stack>
            </Card>

        </div>
    );
}
