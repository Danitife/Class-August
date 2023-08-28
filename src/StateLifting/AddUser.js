import React from 'react'

const AddUser = ({setEditUsername, setuserName, addUser, editUser, editForm}) => {
    
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
    </>
  )
}

export default AddUser