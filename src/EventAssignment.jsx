import React from 'react'
import { useState } from 'react'
import ButtonComp from './components/ButtonComp'


const EventAssignment = () => {
 let studentsInfo=[
    {name:"Ade", class: "jss1", gender: "male", validated: true},
    {name:"Bayo", class: "jss2", gender: "male", validated: false},
    {name:"Shile", class: "jss3", gender: "male", validated: true},
    {name:"Muiywa", class: "jss1", gender: "male", validated: false},
    {name:"Akin", class: "jss2", gender: "male", validated: true},
    {name:"Bobo", class: "jss3", gender: "male", validated: false},
    {name:"Zainab", class: "jss3", gender: "female", validated: true},
    {name:"Victoria", class: "jss2", gender: "female", validated: true},
    {name:"Mariam", class: "jss1", gender: "female", validated: false},
    {name:"Tolani", class: "jss2", gender: "female", validated: false},
    {name:"Bose", class: "jss1", gender: "female", validated: true},
    {name:"Patience", class: "jss1", gender: "female", validated: false},
    {name:"Gloria", class: "jss1", gender: "female", validated: true},

    
]
const [allStudents, setallStudents] = useState(studentsInfo)
const displayAllstudents=()=>{
    setallStudents(studentsInfo)
}
const showValidated=()=>{
const validated =allStudents.filter((element)=> element.validated)
setallStudents(validated)
}
const showUnValidated=()=>{
    const unvalidated = allStudents.filter((element)=> !element.validated)
    setallStudents(unvalidated)

}
  return (
    <>
    <div className='flex mb-5 ml-9'>
    <button onClick={displayAllstudents} className='bg-green-600 rounded p-2 mr-3'>All Students</button>
    <button onClick={showValidated} className='bg-orange-600 rounded p-2 mr-3'>Validated</button>
    <button onClick={showUnValidated} className='bg-purple-600 rounded p-2'>Not Validated</button>
    <ButtonComp daniel="Click me" color="red" />
    <ButtonComp daniel="Click you" color="blue"/>
    <ButtonComp daniel="Click this" color="yellow"/>
    </div>
<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-white bg-teal-500 uppercase dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    S/N
                </th>
                <th scope="col" class="px-6 py-3">
                    NAME
                </th>
                <th scope="col" class="px-6 py-3">
                    CLASS
                </th>
                <th scope="col" class="px-6 py-3">
                    GENDER
                </th>
                <th scope="col" class="px-6 py-3">
                    STATUS
                </th>
            </tr>
        </thead>
    {allStudents.map((element,index)=>(
        <tbody>
            <tr key={index} class="bg-blue-500 text-white font-sans font-bold border-b dark:bg-gray-800 dark:border-gray-700">
              <td>{index+1}</td> 
              <td>{element.name}</td> 
              <td>{element.class}</td> 
              <td>{element.gender}</td> 
              <td>{element.validated  ? "validated": "Not Validated"}</td> 
              
            </tr>
            
        </tbody>
        ))}
    </table>
</div>

    </>
  )
}

export default EventAssignment