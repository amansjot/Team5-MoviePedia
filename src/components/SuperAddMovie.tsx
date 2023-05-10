import React, { useState } from "react";
import { Accordion, AccordionButton, AccordionIcon, AccordionPanel, AccordionItem } from "@chakra-ui/accordion";
import { Movie } from "./Movie";
//import movie from "../movie.json";
//import {SuperNewMovie} from "./SuperNewMovie";
import { Input, InputGroup,InputLeftAddon } from "@chakra-ui/input";
//import { Stack } from "@chakra-ui/layout";
import { HTMLInputTypeAttribute} from "react";
import { Button } from "@chakra-ui/react";
import { Popover, PopoverBody,PopoverTrigger, PopoverArrow, PopoverCloseButton,PopoverContent} from "@chakra-ui/react";
import { SimpleGrid, Card, CardBody,Text,CardHeader, Image, Box, Heading, Flex, Spacer, CardFooter, Stack, HStack, Container, RadioGroup, Radio, Center } from "@chakra-ui/react";
 
export function SuperAddMovie(): JSX.Element {
    const [name, setName] = React.useState("");
    const [poster, setPoster] = React.useState("");
    const [year, setYear] = useState<number>(0);
    const [actors, setActors] = useState<string[]>([]);
    const [plot, setPlot] = React.useState("");
    const [director, setDirector] = React.useState("");
    const [genre, setGenre] = useState<string[]>([]);
    const [rating, setRating] = useState<number>(1);

    function nameChange (event: React.ChangeEvent<HTMLInputElement>){
        setName(event.target.value);
    }

    function posterChange (event: React.ChangeEvent<HTMLInputElement>){
        setPoster(event.target.value);
    }

    function yearChange (event: React.ChangeEvent<HTMLInputElement>){
        setYear(parseInt(event.target.value));
    }

    function actorsChange (event: React.ChangeEvent<HTMLInputElement>){
        setActors([...actors, event.target.value]);
    }

    function plotChange (event: React.ChangeEvent<HTMLInputElement>){
        setPlot(event.target.value);
    }

    function directorChange (event: React.ChangeEvent<HTMLInputElement>){
        setDirector(event.target.value);
    }

    function genreChange (event: React.ChangeEvent<HTMLInputElement>){
        setGenre([...genre, event.target.value]);
    }

    function ratingChange (event: React.ChangeEvent<HTMLInputElement>){
        setRating(parseInt(event.target.value));
    }

    function addMovie(name:string, poster: string, year: number, actors:string[], plot:string, director:string, genre:string[], rating:number):Movie {
        const addMovie = {
            name: name,
            poster: poster,
            year: year,
            actors: actors,
            plot: plot,
            director: director,
            genre: genre,
            rating: rating
        };
        return addMovie;
    }   
 
    function updateMovies (movies: Movie[]): Movie[] {
        const movieCopy = [...movies];
        const locat = addMovie(name, poster, year, actors, plot, director, genre, rating);
        const updatedMovie = [...movieCopy, locat];
        return updatedMovie;
    }
    
    function expandArray(array: string[]): string {
        const copy = [...array];
        const listOfItems = copy.join(", ");
        return listOfItems;
    }

    //const newList = updateMovies(movie);

    /** 
    <div>
                <Container border={"2px solid black"} borderRadius={"20px"} bg="white" p={5} height="100vh" overflowY={"scroll"}>
                    <SimpleGrid h="4000px" w="100%" spacing={2} templateColumns={{base: "repeat(4, 1fr)"}}>
                        {movie.map((Movie)=>(
                            <Card align="center" backgroundColor="gray.300" border="1px solid #aaa" pb={3} direction={{base: "row", sm:"column"}} variant="elevated" key={Movie.name}>
                                <CardHeader key={Movie.name}>
                                    <Heading size="md">
                                        <Text><span>{Movie.name}</span></Text>
                                    </Heading>
                                    <Text><i>{Movie.year}<br/>{Movie.director}</i></Text>
                                </CardHeader>
                                <CardBody mt={-5}>
                                    <Image width={120} src={Movie.poster} alt={Movie.name}></Image>
                                    <div></div>
                                </CardBody>
                                <Popover>
                                    <PopoverTrigger>
                                        <Button>Show More</Button>
                                    </PopoverTrigger>
                                    <PopoverContent w="40">
                                        <PopoverArrow />
                                        <PopoverCloseButton/>
                                        <PopoverBody>
                                            <Text></Text>
    
                                            <Text fontSize="xs">    
                                                {Movie.plot}      
                                                <br/><br/>
                                                <span>Actors: {expandArray(Movie.actors)}</span>
                                                <br/>
                                                <span>Genre: {expandArray(Movie.genre)}</span>
                                            </Text>
                                        </PopoverBody>
                                    </PopoverContent>
                                </Popover>
                            </Card>
                        ))}
                    </SimpleGrid>
                </Container>
            </div>
    */
    //<Heading h="2vh" size="lg" style={{"fontFamily": "'Georgia', sans-serif"}}>Locations Providing Free Products</Heading>
    
    return(
        <Box>
            <div>
                <Container border={"2px solid black"} borderRadius={"20px"} bg="white" p={5} height="100vh" overflowY={"scroll"}>
                    <SimpleGrid h="4000px" w="100%" spacing={2} templateColumns={{base: "repeat(4, 1fr)"}}>
                        <Card align="center" backgroundColor="gray.300" border="1px solid #aaa" pb={3} direction={{base: "row", sm:"column"}} variant="elevated" key={name}>
                            <CardHeader key={name}>
                                <Heading size="md">
                                    <Text><span>{name}</span></Text>
                                </Heading>
                                <Text><i>{year}<br/>{director}</i></Text>
                            </CardHeader>
                            <CardBody mt={-5}>
                                <Image width={120} src={poster} alt={name}></Image>
                                <div></div>
                            </CardBody>
                            <Popover>
                                <PopoverTrigger>
                                    <Button>Show More</Button>
                                </PopoverTrigger>
                                <PopoverContent w="40">
                                    <PopoverArrow />
                                    <PopoverCloseButton/>
                                    <PopoverBody>
                                        <Text></Text>
    
                                        <Text fontSize="xs">    
                                            {plot}      
                                            <br/><br/>
                                            <span>Actors: {expandArray(actors)}</span>
                                            <br/>
                                            <span>Genre: {expandArray(genre)}</span>
                                        </Text>
                                    </PopoverBody>
                                </PopoverContent>
                            </Popover>
                        </Card>
                    </SimpleGrid>
                </Container>
            </div>
            <Spacer></Spacer>
            
            <Heading size ="md" style={{"fontFamily": "'Georgia', sans-serif"}}>Add a New Movie:</Heading>
            
            { <Stack spacing={1}>
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
                </InputGroup>
            </Stack> }
        </Box>
    );
}
 
 