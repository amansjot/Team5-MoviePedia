import React, { useState } from "react";
import { Accordion, AccordionButton, AccordionIcon, AccordionPanel, AccordionItem } from "@chakra-ui/accordion";
import { Movie } from "./Movie";
//import movie from "../movie.json";
//import {SuperNewMovie} from "./SuperNewMovie";
import { Input, InputGroup,InputLeftAddon } from "@chakra-ui/input";
//import { Stack } from "@chakra-ui/layout";
import { HTMLInputTypeAttribute} from "react";
import { AlertDescription, Button, Divider, IconButton } from "@chakra-ui/react";
import { Popover, PopoverBody,PopoverTrigger, PopoverArrow, PopoverCloseButton,PopoverContent} from "@chakra-ui/react";
import { SimpleGrid, Card, CardBody,Text,CardHeader, Image, Box, Heading, Flex, Spacer, CardFooter, Stack, HStack, Container, RadioGroup, Radio, Center } from "@chakra-ui/react";
import { CheckIcon, CloseIcon, SearchIcon } from "@chakra-ui/icons";
 
export function SuperAddMovie(): JSX.Element {
    const [name, setName] = React.useState("Movie Title");
    const [poster, setPoster] = React.useState("https://placehold.co/130x200");
    const [year, setYear] = useState<number>(2023);
    const [actors, setActors] = useState<string>("");
    const [plot, setPlot] = React.useState("");
    const [director, setDirector] = React.useState("");
    const [genre, setGenre] = useState<string>("");

    function nameChange (event: React.ChangeEvent<HTMLInputElement>){
        setName(event.target.value);
    }

    function posterChange (event: React.ChangeEvent<HTMLInputElement>){
        if (!event.target.value) {
            setPoster("https://placehold.co/130x200");
        } else {
            setPoster(event.target.value);
        }
    }

    function yearChange (event: React.ChangeEvent<HTMLInputElement>){
        setYear(parseInt(event.target.value));
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

    function addMovie(name:string, poster: string, year: number, actors:string[], plot:string, director:string, genre:string[], rating:number):Movie {
        const addMovie = {
            name: name,
            poster: poster,
            year: year,
            actors: actors,
            plot: plot,
            director: director,
            genre: genre,
            rating: 0
        };
        return addMovie;
    }   
 
    function updateMovies (movies: Movie[]): Movie[] {
        const movieCopy = [...movies];
        const locat = addMovie(name, poster, year, actors.split(","), plot, director, genre.split(","), 0);
        const updatedMovie = [...movieCopy, locat];
        return updatedMovie;
    }
    
    function expandArray(array: string): string {
        const copy = array.split(",");
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
    
    function heading(): JSX.Element {
        if (localStorage.getItem("role") == "Super") {
            return (<Heading size ="xl" mb="4">Add a New Movie</Heading>);
        } else if (localStorage.getItem("role") == "Admin") {
            return (<Heading size ="xl" mb="4">Review New Movie</Heading>);
        } else {
            return (<></>);
        }
    }

    function description(): JSX.Element {
        const isEdited: boolean = name !== "Movie Title" && actors != "" && plot != "" && director != "" && genre != ""; 
        if (localStorage.getItem("role") == "Admin" && !isEdited) {
            return (<Container mb="6">
                When the Super fills out all of the input fields, you<br/>
                will be able to accept or reject the new movie.
            </Container>);
        } else if (localStorage.getItem("role") == "Super") {
            if (isEdited) {
                return (<Container mb="6">
                All inputs are filled in! The Admin can now accept or reject this movie.
                </Container>);
            } else {
                return (<Container mb="6">
                Fill in the input fields below to see your new movie card update in<br/>
                real-time. Once everything is filled in, the Admin can accept or reject it.
                </Container>);
            }
        } else {
            return (<></>);
        }
    }

    function movieInput(): JSX.Element {
        if (localStorage.getItem("role") == "Super") {
            return (<Stack spacing={1}>
                <InputGroup px="10">
                    <InputLeftAddon>Movie Name</InputLeftAddon>
                    <Input onChange={nameChange} variant="filled" placeholder="Insert Movie Name"></Input>
                    <Spacer px="2"></Spacer>

                    <InputLeftAddon>Year</InputLeftAddon>
                    <Input onChange={yearChange} variant="filled" placeholder="Insert Year Published"></Input>
                </InputGroup>
                <InputGroup px="10" pt="2">
                    <InputLeftAddon>Poster</InputLeftAddon>
                    <Input onChange={posterChange} variant="filled" placeholder="Insert Poster URL (ex. https://____.png)"></Input>
                </InputGroup>
                <InputGroup px="10" pt="2">
                    <InputLeftAddon>Plot</InputLeftAddon>
                    <Input onChange={plotChange} variant="filled" placeholder="Insert Plot"></Input>
                </InputGroup>
                <InputGroup px="10" pt="2">
                    <InputLeftAddon>Actors</InputLeftAddon>
                    <Input onChange={actorsChange} variant="filled" placeholder="Insert Actors (comma-separated)"></Input>
                </InputGroup>
                <InputGroup px="10" pt="2">
                    <InputLeftAddon>Director</InputLeftAddon>
                    <Input onChange={directorChange} variant="filled" placeholder="Insert Director"></Input>
                    <Spacer px="2"></Spacer>

                    <InputLeftAddon>Genre</InputLeftAddon>
                    <Input onChange={genreChange} variant="filled" placeholder="Insert Genre"></Input>
                </InputGroup>
            </Stack>);
        } else {
            return (<></>);
        }
    }

    function acceptNewMovie() {
        const newMovie: Movie = {
            name: name,
            poster: poster,  
            year: year,
            actors: actors.split(","),
            plot: plot,
            director: director,
            genre: genre.split(","),
            rating: 0
        };
        localStorage.setItem("newMovie", JSON.stringify(newMovie));
        localStorage.setItem("role", localStorage.getItem("role") || "Admin");
        resetNewMovie();
    }

    function resetNewMovie() {
        setName("Movie Title");
        setPoster("https://placehold.co/130x200");
        setYear(2023);
        setActors("");
        setPlot("");
        setDirector("");
        setGenre("");
    }

    // function explainEdited(): JSX.Element {
    //     if (localStorage.getItem("role") == "Admin" && isEdited)
    // }

    function reviewNewMovie(): JSX.Element {
        const isEdited: boolean = name !== "Movie Title" && actors != "" && plot != "" && director != "" && genre != ""; 
        if (localStorage.getItem("role") == "Admin" && isEdited) {
            return (<CardFooter mb="-3">
                <IconButton
                    colorScheme="green"
                    aria-label="Search database"
                    icon={<CheckIcon />}
                    onClick={acceptNewMovie}
                />
                <Spacer p="1"></Spacer>
                <IconButton
                    colorScheme="red"
                    aria-label="Search database"
                    icon={<CloseIcon />}
                    onClick={resetNewMovie}
                />
            </CardFooter>);
        } else {
            return (<></>);
        }
    }

    return(
        <Box data-testId={"edit-movie-box"}>
            {/* style={{"fontFamily": "'Georgia', sans-serif"}} */}
            {heading()}
            {description()}
            <div>
                <Container border={"2px solid black"} borderRadius={"20px"} bg="white" p={5} height="auto" w="350px" minHeight="370px" overflowY={"scroll"}>
                    <SimpleGrid h="auto" w="200px" m="0 auto" spacing={2} templateColumns={{base: "repeat(3, 2fr)"}}>
                        <Card m="0 auto" align="center" w="200px" backgroundColor="gray.300" border="1px solid #aaa" pb={3} key={name}>
                            <CardHeader key={name}>
                                <Heading size="md">
                                    <Text><span>{name}</span></Text>
                                </Heading>
                                <Text><i>{year}<br/>{director}</i></Text>
                            </CardHeader>
                            <CardBody mt={-5}>
                                <Image border="1px solid grey" width={100} height={165} src={poster} alt={name}></Image>
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
                            {reviewNewMovie()}
                        </Card>
                    </SimpleGrid>
                </Container>
            </div>
            <Spacer></Spacer>
            <br/>

            {movieInput()}
        </Box>
    );
}
 
 