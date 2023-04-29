import React, { useState } from "react";
import { IconButton } from "@chakra-ui/react";
import { WarningTwoIcon } from "@chakra-ui/icons";

export function BlueButton(): JSX.Element {
    const [button, setButton] = useState<boolean>(false);

    function flipReveal(): void {
        setButton(!button);
    }

    return (
        <div>
            <IconButton 
                style={{"width": "300px", "height": "300px", "fontSize": "150px", "backgroundColor": "#2055A1", "borderRadius": "50%", "color": "white"}}
                icon = {<WarningTwoIcon />} aria-label='BLUE BUTTON ALERT' onClick={flipReveal} />
            {button && <div> 📍 UDPD is now tracking your location! </div>}
        </div>
    );
}
