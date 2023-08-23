import React, { useState } from 'react'

const User = () => {
    const [userName, setuserName] = useState("")
    const [allUser, setallUser] = useState([])

    const addUser = (e)=>{
        e.preventDefault()
        setallUser([...allUser, userName])
        console.log(allUser);
    }
    const delUser = (i)=>{
        allUser.splice(i, 1);
        setallUser([...allUser])
    }
  return (
    <>
      <form action="">
        <input onChange={(e)=>setuserName(e.target.value)} type="text" /> <br /><br /> 
        <button onClick={(event)=>addUser(event)}>Add User</button>
      </form>  

      {allUser.map((el, i)=>(
        <p key={i}>
            {el} 
            <button className='mx-10 bg-yellow-400 p-5 rounded-md'>E</button>
            <button onClick={()=>delUser(`${i}`)} className='bg-red-400 p-5 rounded-md'>D</button>
        </p>
      ))}
    </>
  )
}

export default User