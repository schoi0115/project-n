import React, { useState } from 'react'


function PatientDetail(){

    return(
        <div className="lines">
      
            <h1>
                Notes
            </h1>
            <form>
            <input className="note" type="text" onChange={console.log("test")} />
     
                <li><input type="text" /></li>
                <li><input type="text" /></li>
                <li><input type="text" /></li>
                
                <input type='submit' value ="Submit"/>
            </form>
        

        </div>

    )
}
export default PatientDetail