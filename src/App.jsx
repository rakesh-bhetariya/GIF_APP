import Random from "./components/Random"
import Tag from "./components/Tag"

export default function App() {
  return (
    <div className="relative flex flex-col items-center w-full h-screen overflow-x-hidden background">
      <h1 className="w-11/12 text-center bg-white rounded-lg mt-[40px]
     py-2 text-4xl font-bold">
        RANDOM GIFS
      </h1>
      
      <div className="flex flex-col items-center w-full gap-y-10 mt-[30px] ">
        <Random />
        <Tag />
      </div>
    </div>
  )
}
