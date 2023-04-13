import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    /*
    Holidays for Reference:
     - Bandi Chhor Divas - 🧨
     - Christmas - 🎄
     - Holi - 🎨
     - New Year's Eve - 🍾
     - Thanksgiving - 🦃
    */
    const holidaysByAlphabet = ["🧨", "🎄", "🎨", "🍾", "🦃"];
    const holidaysByYear = ["🎨", "🧨", "🦃", "🎄", "🍾"];
    const [holiday, setHoliday] = useState<string>("🦃");
    return (
        <div>
            <div>
                <span>Holiday: {holiday}</span>
            </div>
            <Button
                onClick={() =>
                    setHoliday(
                        holidaysByAlphabet[
                            (holidaysByAlphabet.indexOf(holiday) + 1) %
                                holidaysByAlphabet.length
                        ]
                    )
                }
            >
                Advance by Alphabet
            </Button>
            <Button
                onClick={() =>
                    setHoliday(
                        holidaysByYear[
                            (holidaysByYear.indexOf(holiday) + 1) %
                                holidaysByAlphabet.length
                        ]
                    )
                }
            >
                Advance by Year
            </Button>
        </div>
    );
}
