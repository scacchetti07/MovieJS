import React from 'react'
import { Search } from 'lucide-react'

function SearchBar(props) {
    


  return (
    <div className='relative flex gap-2'>
        <input type="text" placeholder='Pesquise aqui...' className='rounded-md bg-white text-black p-2 font-normal'/>
    </div>
  )
}

export default SearchBar