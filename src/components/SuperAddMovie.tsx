import React, { useState } from "react";
import { Accordion, AccordionButton,AccordionIcon,AccordionPanel, AccordionItem } from "@chakra-ui/accordion";
import { Box, Heading, Spacer } from "@chakra-ui/layout";
//import { Location } from "./Location";
//import { locationList } from "./locationList";
import { Input, InputGroup,InputLeftAddon } from "@chakra-ui/input";
import { Stack } from "@chakra-ui/layout";
import { HTMLInputTypeAttribute} from "react";



// export function hidden(): JSX.Element {
//     return(
//         <div>Hidden Hello New</div>
//     );
// }


//add imports to add another location
/*
<Stack spacing={1}>
               <InputGroup p="7vh">
                   <InputLeftAddon>Building</InputLeftAddon>
                   <Input onChange={buildingChange} variant="filled" placeholder="Insert Building"></Input>
               </InputGroup>
               <InputGroup p="7vh">
                   <InputLeftAddon>Location</InputLeftAddon>
                   <Input onChange={locationChange} variant="filled" placeholder="Insert Location"></Input>
               </InputGroup>
               <InputGroup p="7vh">
                   <InputLeftAddon>Address</InputLeftAddon>
                   <Input onChange={addressChange} variant="filled" placeholder="Insert Address"></Input>
               </InputGroup>
               <InputGroup p="7vh">
                   <InputLeftAddon>Operating Hours</InputLeftAddon>
                   <Input onChange={hoursChange} variant="filled" placeholder="Insert Operating Hours "></Input>
               </InputGroup>
           </Stack>
*/



interface LocationProps {
    location: Location[];
}

export function getLocations(locations: Location[]): Location[] {
    const locationCopy = locations.map((locationData: Location): Location => ({...locationData}));
    return locationCopy;
}

const productArray = getLocations(locationList);
 
export function locationProperty(props: LocationProps){
    const locationList = props;
}
 
 
export function Locations(): JSX.Element {
    const [name, setName] = React.useState("");
    const [poster, setPoster] = React.useState("");
    const [year, setYear] = React.useState("");
    const [actors, setActors] = React.useState("");
    const [plot, setPlot] = React.useState("");
    const [director, setDirector] = React.useState("");
    const [genre, setGenre] = React.useState("");
    const [rating, setRating] = React.useState("");

    function nameChange (event: React.ChangeEvent<HTMLInputElement>){
        setName(event.target.value);
    }

    function posterChange (event: React.ChangeEvent<HTMLInputElement>){
        setPoster(event.target.value);
    }

    function yearChange (event: React.ChangeEvent<HTMLInputElement>){
        setYear(event.target.value);
    }

    function actorsChange (event: React.ChangeEvent<HTMLInputElement>){
        setActors(event.target.value);
    }

    function plotChange (event: React.ChangeEvent<HTMLInputElement>){
        setPlot(event.target.value);
    }

    function directorChange (event: React.ChangeEvent<HTMLInputElement>){
        setDirector(event.target.value);
    }

    function genreChange (event: React.ChangeEvent<HTMLInputElement>){
        setGenre(event.target.value);
    }

    function ratingChange (event: React.ChangeEvent<HTMLInputElement>){
        setRating(event.target.value);
    }

    function addLocation(name:string, poster: string, year: string, actors:string, plot:string, director:string, genre:string, rating:string):Location {
        const addLocation = {
            name: name,
            poster: poster,
            year: year,
            actors: actors,
            plot: plot,
            director: director,
            genre: genre,
            rating: rating
        };
        return addLocation;
}
 
    function updateLocations (locations: Location[]): Location[] {
        const locationCopy = [...locations];
        const locat = addLocation(name, poster, year, actors, plot, director, genre, rating);
        const updatedLocation = [...locationCopy, locat];
        return updatedLocation;
    }
    
    const newList = updateLocations(locationList);
    return(
        <Box>
            <Heading h="2vh" size="lg" style={{"fontFamily": "'Georgia', sans-serif"}}>Locations Providing Free Products</Heading>
            <Accordion p="8vh">
                {newList.map((location)=>(
                    //name, poster, year, actors, plot, director, genre, rating
                    <AccordionItem key={location.name}>
                        <AccordionButton>
                            <AccordionIcon/>
                            <Box>
                                <text>{location.name}</text>
                            </Box>
                        </AccordionButton>
                        <AccordionPanel>
                            Poster: {location.poster}
                            <Spacer></Spacer>
                            Year Hours: {location.year}
                            <Spacer></Spacer>
                            Actors: {location.actors}
                            <Spacer></Spacer>
                            Plot: {location.plot}
                            <Spacer></Spacer>
                            Director: {location.director}
                            <Spacer></Spacer>
                            Genre: {location.genre}
                            <Spacer></Spacer>
                            Rating: {location.rating}
                        </AccordionPanel>
                    </AccordionItem>
                ))}
            </Accordion>
            <Spacer></Spacer>
            <Heading size ="md" style={{"fontFamily": "'Georgia', sans-serif"}}>Add a New Location:</Heading>
            <Stack spacing={1}>
                <InputGroup p="7vh">
                    <InputLeftAddon>Movie Name</InputLeftAddon>
                    <Input onChange={nameChange} variant="filled" placeholder="Insert Movie Name"></Input>
                    <Spacer></Spacer>
                    <InputLeftAddon>Poster</InputLeftAddon>
                    <Input onChange={posterChange} variant="filled" placeholder="Insert Poster"></Input>
                    <InputLeftAddon>Address</InputLeftAddon>
                    <Input onChange={addressChange} variant="filled" placeholder="Insert Address"></Input>
                    <InputLeftAddon>Operating Hours</InputLeftAddon>
                    <Input onChange={hoursChange} variant="filled" placeholder="Insert Operating Hours "></Input>
                </InputGroup>
            </Stack>
        </Box>
    );
}
 
 