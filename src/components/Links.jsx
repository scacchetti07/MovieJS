import React from 'react'

function Links({children}) {
  return <li className='hover:text-blue-500 transition-colors duration-300 cursor-pointer'><a href="#">{children}</a></li>
}

export default Links