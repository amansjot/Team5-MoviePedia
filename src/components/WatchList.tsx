import { Heading } from "@chakra-ui/react";
import React, { useState } from "react";


export function WatchList(): JSX.Element {
    const [listName, updateListName]= React.useState(""); 
    const listChange = (event: React.ChangeEvent<HTMLInputElement>) => updateListName(event.target.value);
    
    /*
    const[]

    const[collectedProps, dropRef]= useDrop(()=> ({
        accept: "MOVIE",
        drop: (item, monitor)=>{
            const dropped = item as ;
            (dropped.);
        }
    }));
    */
    //make card header be changed by a textbox 
   
   
   
    return(
        <Heading size="lg">Watch List</Heading>
    );
}
