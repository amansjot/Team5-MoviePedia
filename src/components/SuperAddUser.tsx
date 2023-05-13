import React, { useState } from "react";
import {
    Button,
    SimpleGrid,
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    Heading,
} from "@chakra-ui/react";
 
let users = ["Super","Admin","User"];

export function SuperAddUser(): JSX.Element {
    
    const [user, setUser] = useState<string>("");

    function updateUser(event: React.ChangeEvent<HTMLInputElement>) {
        setUser(event.target.value);
        users = [...users, user];
    }

    return(
        <div>
            <Heading size ="lg" mb="4">Add a New User</Heading>
            <FormControl>
                <FormLabel>
              Insert User Name
                </FormLabel>
                <Input
                    type="User"
                    value={user}
                    onChange={updateUser}
                />
            </FormControl>
        </div>
    );
}
 
 