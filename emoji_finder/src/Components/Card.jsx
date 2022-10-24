import React from 'react'

export const Card = ({simbol, title, keywords}) => {
  return (
    <div className="card">
      <h2 className="img">{simbol}</h2>
      <p className='card_n'>{title}</p>
      <p className='text'>{keywords}</p>
      </div>
  )
}


