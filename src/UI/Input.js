import React from 'react'
import s from './Input.module.css'

const Input = ({input,label}) => {
  return (
    <div className={s.input}>
      <label htmlFor={input.id}>{label}</label>
      <input id={input.id} {...input} onChange={input.onChange}/>
    </div>
  )
}

export default Input
