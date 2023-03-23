import React, { useState } from "react";
function Test(){
    const [show, setShow]=useState(false);

    return(
        <div>
          
            
            <button onClick={()=>setShow(!show)}>Show/hide</button>
             {show &&<p>welcome to react Challenge</p>}
           
        </div>
    )
}
export default Test;