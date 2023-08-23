import React from 'react'

const ButtonComp = (props) => {
  return (
    <div>
        {/* <button className={props.color}>{props.daniel}</button> */}
        <button className={`bg-${props.color}-400 rounded py-3 px-5 font-semibold text-[20px]`}>{props.daniel}</button>
    </div>
  )
}

export default ButtonComp