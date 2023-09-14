import React, {useState} from 'react'
import { useSelector } from 'react-redux'

const Event = () => {
  const num = useSelector((state)=> state.globalNum)
    const [myNAme, setmyNAme] = useState("Daniel")
    const [btnNAme, setbtnNAme] = useState("Change Name")
    const [showName, setshowName] = useState(true)
    const [allUser, setallUser] = useState(["User1", "User2", "User3", "User4"])
    const [userInfo, setuserInfo] = useState([{name:"", class: "", gender: "", validated: true}])
    // Hooks(Use State)
    // Virtual Dom

    const changeName = ()=>{
    }
  return (
    <div>
      {num}
        {allUser.map((el, i)=>(
            <div key={i}>{i+1}. {el}</div>
        ))}
        {showName &&
            <h1>{myNAme}</h1>
        }
        <input type={showName? "password": "text"} />
        <button onClick={changeName}>{btnNAme}</button>
    </div>
  )
}

export default Event