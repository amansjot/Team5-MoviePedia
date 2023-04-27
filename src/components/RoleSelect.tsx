import React, { useState } from "react";
import { Heading, Radio, RadioGroup, Stack } from "@chakra-ui/react";

export function RoleSelect(): JSX.Element {
    const [selectedRole, setRole] = useState<string>("Super");

    return (
        <div>
            <Heading as='h3' size="md">Change Role</Heading>
            <RadioGroup onChange={setRole} value={selectedRole}>
                <Stack direction='row'>
                    <Radio value='Super'>Super</Radio>
                    <Radio value='Admin'>Admin</Radio>
                    <Radio value='User'>User</Radio>
                </Stack>
            </RadioGroup>
            <br/>
            <div>
                Your Role:&nbsp;
                <span data-testid="colored-box">
                    {selectedRole}
                </span>
            </div>
            <br/>
        </div>
    );
}