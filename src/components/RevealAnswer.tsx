import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [isVisible, setVisibility] = useState<boolean>(false);
    return (
        <div>
            <Button onClick={() => setVisibility(!isVisible)}>
                Reveal Answer
            </Button>
            <span>{isVisible ? "42" : ""}</span>
        </div>
    );
}
