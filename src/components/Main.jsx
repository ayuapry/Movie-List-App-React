import axios from 'axios'
import React, { useEffect, useState } from 'react'
import requests from '../Requests'
import {AiOutlinePlayCircle} from 'react-icons/ai'

export const Main = () => {
const [movies, setMovies] = useState([])

const movie = movies[Math.floor(Math.random() * movies.length)]

useEffect (() => {
    axios.get(requests.requestPopular).then((response) => {
        setMovies(response.data.results)
    })
}, [])
// console.log(movie)

const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + '...';
    } else {
      return str;
    }
  };

  return (
    <div className='w-full h-[600px] text-white '>
        <div className='w-full h-full'>
            <div className='absolute w-full h-[600px] bg-gradient-to-r from-black '></div>
            <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
            <div className='absolute w-full top-[20%] p-4 md:p-8 '>
                <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
            <p className='text-gray-400 text-sm my-4'>Released: {movie?.release_date}</p>
            <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'> {truncateString(movie?.overview,200)}</p>
            <div className='my-4'>
                <button className=' bg-red-600 rounded-full text-white hover:bg-red-400 hidden md:flex pl-5 py-3 mr-4 w-[170px]'>
                <AiOutlinePlayCircle size={25} className='mr-2' />Watch Trailer 
                </button>
            </div>
            </div>
        </div>
    </div>
  )
}