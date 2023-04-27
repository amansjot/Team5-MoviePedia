import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, CardFooter,Box, HStack,Flex,Text } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { useDrag, useDrop } from "react-dnd";
import { DroppedMovie } from "./DroppedMovie";


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
        <Card align="center" w="50vh" h="105vh" overflow="hidden" variant ="elevated">
            <Box h="8vh" w="50vh" bg="white">
                <CardHeader>
                    <span>{listName}</span>
                    <Input value={listName} onChange={listChange} placeholder='Enter List Name' size='xs' />
                </CardHeader>
            </Box>
            <CardBody w="50vh" h="105vh" bg="white">
            </CardBody>
        </Card>
        //<div>WatchList</div>
    );
}
