import React, { useState } from "react";
import { Movie } from "./Movie";
import { moviesList } from "./MoviesList";
import { Card, CardHeader, CardBody, Text, Input, Slider, SliderFilledTrack, SliderThumb, SliderTrack, SliderMark, Container, CloseButton, Center, filter, Select, Divider, FormControl } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import "../DragDropList.css";
import { Heading,Image,Box } from "@chakra-ui/react";
import {Users} from "./Users";


//add an aspect for giving a review once the movie is in the list 


export function DragAndDrop({ name }: { name: string }): JSX.Element {

    const [movieList, setMovieList] = useState<Movie[]>([]);
    const [sort, setSort] = useState<string>("title1");

    function handleOnDrop(e: React.DragEvent) {
        const widgetType = JSON.parse(
            e.dataTransfer.getData("widgetType")
        ) as Movie;
        setMovieList([...movieList, widgetType]);
    }

    function handleDragOver(event: React.DragEvent) {
        event.preventDefault();
    }

    function deleteItem(index: number) {
        const newMovieList: Movie[] = [...movieList];
        newMovieList.splice(index, 1);
        setMovieList(newMovieList);
    }


    function sortList(type: string) {
        let sortedList: Movie[] = [...movieList]; 
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

    // This needs to auto-update when a MovieCards X is clicked
    function delAllItems(): JSX.Element {
        if (localStorage.getItem("delete")) {
            for (let i = movieList.length - 1; i >= 0; i--) {
                if (movieList[i].name == localStorage.getItem("delete")) {
                    movieList.splice(i, 1);
                }
            }
            localStorage.removeItem("delete");
        }
        return (<></>);
    }

    function addSortField(): JSX.Element {
        if (localStorage.getItem("role") == "User") {
            return (
                <Container mb="-1">
                    <Center>
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

    function getUser(): string {
        return localStorage.getItem("user") || "User";
    }

    const [userFilter, setUserFilter] = useState<string>("");

    function userFilterContains(event: React.ChangeEvent<HTMLInputElement>){
        setUserFilter(event.target.value);
        if (event.target.value !=  "") {
            const filteredList = [...movieList].filter((movie: Movie) => {
                return movie.plot.includes(event.target.value);
            });
            setMovieList(filteredList);
        } else{
            setMovieList([...movieList]);
            sortList(sort);
        }
    }

    return(
        
        <div id="movie-list" onDrop={handleOnDrop}
            onDragOver={handleDragOver}>
            <Heading>
                <Text size="md">{getUser()}&apos;s List</Text>
            </Heading>
            {delAllItems()}
            <br/>
            {addSortField()}
            <br/>
            {/* Filter by Description Contains Feature  */}
            <Container>
                <Center mb ={0}>
                    <Heading size="md"> Description Contains: </Heading>
                    <FormControl>
                        <Input
                            bg="white" borderColor={"black"} _hover={{ borderColor: "black" }}
                            placeholder="(ex: bride, spacecraft, love)"
                            type="description_contains"
                            value={userFilter}
                            onChange={userFilterContains}
                        />
                    </FormControl>
                </Center>
            </Container>
            <br/>
            <SimpleGrid spacing={3} columns={1}>
                <Box borderWidth="3px" borderRadius="lg" bg="gray.400" p={10} w="95%" h="100%">
                    <SimpleGrid style={{"height": "auto", "minHeight": "250px"}} w="600px" p="4"  spacing = {5} templateColumns={{base: "repeat(3, 1fr)"}}>   
                        {movieList.map((movie: Movie, index: number): JSX.Element => (
                            <Card height="300px" align="center" backgroundColor="gray.300" border="1px solid #aaa" pb={5} maxW="sm" direction={{base: "row", sm:"column"}} overflow="hidden" variant="elevated" key={movie.name}>
                                <CardHeader key={movie.name}>
                                    <CloseButton position="absolute" top="0" right="0" onClick={() => deleteItem(index)}/>
                                    <Heading size="sm">
                                        <Text><span>{movie.name} ({movie.year})</span></Text>
                                    </Heading>
                                    <Text><i>{movie.director}</i></Text>
                                </CardHeader>
                                <CardBody mt={-5}>
                                    <Image width={79} src={movie.poster} alt={movie.name}></Image>
                                    <Container mt="2" mb="-1">Rating:</Container>
                                    <Slider defaultValue={5} min={1} max={5} step={1}>
                                        {[1, 2, 3, 4, 5].map((num: number): JSX.Element => {
                                            return (
                                                <SliderMark key={num} value={num} fontSize="sm" mt="2" ml="-1">{num}</SliderMark>
                                            );
                                        })}
                                        <SliderTrack bg='red.100'>
                                            <Box position='relative' right={10} />
                                            <SliderFilledTrack bg='tomato' />
                                        </SliderTrack>
                                        <SliderThumb boxSize={2} />
                                    </Slider>
                                </CardBody>
                            </Card>
                        ))}
                    </SimpleGrid>
                </Box>
            </SimpleGrid>
            <br/><br/>
            <Center mt="3" mb="5">
                <Divider border="1px solid #333" my="auto" w="60%"></Divider>
            </Center>
            <br/>
        </div>
    );
 

    /*
    return(
        <SimpleGrid spacing={3} columns={2}>
            <MainMovieList></MainMovieList>
            <CustomMovieList></CustomMovieList>
        </SimpleGrid>
    );
    */
}