import React from 'react'

function Cards(props) {
  return (
    <article className='flex justify-center flex-col gap-1 w-xs rounded-md border-2 border-blue-500 text-white'>
        <img src={props.image} alt="Image" className='block w-xs h-40 ml-auto mr-auto rounded-tl-md roundend-tr-md border-b-2 border-blue-500'/>
        <div className='p-3 text-center'>
        <h3 className='font-bold'>{props.title}</h3>
        <p>{props.about}</p>

        </div>
    </article>
  )
}

export default Cards