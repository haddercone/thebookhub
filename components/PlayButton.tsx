import React from 'react'
import { FaPlay } from 'react-icons/fa'
import { FaBookOpen } from "react-icons/fa";
const PlayButton = () => {
  return (
    <button 
        className="
          transition 
          opacity-0 
          rounded-full 
          flex 
          items-center 
          justify-center 
          bg-amber-700
          p-4 
          drop-shadow-md 
          group-hover:opacity-100 
          hover:scale-110
        "
      >
        <FaBookOpen className="text-black" />
      </button>
  )
}

export default PlayButton