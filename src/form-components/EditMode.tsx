import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [isInEditMode, setIsInEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setIsInEditMode(event.target.checked);
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="is-in-edit-mode-switch"
                label="Edit Mode?"
                checked={isInEditMode}
                onChange={updateEditMode}
            />
            <div style={{ display: isInEditMode ? "block" : "none" }}>
                <Form.Label>Name:</Form.Label>
                <Form.Control value={name} onChange={updateName} />
                <Form.Check
                    type="checkbox"
                    id="is-student-check"
                    label="Student?"
                    checked={isStudent}
                    onChange={updateStudent}
                />
            </div>
            <div style={{ display: isInEditMode ? "none" : "block" }}>
                {isInEditMode
                    ? ""
                    : name + " is" + (isStudent ? "" : " not") + " a student."}
            </div>
        </div>
    );
}
