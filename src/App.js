// import logo from './logo.svg';
import './App.css';
import Countries from './components/Countries/Countries';
// import {useEffect, useState} from 'react';
// import Countries from './component/Countries/Countries';
// import Person from './component/Person/Person';
// import Header from './component/Header/Header';

function App() {
  return (
    <div className="App">
      {/* <LoadCountries></LoadCountries> */}
      {/* <Header></Header>
      <Countries></Countries>
      <Person></Person> */}

      <Countries></Countries>


    </div>
  );
}










/* function LoadCountries(){
  const [countries, setCountries] = useState([]);
  useEffect( () =>{
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])


  return(
    <div>
      <h1>Visiting Every Country of the world!</h1>
      <h3>Available Countries: {countries.length}</h3>

      {
        countries.map(country => <Country name={country.name} population={country.population}></Country>)
      }
    </div>
  );
};

const Country = (props) =>{
  return(
    <div>
      <h2>Name: {props.name.common}</h2>
      <h3>Population: {props.population}</h3>

    </div>
  )
} */

export default App;
