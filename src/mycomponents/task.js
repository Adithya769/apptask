import React from "react";

function Tick() {   
    return (     
    <div>       
        <h1>Hello, world!</h1>       
        <h2>Now time is {new Date().toLocaleTimeString()}.</h2>     
        </div>   
        );   
        // ReactDOM.render(element, document.getElementById('root'));
        // setInterval(Tick, 1000); 
     }  
    //  const Ticks = setInterval(Tick, 1000);

     export default Tick;