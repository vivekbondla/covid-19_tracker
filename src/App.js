import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import "./App.css";
// import { FormControl, Select, MenuItem } from "@mui/material";
import { useEffect, useState } from "react";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setInputCountry] = useState("worldwide");

  useEffect(() => {
    const getCountriesData = async () => {
      const response = await fetch("https://disease.sh/v3/covid-19/countries");
      const data = await response.json();
      const countries = data.map((country) => ({
        name: country.country,
        value: country.countryInfo.iso2,
      }))
      setCountries(countries);
      // fetch("https://disease.sh/v3/covid-19/countries")
      // .then((response) => response.json())
      // .then((data) => {
        

      // });
    };

    getCountriesData();
  }, []);

  const onCountryChange = (event) => {
    const countryCode = event.target.value;
    setInputCountry(countryCode);
  };

  return (
    <div className="App">
      <div className="app__header">
        <h1>Covid Tracker</h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" value={country} onChange={onCountryChange}>
            <MenuItem value="worldwide">worldwide</MenuItem>
                      {countries.map((country,key) => (
                          <MenuItem key={key} value={country.value}>{country.name}</MenuItem>
                        ))}

            
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default App;
