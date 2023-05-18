import React, { useState } from "react";
import { Movie } from "./Movie";
import { SimpleGrid, Card, CardBody,Text,CardHeader, Image, Box, Heading, Flex, Spacer, CardFooter, Stack, HStack, Container, RadioGroup, Radio, Center, Select, CloseButton, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { moviesList } from "./MoviesList";
import { Button } from "@chakra-ui/react";
import { Popover, PopoverBody,PopoverTrigger, PopoverArrow, PopoverCloseButton,PopoverContent} from "@chakra-ui/react";
import "../DragDropList.css";
import {Genre} from "./Genre";

export function getMovies(movies: Movie[]): Movie[] {
    const movieCopy = movies.map((movieData: Movie): Movie => ({...movieData}));
    movieCopy.sort(function(a,b) {
        var x = a.name.toLowerCase();
        var y = b.name.toLowerCase();
        return x < y ? -1 : x > y ? 1 : 0;
    });
    return movieCopy;
}

export function MovieCards({
    role
}: {
    role: string;
}): JSX.Element {

    // const [moviesList, setMoviesList] = useState<Movie[]>(moviesList);
    

    function changeDrag(event: React.DragEvent, widgetType: Movie) {
        event.dataTransfer.setData("widgetType", JSON.stringify(widgetType));
    }

    const [movieList, setMovieList] = useState<Movie[]>(getMovies(moviesList));
    const [sort, setSort] = useState<string>("title1");

    if (localStorage.getItem("newMovie")) {
        const newMovie: Movie = JSON.parse(localStorage.getItem("newMovie") || "");
        const newMovieList: Movie[] = [...movieList, newMovie];
        setMovieList(newMovieList);
        // if (movieList.includes(newMovie)) {
        localStorage.removeItem("newMovie");
        // }
    }

    function expandArray(array: string[]): string {
        const copy = [...array];
        const listOfItems = copy.join(", ");
        return listOfItems;
    }

    function sortList(type: string) {
        let sortedList: Movie[] = movieList.slice(0); // make copy
        if (filter != "[All]") {
            sortedList = movieList.slice(0);
        }
        if (type == "title1") {
            sortedList.sort(function(a,b) {
                var x = a.name.toLowerCase();
                var y = b.name.toLowerCase();
                return x < y ? -1 : x > y ? 1 : 0;
            });
        } else if (type == "title2") {
            sortedList.sort(function(a,b) {
                var x = a.name.toLowerCase();
                var y = b.name.toLowerCase();
                return x < y ? 1 : x > y ? -1 : 0;
            });
        } else if (type == "year1") {
            sortedList.sort(function(a,b) {
                return a.year - b.year;
            });
        } else if (type == "year2") {
            sortedList.sort(function(a,b) {
                return b.year - a.year;
            });
        } else if (type == "director") {
            sortedList.sort(function(a,b) {
                var x = a.director.split(" ")[1].toLowerCase();
                var y = b.director.split(" ")[1].toLowerCase();
                return x < y ? -1 : x > y ? 1 : 0;
            });
        } 
        setMovieList(sortedList);
    }

    function updateSort(event: React.ChangeEvent<HTMLSelectElement>){
        sortList(event.target.value);
        setSort(event.target.value);
    }

    function addSortField(): JSX.Element {
        if (role == "Super") {
            return (
                <Container>
                    <Center mb={5}>
                        <Heading size="md">Sort by:&nbsp;&nbsp;</Heading>
                        <Select w="200px" bg="white" borderColor={"black"} _hover={{ borderColor: "black" }} onChange={(event) => updateSort(event)}>
                            <option value="title1" selected>Title (A-Z)</option>
                            <option value="title2">Title (Z-A)</option>
                            <option value="year1">Year (Old to New)</option>
                            <option value="year2">Year (New to Old)</option>
                            <option value="director">Director</option>
                        </Select>
                    </Center>
                </Container>
            );
        } else {
            return <></>;
        }
    }


    const [filter, setFilter] = useState<string>("Genre");

    const GENRES: string[][] = moviesList.map((x) => x.genre);
    let genreSet: Set<string> = new Set();
    for (let i = 0; i < GENRES.length; i++) {
        for (let j = 0; j < GENRES[i].length; j++) {
            genreSet.add(GENRES[i][j]);
        }
    }

    const genreList: string[] = Array.from(genreSet);
    genreList.sort();
    genreList.unshift("[All]");

    function filterGenre (event: React.ChangeEvent<HTMLSelectElement>){
        setFilter(event.target.value);

        if (filter != "[All]") {
            const filteredList = getMovies(moviesList).filter((movie: Movie) => {
                return movie.genre.includes(filter);
            });
            setMovieList(filteredList);
            // Filter currently not sorting based on sort
            // sortList(sort);
        } else {
            setMovieList(getMovies(moviesList));
            sortList(sort);
        }
    }
    const [second_filter, setSecondFilter] = useState<string>("");

    function filterContains(event: React.ChangeEvent<HTMLInputElement>){
        setSecondFilter(event.target.value);
        if (event.target.value !=  "") {
            const filteredList = getMovies(moviesList).filter((movie: Movie) => {
                return movie.plot.includes(event.target.value);
            });
            setMovieList(filteredList);
        } else{
            setMovieList(getMovies(moviesList));
            sortList(sort);
        }
    }

    function closeButton(index: number): JSX.Element {
        if (localStorage.getItem("role") == "Super") {
            return (<CloseButton position="absolute" top="0" right="0" onClick={() => deleteItem(index)}/>);
        } else {
            return (<></>);
        }
    }

    function deleteItem(index: number) {
        localStorage.setItem("delete", movieList[index].name);
        const newMovieList: Movie[] = [...movieList];
        newMovieList.splice(index, 1);
        setMovieList(newMovieList);
    }

    return(
        <div id="movie-list">
            {addSortField()}

            {/* Filter by Genre feature */}
            <Container>
                <Center mb={5}>
                    <Heading size="md">Filter by Genre:&nbsp;&nbsp;</Heading>
                    (unfinished)&nbsp;
                    <Select w="200px" bg="white" borderColor={"black"} _hover={{ borderColor: "black" }} onChange={(event) => filterGenre(event)}>
                        { genreList.map((genre: string, key: number) => {
                            return (
                                <option value={genre} key={key}>{genre}</option>
                            );
                        }) }
                    </Select>
                </Center>
            </Container>

            {/* Filter by Description Contains Feature  */}
            <Container>
                <Center mb ={5}>
                    <Heading size="md"> Description Contains: </Heading>
                    <FormControl>
                        <Input
                            bg="white" borderColor={"black"} _hover={{ borderColor: "black" }}
                            placeholder="(ex: bride, spacecraft, love)"
                            type="description_contains"
                            value={second_filter}
                            onChange={filterContains}
                        />
                    </FormControl>
                </Center>
            </Container>

            <Container border={"2px solid black"} borderRadius={"20px"} bg="white" p={5} height="1000px" overflowY={"scroll"}>
                <SimpleGrid w="100%" spacing={2} templateColumns={{base: "repeat(3, 1fr)"}}>
                    {movieList.map((movie: Movie, index: number)=>(
                        <div key={null} draggable
                            onDragStart={(event) => changeDrag(event, movie)}>
                            <Card align="center" height="390px" backgroundColor="gray.300" border="1px solid #aaa" pb={3} direction={{base: "row", sm:"column"}} variant="elevated" key={movie.name}>
                                <CardHeader key={movie.name}>
                                    {closeButton(index)}
                                    <Heading size="md">
                                        <Text><span>{movie.name}</span></Text>
                                    </Heading>
                                    <Text><i>{movie.year}<br/>{movie.director}</i></Text>
                                </CardHeader>
                                <CardBody mt={-5}>
                                    <Image width={120} src={movie.poster} alt={movie.name}></Image>
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

                                            {/* <Text fontSize="xs" key={movie.plot}>{movie.plot}</Text> */}
                                            <Text fontSize="xs">    
                                                {movie.plot}      
                                                <br/><br/>
                                                <span>Actors: {expandArray(movie.actors)}</span>
                                                <br/>
                                                <span>Genre: {expandArray(movie.genre)}</span>
                                            </Text>
                                        </PopoverBody>
                                    </PopoverContent>
                                </Popover>
                            </Card>
                        </div>
                    ))}
                </SimpleGrid>
            </Container>
        </div>
    );
}