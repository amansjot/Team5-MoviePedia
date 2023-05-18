import React, { useState } from "react";
import {CustomList1} from "./CustomList1";
import {CustomList2} from "./CustomList2";
import {Users} from "./Users";


// export function CustomListPerUser(): JSX.Element {
//     function PersonComponent({name}){
//         return <div> {`This is ${name}'s component`}</div>;
//     }

//     function PersonList(){
//         const [selectedPerson, setSelectedPerson] = useState("");
//         const USERS = [
//             "Sakhee",
//             "Aman",
//             "Heni",
//             "Julia",
//             "Priya"
//         ];

//         const handlePersonSelection = (personName) => {
//             setSelectedPerson(personName);
//         };

//         return(
//             <div>
//                 <ul>
//                     {USERS.map((person) => (
//                         <li
//                             key = {person}
//                             onClick = {() => handlePersonSelection(person)}
//                         >
//                             {person}
//                         </li>
//                     ))}
//                 </ul>

//                 {selectedPerson && <PersonComponent name = {selectedPerson} />}
//             </div>
//         );
//     }
// }