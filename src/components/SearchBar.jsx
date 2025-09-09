import React, { useState } from 'react';

function SearchBar({ onSearch, setMovies }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setIsLoading] = useState(false)
    const [searched, setSearched] = useState(false)

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      onSearch(searchTerm);
    }
  }

  async function handleSearch(searchTerm) {
    // Evita buscas com o campo vazio
    if (!searchTerm.trim()) {
      setMovies([]);
      setSearched(false);
      return;
    }

    setIsLoading(true);
    setSearched(true); // Marca que uma busca foi iniciada
    try {
      const url = `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&include_adult=false&language=pt-BR&page=1`;
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${t.API_READ_TOKEN}`,
        },
      };

      const response = await fetch(url, options);
      const data = await response.json();
      setMovies(data.results || []); // Garante que movies seja sempre um array

    } catch (error) {
      console.error("Falha ao buscar filmes:", error);
      setMovies([]); // Limpa os filmes em caso de erro
    } finally {
      setIsLoading(false); // Garante que o loading termine
    }
  }

  return (
    <div className='relative flex justify-center'>
      <input
        type="text"
        placeholder='Pesquise um filme'
        className='w-full rounded-md bg-slate-800 border border-slate-600 text-white p-3 font-normal focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-shadow'
        value={searchTerm}
        title='Pressione Enter...'
        onChange={(event) => setSearchTerm(event.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default SearchBar;