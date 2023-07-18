import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";


export default function Tag() {

  const [tag,setTag] = useState("MMA")
  
  // const [gif, setGif] = useState("")
  // const[loading, setLoading] = useState(false)


  // async function fetchDta() {
  //   setLoading(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  //   const {data} = await axios.get(url);
  //   const imageSource  =data.data.images.downsized_large.url;
  //   console.log(imageSource);
  //   setGif(imageSource);
  //   setLoading(false);
  // }

  // useEffect(() => {
  //   fetchDta();
  // }, [] )
  
  // function clickHandler() {
  //   fetchDta();
  // }  insted of this function we wrote at line no 57 in short 

  const{gif,loading,fetchData} = useGif(tag);

  function changeHandler(event) {
    setTag(event.target.value)
  } 
  // if youwant write this code at line no 53 so i can write like this (event) => setTag{event.target.value}

  return ( 
    <div className="w-1/2  bg-blue-500 rounded-lg border 
    border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="text-2xl font-bold underline mt-[15px]">
       A RANDOM {tag} GIF'S
      </h1>

      {
        loading ? (<Spinner />) : (<img src={gif} width="450" />)
      }

<input 
  className="w-10/12 py-2 text-lg bg-green-100 rounded-lg mb-3px] text-center" 
  onChange={changeHandler} 
  value={tag}
/>

      <button onClick={() => fetchData(tag)} 
      className="w-10/12 py-2 text-lg bg-green-100 rounded-lg mb-[20px]">
        Generate
      </button>
    </div>
  );
}
