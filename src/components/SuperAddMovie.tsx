import React, { useState } from "react";
import { Accordion, AccordionButton,AccordionIcon,AccordionPanel, AccordionItem } from "@chakra-ui/accordion";
import { Box, Heading, Spacer } from "@chakra-ui/layout";
import { Movie } from "./Movie";
import movies from "./movie.json";
import { Input, InputGroup,InputLeftAddon } from "@chakra-ui/input";
import { Stack } from "@chakra-ui/layout";
import { HTMLInputTypeAttribute} from "react";

interface LocationProps {
    location: Movie[];
}

export function getLocations(locations: Location[]): Location[] {
    const locationCopy = locations.map((locationData: Location): Location => ({...locationData}));
    return locationCopy;
}

const productArray = getLocations(movies);
 
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
 
    function updateLocations (movies: Movie[]): Movie[] {
        const locationCopy = [...movies];
        const locat = addLocation(name, poster, year, actors, plot, director, genre, rating);
        const updatedLocation = [...locationCopy, locat];
        return updatedLocation;
    }
    
    const newList = updateLocations(movies);
    return(
        <Box>
            <Heading h="2vh" size="lg" style={{"fontFamily": "'Georgia', sans-serif"}}>Locations Providing Free Products</Heading>
            <Accordion p="8vh">
                {newList.map((Movie)=>(
                    //name, poster, year, actors, plot, director, genre, rating
                    <AccordionItem key={Movie.name}>
                        <AccordionButton>
                            <AccordionIcon/>
                            <Box>
                                <text>{Movie.name}</text>
                            </Box>
                        </AccordionButton>
                        <AccordionPanel>
                            Poster: {Movie.poster}
                            <Spacer></Spacer>
                            Year Hours: {Movie.year}
                            <Spacer></Spacer>
                            Actors: {Movie.actors}
                            <Spacer></Spacer>
                            Plot: {Movie.plot}
                            <Spacer></Spacer>
                            Director: {Movie.director}
                            <Spacer></Spacer>
                            Genre: {Movie.genre}
                            <Spacer></Spacer>
                            Rating: {Movie.rating}
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

                    <InputLeftAddon>Year</InputLeftAddon>
                    <Input onChange={yearChange} variant="filled" placeholder="Insert Year Published"></Input>

                    <InputLeftAddon>Actors</InputLeftAddon>
                    <Input onChange={actorsChange} variant="filled" placeholder="Insert Actor"></Input>

                    <InputLeftAddon>Plot</InputLeftAddon>
                    <Input onChange={plotChange} variant="filled" placeholder="Insert Plot"></Input>

                    <InputLeftAddon>Director</InputLeftAddon>
                    <Input onChange={directorChange} variant="filled" placeholder="Insert Director"></Input>

                    <InputLeftAddon>Genre</InputLeftAddon>
                    <Input onChange={genreChange} variant="filled" placeholder="Insert Genre"></Input>

                    <InputLeftAddon>rating</InputLeftAddon>
                    <Input onChange={ratingChange} variant="filled" placeholder="Insert Rating"></Input>
                </InputGroup>
            </Stack>
        </Box>
    );
}
 
 