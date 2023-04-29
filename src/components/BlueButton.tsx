import React, { useState } from "react";
import { Button } from "@chakra-ui/react";

export function BlueButton(): JSX.Element {
    const [button, setButton] = useState<boolean>(false);

    function flipReveal(): void {
        setButton(!button);
    }

    return (
        <div>
            <Button onClick={flipReveal}>HELP!</Button>
            {button && <div> 📍 UDPD is now tracking your location! </div>}
        </div>
    );
}
