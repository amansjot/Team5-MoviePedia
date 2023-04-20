import React, { useState } from "react";

export function Movie({name, poster, year, actors, plot, director, genre, rating }:{
    name: string, poster: string, year: number, actors: string[], plot: string, director: string, genre: string, rating: number }
): JSX.Element{
    const [n, setName] = useState<string>("John Doe");
    const [pos, setPoster] = useState<string>("pretty image");
    const [y, setYear] = useState<number>(2023);
    const [a, setActors] = useState<string[]>(["Viola Davis"]);
    const [plt, setPlot] = useState<string>("This movie has stuff happening in it.");
    const [d, setDirector] = useState<string>("Spike Lee");
    const [g, setGenre] = useState<string>("Horror");
    const [r, setRating] = useState<number>(10);
    return(
        <div>
            
        </div>
    );
}