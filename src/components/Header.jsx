import React from 'react'
import SearchBar from './SearchBar'
import Links from './Links'

function Header() {
  return (
    <header className='h-20 w-screen text-white font-bold p-4 flex gap-5 items-center'>
        <h1 className='text-2xl'>Movie <span className='text-blue-500'>JS</span></h1>
        <nav>
            <ul className='flex gap-4 justify-center'>
                <Links>Home</Links>
                <Links>Categorias</Links>
                <Links>Login</Links>
            </ul>
        </nav>
        <SearchBar />
    </header>
  )
}

export default Header