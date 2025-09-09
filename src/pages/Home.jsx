import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Movies from '../components/Movies'
import * as t from '../../config.json'

function Home() {
    const [movies, setMovies] = useState(
        JSON.parse(localStorage.getItem('movies')) || []
    )

    useEffect(() => {
        localStorage.setItem("movies", JSON.stringify(movies))
    }, [movies])

    useEffect(() => {
        async function fetchMovies() {
            const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc';
            const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${t.API_READ_TOKEN}`
            }
            };

            try {
                const response = await fetch(url, options)
                const data = await response.json();
                setMovies(data.results)
            }
            catch (error) {
                console.error(error)
            }
        }
        fetchMovies()
    }, []);

  return (
    <div className='bg-slate-900 min-h-screen w-screen'>
        <Header />
        <h1 className='text-white font-bold text-3xl text-center mb-10'>Principais Filmes do Momento</h1>
        <main className='flex gap-5 justify-center m-5 bg-slate-900 flex-wrap'>
            <Movies movies={movies}/>
        </main>
    </div>
  )
}

export default Home