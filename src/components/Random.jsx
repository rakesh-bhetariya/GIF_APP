import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";



export default function Random() {

  
  // const [gif, setGif] = useState("")
  // const[loading, setLoading] = useState(false)


  // async function fetchDta() {
  //   setLoading(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  //   const {data} = await axios.get(url);
  //   const imageSource  =data.data.images.downsized_large.url;
  //   console.log(imageSource);
  //   setGif(imageSource);
  //   setLoading(false);
  // }

  // useEffect(() => {
  //   fetchDta();
  // }, [] )g


  const{gif,loading,fetchData} = useGif();
  
  // function clickHandler() {
  //   fetchDta();
  // }

  return (
    <div className="w-1/2  bg-green-500 rounded-lg border 
    border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="text-2xl font-bold underline mt-[15px]">
       RANDOM GIF'S
      </h1>

      {
        loading ? (<Spinner />) : (<img src={gif} width="450" />)
      }

      <button onClick={() => fetchData()} 
      className="w-10/12 py-2 text-lg bg-green-100 rounded-lg mb-[20px]">
        Generate
      </button>
    </div>
  );
}
