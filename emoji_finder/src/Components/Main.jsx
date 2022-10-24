import React from 'react'

export const Main = ({children}) => {

  return (
    <main>
      <div className="container">
        <div className="grid">{children}</div>
      </div>
    </main>
  )
}
