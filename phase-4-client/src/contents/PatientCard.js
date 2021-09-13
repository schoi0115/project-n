import React from 'react'

function PatientCard({name, age, weight, address, difficulty, injury, mechanism_of_injury}){

    return(
    <div>
        <h1>
            Name: {name}
        </h1>
        <h2>
            Age: {age}
            <br />
            Weight: {weight}lbs
            <br />
            Address: {address}
            <br />
            Injury: {injury}
            <br />
            Mechanism of Injury: {mechanism_of_injury}
            <br />
            Assessment Scale: {difficulty}
            <br />
        </h2>
    </div>
    )
}

export default PatientCard