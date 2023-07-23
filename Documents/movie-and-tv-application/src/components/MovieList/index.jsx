import React,{useEffect,useState} from "react";
import { getMovies } from "../../utilis/utilities";
import './style.css';
import ImageContainer from "../../atoms";



// const IMAGE_BASE_URL=process.env.REACT_APP_IMAGE_BASE_URL;
const MovieList=()=>{
const [movies,setMovies]= useState([]);
const[loading,setLoading]=useState(false);

useEffect(()=>{
    (async()=>{
        const movies=await getMovies()
        setMovies(movies.results);
        setLoading(false);
        console.log({movies});
    })();
},[]);
if (loading){
    return <h1>Loading....</h1>
}
    return (
        <div className="image_container">
{
    movies&&!loading&&movies.length > 0 && movies.map((item)=>(
         <ImageContainer props={item}/>
            // <div key={item.id}>
            //    <img
            //     src={`${IMAGE_BASE_URL}${item.poster_path}`}
            //     alt={item.title}/>

            // </div>
        ) )}
        </div>
    );
};
export default MovieList;