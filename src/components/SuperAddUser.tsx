import React, { useState } from "react";
import {
    Button,
    SimpleGrid,
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    Heading,
    Divider
} from "@chakra-ui/react";
 
export function SuperAddUser({u}: {u:string[];}): JSX.Element {
    
    const [user, setUser] = useState<string>("");

    function updateUser(event: React.ChangeEvent<HTMLInputElement>) {
        setUser(event.target.value);
        u = [...u, user];
    }

    return(
        <div>
            <br/>
            <br/>
            <Divider borderWidth="2px"></Divider>
            <br/>
            <Heading size ="lg" mb="4">Add a New User</Heading>
            <FormControl>
                <Input
                    type="User"
                    value={user}
                    onChange={updateUser} placeholder="Insert User Name"
                />
            </FormControl>
        </div>
    );
}
 
 