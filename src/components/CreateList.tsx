import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CreateList(): JSX.Element {
    const [edit, setEdit] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);

    function updateEdit(event: React.ChangeEvent<HTMLInputElement>) {
        setEdit(event.target.checked);
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="edit switch"
                checked={edit}
                onChange={updateEdit}
            />

            <div style={{ display: edit ? "block" : "none" }}>
                <Form.Label> Name: </Form.Label>
                <Form.Control value={name} onChange={updateName} />
                <Form.Check
                    type="checkbox"
                    id="edit student status"
                    label="Is A Student?"
                    checked={student}
                    onChange={updateStudent}
                />
            </div>
            <div style={{ display: edit ? "none" : "block" }}>
                {edit
                    ? ""
                    : name + " is " + (student ? "" : "not") + " a student."}
            </div>
        </div>
    );
}
