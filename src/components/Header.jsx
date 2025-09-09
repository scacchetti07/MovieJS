import React from 'react'

function Header() {
  return (
    <header className='h-20 w-screen text-white font-bold p-4 flex gap-5 items-center'>
        <h1 className='text-2xl'>Movie <span className='text-blue-500'>JS</span></h1>
        <nav>
            <ul className='flex gap-4 justify-center'>
                <li className='hover:text-blue-500 transition-colors duration-300 cursor-pointer'><a href="#">Home</a></li>
                <li className='hover:text-blue-500 transition-colors duration-300 cursor-pointer'><a href="#">Pesquisa</a></li>
                <li className='hover:text-blue-500 transition-colors duration-300 cursor-pointer'><a href="#">Login</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header