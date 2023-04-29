import React, { useState } from "react";
import { Container, IconButton } from "@chakra-ui/react";
import { WarningTwoIcon } from "@chakra-ui/icons";

export function BlueButton(): JSX.Element {
    const [button, setButton] = useState<boolean>(false);

    function flipReveal(): void {
        setButton(!button);
    }

    return (
        <div>
            {button && <div style={{"marginTop": "18px", "backgroundColor": "#bee3f8", "border": "3px solid #2055A1", "color": "#2055A1", "padding": "10px"}}>📍 Stay calm. UDPD is now tracking your location!</div>}
            <div style={{"color": "red", "fontWeight": "bold", "fontSize": "25px", "margin": "10px"}}>FOR EMERGENCY USE</div>
            <IconButton 
                style={{"width": "300px", "height": "300px", "fontSize": "150px", "borderRadius": "50%", "color": "white"}}
                bg="#2055A1"
                _hover={{ backgroundColor: "red" }}
                icon = {<WarningTwoIcon />} aria-label='BLUE BUTTON ALERT' onClick={flipReveal} />
            <div style={{"color": "red", "fontWeight": "bold", "fontSize": "25px", "margin": "10px"}}>PRESS TO NOTIFY EMERGENCY SERVICES</div>
        </div>
    );
}
