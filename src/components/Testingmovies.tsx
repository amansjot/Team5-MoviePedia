import React from "react";
import { Movie } from "./Movie";
//import movieData from "/Users/juliaoneill/Team5-MoviePedia/src/data/movie.json";
//import backupMovies from "/Users/juliaoneill/Team5-MoviePedia/src/data/movie.json";
import { SimpleGrid, Card, CardBody,CardBodyProps,Text,CardHeader, Image, CardFooter, Box, Heading, Flex, Spacer } from "@chakra-ui/react";
import { moviesList } from "./movies";

interface MovieListProps{
    movies: Movie[];
}

export function getMovies(movies: Movie[]): Movie[] {
    const movieCopy = movies.map((movieData: Movie): Movie => ({...movieData}));
    return movieCopy;
}

const movieArray = getMovies(moviesList);

export function movieListProperty(props: MovieListProps){
    const moviesList = props;
}

export function TestingMovies(): JSX.Element {
    
    const movieArray = getMovies(moviesList);

    function expandArray(array: string[]):string{
        const copy = [...array];
        const listOfItems = copy.join(", ");
        return listOfItems;
    }

    return(
    // <div>movies</div>
        <SimpleGrid w="200vh" h="400vh" p="4vh"  spacing = {2} templateColumns={{base: "repeat(4, 1fr)"}}>
            {moviesList.map((movie)=>(
                <Card maxW="md" direction={{base: "row", sm:"column"}} overflow="hidden" variant="elevated" key={movie.name}>
                    <CardHeader key={movie.name}>
                        <Box>
                            <Heading size="sm">
                                {movie.name}
                            </Heading>
                        </Box>
                    </CardHeader>
                    <Box>
                        <CardBody>
                            <Flex>
                                <Image maxW={{base: "100%", sm:"100px"}} src={movie.poster} alt="poster"></Image>
                                <Spacer></Spacer>
                                <Text fontSize="xs" key={movie.plot}>{movie.plot}</Text>
                                <Text fontSize="xs">                                
                                    <span>Year: {movie.year}</span>
                                    <div></div>
                                    <span>Actors: {expandArray(movie.actors)}</span>
                                    <div></div>
                                    <span>Genre: {expandArray(movie.genre)}</span>
                                </Text>
                            </Flex>
                        </CardBody>
                    </Box>
                </Card>
            ))}
        </SimpleGrid>
    );
}
