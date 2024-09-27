import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github(){

    const data = useLoaderData();

    // We have two way to fetch api one is below other one is Loader

    // const [data, setData] = useState({});

    // useEffect(() => {
    //     fetch('https://api.github.com/users/adnanbelim')
    //     .then(response => {
    //         if(!response.ok){
    //             throw new Error("API responsed was not ok");
    //         }
    //         return response.json()
    //     })
    //     .then(data => {
    //         console.log(data);
    //         setData(data);
    //     })
    //     .catch( e => {
    //         console.error("Api data not found");
    //     })
    // }, [])
    
    return(
        <div className="bg-red-400 p-5">
            <h2 className="text-center p-10 bg-red-400 text-white font-bold">Git Hub Followers : {data.followers}</h2>
            <img src={data.avatar_url} alt="Git_piture" width={300} className="text-center mx-auto rounded-lg shadow-lg"/>
        </div>
    )
}

// This is another way to fetch api using useLoader hook 
// 1) create function to fetch api
// 2) go on Route (main.jsx) and enter attribute in <Github /> tag name =  loader={enter function name}
// 3) assign a variable to useLoaderData hook

export const loaderAPI = async () => {
    const response = await fetch('https://api.github.com/users/adnanbelim');
    return response.json();
}
