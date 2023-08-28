import React, { useState } from 'react'

const User = () => {
    const [userName, setuserName] = useState("")
    const [allUser, setallUser] = useState([])
    const [EditUsername, setEditUsername] = useState("")
    const [editForm, seteditForm] = useState(false)
    const [userIndex, setuserIndex] = useState("")

    const addUser = (e)=>{
        e.preventDefault()
        setallUser([...allUser, userName])
        console.log(allUser);
    }
    const delUser = (i)=>{
        allUser.splice(i, 1);
        setallUser([...allUser])
    }
    const showEditForm = (i)=>{
      seteditForm(true)
      setuserIndex(i)
    }
    const editUser = ()=>{
      allUser.splice(userIndex, 1, EditUsername)
      setallUser([...allUser])
    }
  return (
    <>
      <form action="">
        <input onChange={(e)=>setuserName(e.target.value)} type="text" /> <br /><br /> 
        <button onClick={(event)=>addUser(event)}>Add User</button>
      </form>  
      {editForm &&
        <form action="">
          <input type="text" onChange={(e)=>setEditUsername(e.target.value)} /> <br /><br />
          <button onClick={editUser}>Edit</button>
        </form>
      }

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

export default User