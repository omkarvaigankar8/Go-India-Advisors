'use client'
import React from 'react'

const Button = (props) => {
    return (
        <button className=' border-[1px] border-black py-3 px-5 uppercase' onClick={() => {
            alert('click')
        }}>{props.text}</button>
    )
}

export default Button