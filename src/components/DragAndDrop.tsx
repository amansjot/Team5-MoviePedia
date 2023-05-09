import React, { useState } from "react";
import { useDrop } from "react-dnd";
import { Movie } from "./Movie";
import { moviesList } from "./MoviesList";
import { Card, CardHeader, CardBody, Text } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import "./DragDropList.css";
import { Heading,Image,Box } from "@chakra-ui/react";

export function DragAndDrop(): JSX.Element {
    
    
    const [movieList, setMovieList] = useState<Movie[]>([]);

    function handleOnDrop(e: React.DragEvent) {
        const widgetType = JSON.parse(
            e.dataTransfer.getData("widgetType")
        ) as Movie;
        console.log("widgetType", widgetType);
        setMovieList([...movieList, widgetType]);
    }

    function handleDragOver(event: React.DragEvent) {
        event.preventDefault();
    }

    return(
        <div id="movie-list" onDrop={handleOnDrop}
            onDragOver={handleDragOver}>
            <Box borderWidth="3px" borderRadius="lg" bg="gray.600" p={10} w="75%" h="100%">
                <Heading>
                    <Text size="md">Main List</Text>
                </Heading>
                <SimpleGrid h="500px" w="600px" p="4"  spacing = {5} templateColumns={{base: "repeat(3, 1fr)"}}>   
                    {movieList.map((movie)=>(
                        <Card align="center" backgroundColor="gray.300" border="1px solid #aaa" pb={5} maxW="sm" direction={{base: "row", sm:"column"}} overflow="hidden" variant="elevated" key={movie.name}>
                            <CardHeader key={movie.name}>
                                <Heading size="sm">
                                    <Text><span>{movie.name} ({movie.year})</span></Text>
                                </Heading>
                                <Text><i>{movie.director}</i></Text>
                            </CardHeader>
                            <CardBody mt={-5}>
                                <Image width={79} src={movie.poster} alt={movie.name}></Image>
                                <div></div>
                            </CardBody>
                        </Card>
                    ))}
                    
                </SimpleGrid>
            </Box>
        </div>
    );
}