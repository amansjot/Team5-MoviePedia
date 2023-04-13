import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [numAttempts, setNumAttempts] = useState<number>(4);
    const [isInProgress, setInProgress] = useState<boolean>(false);
    return (
        <div>
            <Button
                onClick={() => {
                    setInProgress(true);
                    setNumAttempts(numAttempts - 1);
                }}
                disabled={isInProgress || numAttempts == 0}
            >
                Start Quiz
            </Button>
            <Button
                onClick={() => setInProgress(false)}
                disabled={!isInProgress}
            >
                Stop Quiz
            </Button>
            <Button
                onClick={() => {
                    setNumAttempts(numAttempts + 1);
                }}
                disabled={isInProgress}
            >
                Mulligan
            </Button>
            <span>Attempts: {numAttempts}</span>
        </div>
    );
}
