import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [chosenColor, setChosenColor] = useState<string>("Color");
    const colors = [
        "red",
        "pink",
        "orange",
        "yellow",
        "limegreen",
        "cyan",
        "skyblue",
        "plum",
        "grey"
    ];

    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((color: string, key: number) => {
                return (
                    <Form.Check
                        inline
                        type="radio"
                        key={key}
                        name="color-radio"
                        onChange={(e) => setChosenColor(e.target.value)}
                        style={{ backgroundColor: color }}
                        label={color}
                        value={color}
                        checked={color === chosenColor}
                    />
                );
            })}
            <div>
                You have chosen&nbsp;
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: chosenColor }}
                >
                    {chosenColor}
                </span>
                .
            </div>
        </div>
    );
}
