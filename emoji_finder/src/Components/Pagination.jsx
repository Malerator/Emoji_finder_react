
import React from 'react'

export const Pagination = ({lastIndex, setCurrentPage, currentPage, getPerPage}) => {
  let arr = []
for (let i = 1; i <= lastIndex; i++) {
    arr.push(i)
  }
  let fNum = currentPage;
  let lNum = currentPage + 4;
  let arr2 = arr.slice(fNum -1, lNum)

  return (
<div className='container'>
  <div className='buttons'>
    <div>
<button className='list' onClick={() => setCurrentPage(1)}>First page</button>

        <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)} className='list'>Prev page</button>

  {arr2.map((elem, index) => <button key={index} onClick={() => setCurrentPage(elem)} className='list'>{elem}</button>)}

        <button disabled={currentPage === lastIndex} onClick={() => setCurrentPage(currentPage + 1)} className='list'>Next page</button>

<button className='list' onClick={() => setCurrentPage(lastIndex)}>Last page</button>
  </div>

<select className='select list' onChange={getPerPage}>
        <option value={12}>12</option>
        <option value={24}>24</option>
        <option value={48}>48</option>
      </select>
  </div>

</div>
  
  )
}
