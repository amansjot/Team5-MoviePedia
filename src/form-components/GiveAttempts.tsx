import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [attemptsRequested, setAttemptsRequested] = useState<string>("0");
    const attemptsRequestedValue = parseInt(attemptsRequested) || 0;

    function increaseAttempts() {
        setAttemptsLeft(attemptsRequestedValue + attemptsLeft);
    }

    function decreaseAttempts() {
        setAttemptsLeft(attemptsLeft - 1);
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="formMovieReleased">
                <Form.Label>Requested Number of Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={attemptsRequested}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setAttemptsRequested(event.target.value)
                    }
                />
                <div>Attempts: {attemptsLeft}</div>
                <Button
                    onClick={decreaseAttempts}
                    disabled={attemptsLeft === 0}
                >
                    use
                </Button>
                <Button onClick={increaseAttempts}>gain</Button>
            </Form.Group>
        </div>
    );
}
