import { Card, CardBody, Stack, Heading, Divider, CardFooter, ButtonGroup, Button } from "@chakra-ui/react";
import React, { useState } from "react";

export function RecentAlerts(): JSX.Element {
    return (
        
        <div>
            <div>Stay up to date on the most recent alerts in the area, with descriptions and help embedded in each.</div>
            <br/>
            <Card
                m={2}
                direction={{ base: "column", sm: "row" }}
                overflow='hidden'
                variant='outline'
                style={{"width": "90vw", "border": "2px solid #ccc"}}
            >
                <a href="https://tinyurl.com/haksafetymap1" target="_blank" style={{"width": "365px", "height": "140px"}} rel="noreferrer">
                    <img
                        src='map1.png'
                        alt='Map 1'
                        style={{"width": "140px", "height": "140px", "borderRight": "2px solid #ccc"}}
                    />
                </a>

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
                m={2}
                direction={{ base: "column", sm: "row" }}
                overflow='hidden'
                variant='outline'
                style={{"width": "90vw", "border": "2px solid #ccc"}}
            >
                <a href="https://tinyurl.com/haksafetymap2" target="_blank" style={{"width": "345px", "height": "140px"}} rel="noreferrer">
                    <img
                        src='map2.png'
                        alt='Map 2'
                        style={{"width": "140px", "height": "140px", "borderRight": "2px solid #ccc"}}
                    />
                </a>

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
                m={2}
                direction={{ base: "column", sm: "row" }}
                overflow='hidden'
                variant='outline'
                style={{"width": "90vw", "border": "2px solid #ccc"}}
            >
                <a href="https://tinyurl.com/haksafetymap3" target="_blank" style={{"width": "255px", "height": "140px"}} rel="noreferrer">
                    <img
                        src='map3.png'
                        alt='Map 3'
                        style={{"width": "140px", "height": "140px", "borderRight": "2px solid #ccc"}}
                    />
                </a>

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
