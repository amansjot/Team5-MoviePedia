import React, { useState } from "react";
import { Button, SimpleGrid, FormControl, FormLabel, FormHelperText, Input, Heading} from "@chakra-ui/react";
import {Movie} from "./Movie";

const MOVIES = [
    "Minions",
    "Toy Story",
    "Toy Story 2",
    "Toy Story 3",
    "Cars",
    "Aladdin",
    "Tangled",
    "Frozen",
    "Wreck-It Ralph",
    "Moana",
];

export function AdminList(): JSX.Element {
    const [newOptions] = useState<string[]>(MOVIES);
    const [approvals, setapprovals] = useState<string[]>([]);
    const [denials, setdenials] = useState<string[]>([]);

    function approve(newMovie: string) {
        if (!approvals.includes(newMovie)){
            setapprovals([...approvals, newMovie]);

        }
    }

    function clearapprovals() {
        setapprovals([]);
    }

    function deny(newMovie: string) {
        if (!denials.includes(newMovie)){
            setdenials([...denials, newMovie]);

        }
    }

    function cleardenials() {
        setdenials([]);
    }

    return (
        <div>
            <Heading size="lg">Admin Zone</Heading>
            <SimpleGrid columns={2} spacing={10}>
                <div>
                    <div>
                        {newOptions.map((option: string) => (
                            <div key={option}>
                Approve
                                <Button onClick={() => approve(option)}>{option}</Button>
                            </div>
                        ))}
                    </div>
                    <div>
                        {newOptions.map((option: string) => (
                            <div key={option}>
                Deny
                                <Button onClick={() => deny(option)}>{option}</Button>
                            </div>
                        ))}
                    </div>
                </div>
            </SimpleGrid>
        </div>
    );
}