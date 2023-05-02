import React from "react";
import { Movie } from "./Movie";
import { SimpleGrid, Card, CardBody,Text,CardHeader, Image, Box, Heading, Flex, Spacer, CardFooter } from "@chakra-ui/react";
import { moviesList } from "./MoviesList";
import { Button } from "@chakra-ui/react";
import { Popover, PopoverBody,PopoverTrigger, PopoverArrow, PopoverCloseButton,PopoverContent} from "@chakra-ui/react";

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

export function MovieCards(): JSX.Element {
    
    const movieArray = getMovies(moviesList);

    function expandArray(array: string[]):string{
        const copy = [...array];
        const listOfItems = copy.join(", ");
        return listOfItems;
    }

    return(
        <SimpleGrid h="430%" w="100%" p="3vh"  spacing = {2} templateColumns={{base: "repeat(4, 1fr)"}}>
            {moviesList.map((movie)=>(
                <Card align="center" backgroundColor="gray.300" maxW="md" direction={{base: "row", sm:"column"}} overflow="hidden" variant="elevated" key={movie.name}>
                    <CardHeader key={movie.name}>
                        <Heading size="sm">
                            <Text><span>{movie.name}</span></Text>
                            <Text><span>{movie.year}</span></Text>
                        </Heading>
                    </CardHeader> 
                    <CardBody>
                        <Image htmlWidth={120} src={movie.poster} alt={movie.name}></Image>
                        <div></div>
                    </CardBody>
                    <Popover>
                        <PopoverTrigger>
                            <Button mr={4}>Show More</Button>
                        </PopoverTrigger>
                        <PopoverContent>
                            <PopoverArrow />
                            <PopoverCloseButton/>
                            <PopoverBody>
                                <Text></Text>
                                <Text fontSize="xs" key={movie.plot}>{movie.plot}</Text>
                                <Text fontSize="xs">                                
                                    <div></div>
                                    <span>Actors: {expandArray(movie.actors)}</span>
                                    <div></div>
                                    <span>Genre: {expandArray(movie.genre)}</span>
                                </Text>
                            </PopoverBody>
                        </PopoverContent>
                    </Popover>
                </Card>
            ))}
        </SimpleGrid>
    );
}
