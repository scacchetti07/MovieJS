import React from 'react'

function Movies({ movies, searched }) {
  
  if (searched && movies.length === 0) {
    return <p className="text-center text-slate-400 text-lg">Nenhum filme encontrado com esse termo.</p>;
  }

  return (
    <>
      {movies.map((movie) => (
        <article className='flex flex-col gap-1 w-xs rounded-md border-2 border-blue-500 text-white' id={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt="Image" className='block w-xs h-40 ml-auto mr-auto rounded-tl-md roundend-tr-md border-b-2 border-blue-500'/>
          <div className='p-3 space-y-2'>
            <h3 className='font-bold text-center'>{movie.title}</h3>
            { /* O texto será exibido até o primeiro ponto encontrado. */ }
            <p>{movie.overview.slice(0, [...movie.overview].findIndex(c => c == '.')) || "Sem overview."}</p>
          </div>
        </article>
      ))}
    </>
  );
}

export default Movies