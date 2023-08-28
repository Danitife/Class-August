import React,{useEffect, useState} from 'react'

const About = () => {
    const [myName, setmyName] = useState("")

    useEffect(() => {
        alert("Landed")
    }, [myName])
    
    const setName = ()=>{
        setmyName("Daniel")
    }
    const doSomething = ()=>{
        console.log("Something");
    }
  return (
    <div>
        <h1>Welcome to {myName} About Page</h1>
        <button onClick={setName}>SetNAme</button>
        <button onClick={doSomething}>Click me</button>
    </div>
  )
}

export default About