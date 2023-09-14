import React, {useState, useEffect} from 'react'
import Selector from '../components/Population/Selector';
import CountryDetail from '../components/CountryDetail';
import TotalPopulation from '../components/Population/TotalPopulation';


const PopulationContainer = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [favCountry, setFavCountry] = useState([])

    useEffect(() => {
        getCountries();
    }, [])

    const getCountries = function(){
        fetch("https://restcountries.com/v3.1/all")
        .then(data => data.json())
        .then(countries => setCountries(countries))
    }

    const onCountrySelected = function(country){
        setSelectedCountry(country);
    }

    const makeCountryFav = function(country){
        setFavCountry(country);
    }

    return (
        <div>
            <h2>I am the population container</h2>
            <TotalPopulation countries={countries}/>
            <Selector countries = {countries} onCountrySelected = {onCountrySelected} makeCountryFav={makeCountryFav}/>
            {selectedCountry ? <CountryDetail country={selectedCountry}/> : null}
        </div>
    )
}

export default PopulationContainer