import { useState } from "react"


export const Top=()=>{
    const [isClicked,setIsClicked]=useState(false)

    const toTop =()=>{
        window.scrollTo({top:0,behavior:'smooth' } )
        setIsClicked(true)
}
    return<button onClick={toTop} className={`top ${isClicked ? 'clicked' :''}` }>
        &#8593;
    </button>
}