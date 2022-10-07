import React from 'react';
import './Country.css'

const Country = props => {
    const {name, population, area, region} = props.country;
    return (
        <div className='country'>
            {/* <h4>Country Name: {props.country.name.common}</h4>
            <p>Population: {props.country.population}</p>
            <p>Area: {props.country.area}</p>
            <p>Region: {props.country.region}</p> */}

            {/* You can use these method to prevent repeat code */}
            <h4>Country Name: {name.common}</h4>
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Region: {region}</p>
        </div>
    );
};

export default Country;