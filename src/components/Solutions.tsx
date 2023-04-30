import React, { useState } from "react";
import { FormControl, FormLabel, Heading, Input, Select } from "@chakra-ui/react";

export function Solutions(): JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    const [soln, setSoln] =  useState<JSX.Element>();

    function solution(event: React.ChangeEvent<HTMLSelectElement>){
        if(event.target.value === "weather"){
            setSoln(<div style={{"textAlign": "left", "margin": "0 10%"}}>
                <div>Move indoors to a low level and secure interior space. Stay away from windows/glass walls. Monitor weather updates on television/radio.

                </div><br/>
                <div>
                    <b>Steps:</b><br/>
                    <ol>
                        <li>If you do not have a tornado safe room or storm shelter, the safest place may be a small, interior, windowless room such as a closet or bathroom on the lowest level of the structure.
                        </li>
                        <li>Conserve your cell phone battery by reducing the brightness of your screen, placing your phone in “airplane” mode, and closing unnecessary apps that you do not need.

                        </li>
                        <li>Have an emergency supply kit on hand

                        </li>
                        <li>Call 911 for emergencies or call ​​the non-emergency: 302-831-2117

                        </li>
                    </ol>
                </div>
            </div>);
        }

        if (event.target.value === "sa") {
            setSoln(<div style={{"textAlign": "left", "margin": "0 10%"}}>
                <div>UD’s Sexual Offense Support program provides crisis support and victim advocacy 24/7 by calling (302)831-1001 and pressing “1”.


                </div><br/>
                <div>
                    <b>Steps:</b><br/>
                    <ol>
                        <li>Call 911 for emergencies or call ​​the non-emergency: 302-831-2117

                        </li>
                        <li>UD’s Sexual Offense Support program provides crisis support and victim advocacy 24/7 by calling (302)831-1001 and pressing “1”. 


                        </li>
                        <li>Look for any behaviors since it can take many forms—including experiences that don’t involve physical contact, such as verbal sexual harassment and stalking. It also includes sexual acts that occur under the influence of alcohol or drugs, or instances where a person was pressured to consent.


                        </li>
                        <li>Make use of security escorts or safe walks, and consider attending counseling sessions or accessing sexual assault services.


                        </li>
                    </ol>
                </div>
            </div>);
        }

        if(event.target.value === "theft"){
            setSoln(<div style={{"textAlign": "left", "margin": "0 10%"}}>
                <div>The University of Delaware Police Department is investigating a report of theft in Louis L. Redding Hall. Report any suspicious activity. 
                </div><br/>
                <div>
                    <b>Steps:</b><br/>
                    <ol>
                        <li>Ensure all personal items are in a secure location, label belongings, and avoid leaving things unattended.
                        </li>
                        <li>Always lock residential doors and windows. 
                        </li>
                        <li>Avoid allowing people into the building.
                        </li>
                        <li>Call 911 for emergencies or call ​​the non-emergency: 302-831-2117
                        </li>
                    </ol>
                </div>
            </div>);
        }

        if(event.target.value === "fire"){
            setSoln(<div style={{"textAlign": "left", "margin": "0 10%"}}>Solution coming soon!</div>);
        }

        if(event.target.value === "shooting"){
            setSoln(<div style={{"textAlign": "left", "margin": "0 10%"}}>
                <div>Stay indoors, avoid being approached by strangers, walk in groups.</div><br/>
                <div>
                    <b>Steps:</b><br/>
                    <ol>
                        <li>Evacuate the area and leave belongings behind. Call police when in a safe area (or press “Big Blue Button”).</li>
                        <li>If evacuation is not possible, find a place out of view to hide and provide protection with nearby objects.</li>
                        <li>Silence all electronics and remain quiet.</li>
                        <li>Remain hidden until notified that it is safe to come out.
                            <ol type='a'>
                                <li>Always ensure it is the police, an active shooter may try to lure you out.</li>
                            </ol>
                        </li>
                        <li>As a last resort, attempt to take the active shooter down. When the shooter is at close range and you cannot flee, your chance of survival is much greater if you try to incapacitate him/her.</li>
                        <li>Call 911 for emergencies or call the non-emergency to report any incidents 302-831-2117</li>
                    </ol>
                    <br/>
                    <b>Indoors:</b><br/>
                    <ol>
                        <li>If you are in a hallway, get into a room and secure the door, close blinds, and turn off lights.</li>
                        <li>If possible, press the “Big Blue Button” to report the incident to the police. Immediately silence the device. </li>
                        <li>As a last resort, attempt to take the active shooter down. When the shooter is at close range and you cannot flee, your chance of survival is much greater if you try to incapacitate him/her.</li>
                    </ol>
                    <br/>
                    <b>Outdoors:</b><br/>
                    <ol>
                        <li>Find the nearest building and lock yourself inside. </li>
                        <li>If you cannot find a building, continue to flee away from the sounds of shots and report the incident to the police when safe. </li>
                    </ol>
                </div>
            </div>);
        }

    }


    return (
        <div>
            <Heading size="lg">Unsure what to do in an emergency situation? No worries!</Heading>
            <br/>
            <FormControl>
                <FormLabel>What Kind of Alert Did You Recieve? </FormLabel>
                <Select placeholder='Select type' onChange={(event) => solution(event)}>
                    <option value = 'weather'>Severe Weather</option>
                    <option value = 'shooting'>Shooting</option>
                    <option value = 'theft'>Theft</option>
                    <option value = 'sa'>Sexual Assault</option>
                    <option value = 'fire'>Fire / Arson</option>
                </Select>
            </FormControl>
            {/* <FormControl>
                <FormLabel> What Kind of Alert Did You Recieve?</FormLabel>
                <Input type = 'genre' value = {answer} onChange = {updateAnswer}/>
            </FormControl> */}
            <br/>
            <div> {soln} </div>
        </div>
    );
}
