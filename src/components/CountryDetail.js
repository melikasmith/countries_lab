import React from 'react'

const CountryDetail = ({country}) => {



    return(
        <>
            <p>The capital of {country.name.common} is {country.capital} in {country.region}.</p>
        </>
    )
}

export default CountryDetail;