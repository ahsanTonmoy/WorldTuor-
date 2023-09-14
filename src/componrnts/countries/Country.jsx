import { useState } from "react";

const Country = ({country}) => {
    console.log(country)

    const {name, flags, capital, cca3, area} = country;

    const [visited, setVisited] = useState(false);

    const visite = ()=>{
        setVisited(!visited);
    }
    return (
        <div className="card">
            <img src={flags?.png} alt="" />
            <h2>Name: {name?.common}</h2>
            <h3>capital : {capital}</h3>
            <h4>Area : {area}</h4>
            <p>code : <span>{cca3}</span></p>
            <button onClick={visite}>Visited</button>
            {
                visited && 'i will visite this country'
            }

        </div>
    );
};

export default Country;