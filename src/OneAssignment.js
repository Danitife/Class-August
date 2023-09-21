import React from 'react'
import { studentsInfo } from './info'
import { useParams } from 'react-router-dom'

const OneAssignment = () => {
    const paramz = useParams()
    let id = paramz.id;
    let info = studentsInfo.find((el)=> el.name == id)
    console.log(info);
    console.log(paramz);
  return (
    <div>
        {info &&
            <h1>{info.name}</h1>
        }
    </div>
  )
}

export default OneAssignment