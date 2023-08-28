import React from 'react'

const DispUser = ({allUser, delUser, showEditForm}) => {
  return (
    <>
        {allUser.map((el, i)=>(
        <p key={i}>
            {el} 
            <button onClick={()=>showEditForm(`${i}`)} className='mx-10 bg-yellow-400 p-5 rounded-md'>E</button>
            <button onClick={()=>delUser(`${i}`)} className='bg-red-400 p-5 rounded-md'>D</button>
        </p>
      ))}
    </>
  )
}

export default DispUser