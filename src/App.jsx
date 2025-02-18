import { useState } from "react";

export default function App(){
    const[count,setCount]=useState(0);
    return(
        <div>
        <center>{count}</center>
<button onClick={()=>setCount(count+1)}>Increment</button>
<button onClick={()=>setCount(count-1)}>Decrement</button>
<button onClick={()=>setCount(count**7)}>Tilt</button>
<button onClick={()=>setCount(count*7)}>Mult</button>
        </div>
    )
}