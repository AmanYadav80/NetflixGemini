import { useDispatch } from "react-redux"
import { options } from "../utils/constants";
import { useEffect } from "react";
import { addPopularMovies } from "../utils/moviesSlice"
const usePopularMovies=async()=>{
    const dispatch=useDispatch();
    const getPopularMovies=async()=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options);
        const json=await data.json();
        // console.log("Popular Movies",json);
        dispatch(addPopularMovies(json.results));
    }
    useEffect(()=>{
        getPopularMovies();
    },[])
}
export default usePopularMovies;