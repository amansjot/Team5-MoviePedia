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
 
export function SuperEditMovie(): JSX.Element {

    const editingStr = localStorage.getItem("editing") || "{}";
    let editingObj = JSON.parse(editingStr);    

    const [name, setName] = React.useState(editingObj.name);
    const [poster, setPoster] = React.useState(editingObj.poster || "https://placehold.co/130x200");
    const [year, setYear] = useState<number>(editingObj.year);
    const [actors, setActors] = useState<string>((editingObj.actors || []).join(","));
    const [plot, setPlot] = React.useState(editingObj.plot);
    const [director, setDirector] = React.useState(editingObj.director);
    const [genre, setGenre] = useState<string>((editingObj.genre || []).join(","));

    function nameChange (event: React.ChangeEvent<HTMLInputElement>){
        const editingStr = localStorage.getItem("editing") || "{}";
        let editingObj = JSON.parse(editingStr);
        editingObj["name"] = event.target.value;
        localStorage.setItem("editing", JSON.stringify(editingObj));
        setName(event.target.value);
    }

    function posterChange (event: React.ChangeEvent<HTMLInputElement>){
        if (!event.target.value) {
            setPoster("https://placehold.co/130x200");
        } else {
            const editingStr = localStorage.getItem("editing") || "{}";
            let editingObj = JSON.parse(editingStr);
            editingObj["poster"] = event.target.value;
            localStorage.setItem("editing", JSON.stringify(editingObj));
            setPoster(event.target.value);
        }
    }

    function yearChange (event: React.ChangeEvent<HTMLInputElement>){
        const editingStr = localStorage.getItem("editing") || "{}";
        let editingObj = JSON.parse(editingStr);
        editingObj["year"] = event.target.value;
        localStorage.setItem("editing", JSON.stringify(editingObj));
        setYear(parseInt(event.target.value));
    }

    function actorsChange (event: React.ChangeEvent<HTMLInputElement>){
        const editingStr = localStorage.getItem("editing") || "{}";
        let editingObj = JSON.parse(editingStr);
        editingObj["actors"] = event.target.value.split(",");
        localStorage.setItem("editing", JSON.stringify(editingObj));
        setActors(event.target.value);
    }

    function plotChange (event: React.ChangeEvent<HTMLInputElement>){
        const editingStr = localStorage.getItem("editing") || "{}";
        let editingObj = JSON.parse(editingStr);
        editingObj["plot"] = event.target.value;
        localStorage.setItem("editing", JSON.stringify(editingObj));
        setPlot(event.target.value);
    }

    function directorChange (event: React.ChangeEvent<HTMLInputElement>){
        const editingStr = localStorage.getItem("editing") || "{}";
        let editingObj = JSON.parse(editingStr);
        editingObj["director"] = event.target.value;
        localStorage.setItem("editing", JSON.stringify(editingObj));
        setDirector(event.target.value);
    }

    function genreChange (event: React.ChangeEvent<HTMLInputElement>){
        const editingStr = localStorage.getItem("editing") || "{}";
        let editingObj = JSON.parse(editingStr);
        editingObj["genre"] = event.target.value.split(",");
        localStorage.setItem("editing", JSON.stringify(editingObj));
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


    function movieInput(): JSX.Element {
        const editingStr = localStorage.getItem("editing") || "{}";
        const editing = JSON.parse(editingStr);
        
        if (localStorage.getItem("role") == "Super") {
            // localStorage.removeItem("editing");
            return (<Stack spacing={1}>
                <InputGroup px="10">
                    <InputLeftAddon>Movie Name</InputLeftAddon>
                    <Input onChange={nameChange} data-val={name} value={editing.name ? editing.name : ""} variant="filled" placeholder="Insert Movie Name"></Input>
                    <Spacer px="2"></Spacer>

                    <InputLeftAddon>Year</InputLeftAddon>
                    <Input onChange={yearChange} value={editing.year ? editing.year : ""} variant="filled" placeholder="Insert Year Published"></Input>
                </InputGroup>
                <InputGroup px="10" pt="2">
                    <InputLeftAddon>Poster</InputLeftAddon>
                    <Input onChange={posterChange} value={editing.poster ? editing.poster : ""} variant="filled" placeholder="Insert Poster URL (ex. https://____.png)"></Input>
                </InputGroup>
                <InputGroup px="10" pt="2">
                    <InputLeftAddon>Plot</InputLeftAddon>
                    <Input onChange={plotChange} value={editing.plot ? editing.plot : ""} variant="filled" placeholder="Insert Plot"></Input>
                </InputGroup>
                <InputGroup px="10" pt="2">
                    <InputLeftAddon>Actors</InputLeftAddon>
                    <Input onChange={actorsChange} value={editing.actors ? editing.actors : ""} variant="filled" placeholder="Insert Actors (comma-separated)"></Input>
                </InputGroup>
                <InputGroup px="10" pt="2">
                    <InputLeftAddon>Director</InputLeftAddon>
                    <Input onChange={directorChange} value={editing.director ? editing.director : ""} variant="filled" placeholder="Insert Director"></Input>
                    <Spacer px="2"></Spacer>

                    <InputLeftAddon>Genre</InputLeftAddon>
                    <Input onChange={genreChange} value={editing.genre ? editing.genre : ""} variant="filled" placeholder="Insert Genre"></Input>
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

    function saveEdit() {
        const editedObj = JSON.parse(localStorage.getItem("editing") || "{}");
        localStorage.setItem("edited", "true");
    }

    return(
        <Box>
            {/* style={{"fontFamily": "'Georgia', sans-serif"}} */}
            <Heading size ="xl" mb="2">Edit Movie</Heading>


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
            <Button colorScheme='green' onClick={saveEdit}>Save Edits</Button>
            <br/><br/>
            {movieInput()}
            <br/><br/>
            <Center mt="3" mb="5">
                <Divider border="1px solid #333" my="auto" w="60%"></Divider>
            </Center>
            <br/>
        </Box>
    );
}
 
 