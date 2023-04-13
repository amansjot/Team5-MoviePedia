import React, { useState } from "react";
import { Button } from "react-bootstrap";
// import { dhValue, setDhValue } from "./DoubleHalfState";

interface DoubleOrHalf {
    setValue: () => void;
}

function Doubler({ setValue }: DoubleOrHalf): JSX.Element {
    return <Button onClick={setValue}>Double</Button>;
}

function Halver({ setValue }: DoubleOrHalf): JSX.Element {
    return <Button onClick={setValue}>Halve</Button>;
}

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    const doubleValue = () => setDhValue(2 * dhValue);
    const halfValue = () => setDhValue(0.5 * dhValue);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler setValue={doubleValue}></Doubler>
            <Halver setValue={halfValue}></Halver>
        </div>
    );
}
