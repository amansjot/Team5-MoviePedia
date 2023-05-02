import React, { useState } from "react";
import { FormControl, FormLabel, Heading, Input, Select } from "@chakra-ui/react";
import {CreateList} from "./CreateList";

export function Genre(): JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    const [soln, setSoln] =  useState<string>("");

    function solution(event: React.ChangeEvent<HTMLSelectElement>){
        if(event.target.value === "horror"){
            setSoln("");
        }
        if(event.target.value === "comedy"){
            setSoln("");
        }
        if(event.target.value === "rom-com"){
            setSoln("");
        }
        if(event.target.value === "action"){
            setSoln("");
        }


    }


    return (
        <div>
            <Heading size="lg">Personalized Lists </Heading>
            <br/>
            <FormControl>
                <FormLabel>Choose a genre to create a list for: </FormLabel>
                <Select placeholder='Select type' onChange={(event) => solution(event)}>
                    <option value = 'horror'>Horror</option>
                    <option value = 'comedy'>Comedy</option>
                    <option value = 'rom-com'>Rom-Com</option>
                    <option value = 'action'>Action</option>
                </Select>
            </FormControl>
            <br/>
            <div> {soln} </div>
        </div>
    );
}
