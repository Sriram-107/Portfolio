import React from 'react'
import "./Button.css"

export default function Button({labelName ,classname, clickHandler}) {
  return (
    <div className={`btn-flex ${labelName==="MORE PHOTOS" ? classname : ""}`}>
 <button onClick={() => clickHandler && clickHandler()}>{labelName}</button>
 </div>
  )
}
