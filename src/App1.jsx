import React,{useContext} from 'react'
import { GlobalProvider } from './App'
export default function App1() {
    const {color,aulterColor}=useContext(GlobalProvider);
  return (
    <>
    <div>
    <p style={color?{color:"blue"}:{}}>this is harit sharma</p>
        <button onClick={()=>aulterColor(color)}>change color</button>
    </div>
    </>
  )
}
