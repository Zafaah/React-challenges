import React from "react";
import { useState } from "react";
function Timer(){
      const[timer , setTimer]=useState(0);
      
      const startTimer=()=>{
           window.mytimer=setInterval(() => {
            setTimer((timer)=>timer+1)
           }, 1000);
      }
      const stopTimer=()=>{
            clearInterval(window.mytimer)
      }
      const resetTimer=()=>{
        clearInterval(window.mytimer)
        setTimer(0)
      }

      return (
            <div className="container">
              <h1>Timer</h1>
              <span>{Math.trunc(timer / 60)} mins </span>
              <span>{timer % 60} secs</span>
              <div>
                <button onClick={startTimer}>Start</button>
                <button onClick={stopTimer}>Stop</button>
                <button onClick={resetTimer}>Reset</button>
              </div>
            </div>
          );
}

export default Timer