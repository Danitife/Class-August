import React,{useState} from 'react'
import AddUser from './AddUser'
import DispUser from './DispUser'

const InfoWeNeed = () => {
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
    
    <div>
        <AddUser
         editForm={editForm}
         editUser = {editUser}
         setuserName = {setuserName}
         setEditUsername = {setEditUsername}
         addUser={addUser} />

         
        <DispUser
         allUser = {allUser}
         delUser = {delUser}
         showEditForm = {showEditForm}
        />
    </div>
  )
}

export default InfoWeNeed