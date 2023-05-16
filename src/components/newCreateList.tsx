import React, { useState } from "react";
import { Button, SimpleGrid, FormControl, FormLabel, FormHelperText, Input, Heading, Container, HStack} from "@chakra-ui/react";
import { Movie } from "./Movie";
import { Card, CardHeader, CardBody, Text, Slider, SliderFilledTrack, SliderThumb, SliderTrack, SliderMark,  CloseButton, Center, filter, Select } from "@chakra-ui/react";
import "../DragDropList.css";
import { Image,Box } from "@chakra-ui/react";


export default function CustomList(){
    const [movieList, setMovieList] = useState<Movie[]>([]);
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
        //setSort(event.target.value);
    }

    
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

    return(
        <div id="movie-list" onDrop={handleOnDrop}
            onDragOver={handleDragOver}>
            <Heading>
                <Text size="md">{}</Text>
            </Heading>
            {delAllItems()}
            <br/>
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
        </div>

    );
}


export function CreateList(): JSX.Element {
    const [usermainList, setusermainList] = useState<string[]>([]);
    const [userlistbyPreference, setuserPreferenceList] = useState<string[]>([]);
    const [preference, setPreference] = useState<string>("");

    const [sort, setSort] = useState<string>("title1");
   
    function updateNewName(event: React.ChangeEvent<HTMLInputElement>) {
        setPreference(event.target.value);
    }

    function addMovieTomainList(newMovie: string) {
        setusermainList([...usermainList, newMovie]);

    }

    function clearmainList() {
        setusermainList([]);
    }

    function addMovieToPreferenceList(newMovie: string) {
        if (!userlistbyPreference.includes(newMovie)){
            setuserPreferenceList([...userlistbyPreference, newMovie]);

        }
    }

    function clearPreferenceList() {
        setuserPreferenceList([]);
    }

    /*
    function boxOnClick(){
        clearPreferenceList();
        CreateList();
    }*/

    return (
        <div>
            <Container mt="-6">
                <Heading size="lg">Create a List</Heading>
            (not implemented)
                <div>
                    {usermainList.map((movie: string) => (
                        <li key={movie}>{movie}</li>
                    ))}
                    <br/>
                    <FormControl>
                        <HStack m="0 auto">
                            <Input bg="white" borderColor="black" _hover={{ borderColor: "black" }} onChange={updateNewName} placeholder="List Name (ex. Favorite Movies, Watch List, Horror List)"  type = 'text'/>
                            <Button border="1px solid black" pl="6" pr="6" borderColor="black" onClick={CreateList}>Create List</Button>
                        </HStack>
                    </FormControl>
                    <div>
                        {userlistbyPreference.map((movie: string) => (
                            <li key={movie}>{movie}</li>
                        ))}
                        {/* <Button onClick={clearPreferenceList}>Clear List</Button> */}
                    </div>
                </div>
            </Container>
            
        </div>
    );
}
