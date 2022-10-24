import React from 'react'

export const Header = ({onSubmit, onInput, value}) => {
  return (
    <header>
      <div className="container">
        <h1 className="heading">Emoji Finder</h1>
        <p className="heading_item">Find emoji by keywords</p>
        <form onSubmit={onSubmit} className="form" action="">
          <input onInput={onInput} value={value} className="form_in" type="text" placeholder="Placeholder" />
        </form>
      </div>
    </header>
  )
}
