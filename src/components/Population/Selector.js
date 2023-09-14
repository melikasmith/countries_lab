import React from 'react'
import OptionCountry from './OptionCountry';

const Selector = ({countries, onCountrySelected, makeCountryFav}) => {

    // console.log({countries})

    const handleChange = function(event){
        const chosenCountry = countries[event.target.value];
        onCountrySelected(chosenCountry);
    }

    const countryOptions = countries.map((country, index) => {
        return <option value={index}>{country.name.common}</option>
    })

    return(
        <>
        <select defaultValue="" onChange={handleChange}>
            <option value={OptionCountry} selected>What country would you like to learn more about?</option>
            {countryOptions}
        </select>
        </>
    )
}

export default Selector;