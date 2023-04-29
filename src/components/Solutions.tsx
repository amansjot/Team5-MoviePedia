import React, { useState } from "react";
import { FormControl, FormLabel, Input, Select } from "@chakra-ui/react";

export function Solutions(): JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    const [soln, setSoln] =  useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }

    function solution(event: React.ChangeEvent<HTMLSelectElement>){
        if(event.target.value === "hurricane"){
            setSoln("Stay away from windows, tune into the local weather channel");
        }

        if(event.target.value === "theft"){
            setSoln("Secure your belongings, lock your dorm rooms");
        }
        if(event.target.value === "shooting"){
            setSoln("Stay indoors, avoid being approached by strangers, walk in groups");
        }

    }


    return (
        <div>
            <h3> HAKS - Advice </h3>
            <FormControl>
                <FormLabel>What Kind of Alert Did You Recieve? </FormLabel>
                <Select placeholder='Select type' onChange={(event) => solution(event)}>
                    <option value = 'hurricane'> Hurricane</option>
                    <option value = 'shooting'>Shooting</option>
                    <option value = 'theft'>Theft</option>
                    {/* <Input type = 'answer' value = {answer} onChange = {updateAnswer}/> */}
                </Select>
            </FormControl>
            {/* <FormControl>
                <FormLabel> What Kind of Alert Did You Recieve?</FormLabel>
                <Input type = 'genre' value = {answer} onChange = {updateAnswer}/>
            </FormControl> */}
            <div> {soln} </div>
        </div>
    );
}
