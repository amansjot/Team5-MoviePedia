import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [dieLeft, setDieLeft] = useState<number>(1);
    const [dieRight, setDieRight] = useState<number>(2);
    return (
        <div>
            <div>
                Left Die: <span data-testid="left-die">{dieLeft}</span>, Right
                Die: <span data-testid="right-die">{dieRight}</span>
            </div>
            <Button onClick={() => setDieLeft(d6())}>Roll Left</Button>
            <Button onClick={() => setDieRight(d6())}>Roll Right</Button>
            <div>
                {dieLeft !== dieRight ? "" : dieLeft === 1 ? "Lose" : "Win"}
            </div>
        </div>
    );
}
