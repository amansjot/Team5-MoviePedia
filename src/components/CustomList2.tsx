import React, { useState } from "react";
import { Movie } from "./Movie";
import { moviesList } from "./MoviesList";
import { Card, CardHeader, CardBody, Text, Input, Slider, SliderFilledTrack, SliderThumb, SliderTrack, SliderMark, Container, CloseButton, Center, filter, Select, Button } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import "../DragDropList.css";
import { Heading,Image,Box } from "@chakra-ui/react";
import PropTypes from "prop-types";


export function CustomList2({ name }: { name: string }): JSX.Element {

    const [listName, setListName] =useState<string>("");
    const [movieList, setMovieList] = useState<Movie[]>([]);
    const [visible, setVisible]= useState<boolean>(false);

    function changeHidden(){
        setVisible(!visible);
    }    

    function changeListName(event: React.ChangeEvent<HTMLInputElement>){
        setListName(event.target.value);
    }

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


    function deleteItem(index: number) {
        const newMovieList: Movie[] = [...movieList];
        newMovieList.splice(index, 1);
        setMovieList(newMovieList);
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
        <div>
            <Button data-testid={"button"} onClick={changeHidden}>Second Custom List</Button>{visible &&
                 <div data-testid={"userList"} id="movie-list" onDrop={handleOnDrop}
                     onDragOver={handleDragOver}>
                     <Heading>
                         <Input width="80%" onChange={changeListName} size ="md" placeholder="Input New List Name"></Input>
                         <Text>{listName}</Text>
                     </Heading>
                     
                     {delAllItems()}
                    
                     <SimpleGrid spacing={3} columns={1}>
                         <Box borderWidth="3px" borderRadius="lg" bg="gray.400" p={10} w="95%" h="100%">
                             <SimpleGrid style={{"height": "auto", "minHeight": "250px"}} w="600px" p="4"  spacing = {5} templateColumns={{base: "repeat(3, 1fr)"}}>   
                                 {movieList.map((movie: Movie, index: number): JSX.Element => (
                                     <Card data-testid={"movieCard"} height="300px" align="center" backgroundColor="gray.300" border="1px solid #aaa" pb={5} maxW="sm" direction={{base: "row", sm:"column"}} overflow="hidden" variant="elevated" key={movie.name}>
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
                 </div>}
        </div>
    );

}