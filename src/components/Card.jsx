import React from 'react'

const Card = ({title, description}) => {
  return (
    <div className='flex justify-center items-center mt-50!'>
        <div className="card h-auto w-200 border bg-cyan-800 py-3 px-4 font-bold rounded-lg">
                <h2 className='text-4xl text-white'>{title}</h2>
                <p className='font-medium text-slate-300 mt-10 '>{description}</p>
        </div>
    </div>
  )
}

export default Card
