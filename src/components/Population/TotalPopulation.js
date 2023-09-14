import React from 'react'

const TotalPopulation = ({countries}) => {

    let totalPop = 0

    if(countries.length > 100){
        totalPop = countries.reduce((runningTotal, country) => {
            return runningTotal + country.population
        }, 0)
    }

    return(
        <>
            <h2>The total population of the world right now is {totalPop}.</h2>
        </>
    )
}

export default TotalPopulation;