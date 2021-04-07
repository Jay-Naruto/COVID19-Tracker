import './App.css';
import {Select, MenuItem,FormControl, Card, CardContent} from "@material-ui/core"
import { useEffect, useState } from 'react';
import InfoBox from './components/InfoBox';
import Maps from './components/Map';
import Table from './components/Table';
import { sortData } from './util';
import "./InfoBox.css"
import "leaflet/dist/leaflet.css"

import Beds from './components/Beds';



function App() {
  const[country,setCountry]=useState([]) 
  const[country1,setCountry1]=useState("WorldWide") 
  const[countryInfo,setCountryInfo]=useState({}) 
  const[table,setTable]=useState([]) 
  const [mapCenter,setCenter]=useState({ lat:34.80746, lng:-40.4796 });
  const [mapZoom,setMapZoom]=useState(4)
  const [mapCountries,setMapCountries]=useState([])
  const [casesType, setCasesType] = useState("cases");


  useEffect(()=>{
    fetch("https://disease.sh/v3/covid-19/all")
    .then((response)=>response.json())
    .then((data)=>{
      setCountryInfo(data)
    });
  });



          useEffect(()=>{
        const getCountries=async ()=>{
          await fetch("https://disease.sh/v3/covid-19/countries")
          .then((response)=>response.json())
          .then((data)=>{
            const countrydata=data.map((country)=>({
              name:country.country,
              value:country.countryInfo.iso2,
            }));
            const sortedData=sortData(data)
            setTable(sortedData)
            setCountry(countrydata)
            setMapCountries(data)
          });
        };
        getCountries();

          },[country]);

  const onCountryChange= async (event)=>{
    const countryCode=event.target.value
    // setCountry1(countryCode)

    const url=
    countryCode==="WorldWide" ? "https://disease.sh/v3/covid-19/all" : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    await fetch(url)
  .then((response)=>response.json())
  .then((data)=>{
    setCountry1(countryCode)
    setCountryInfo(data)
    setCenter([data.countryInfo.lat,data.countryInfo.long])
    setMapZoom(4)
    
  });
}
 console.log(countryInfo)

  return (
    <div className="App">
      <div className="app__left">
      <div className="app__header">
      <h1 style={{color:'grey'}} >COVID19-TRACKER</h1>
      <FormControl className="app__dropdown" >
        <Select variant="outlined" onChange={onCountryChange} value={country1}>
        <MenuItem value="WorldWide">Worldwide</MenuItem>
          
            {country.map((country) => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}
          
        </Select>
      </FormControl>

      </div>
{/* {INFO BOXES} */}
      <div className="app__stats">
        <InfoBox title="COVID Cases" cases={countryInfo.todayCases} total={countryInfo.cases}/>
        
        <InfoBox title="Recovered"  cases={countryInfo.todayRecovered} total={countryInfo.recovered}  />
        
        <InfoBox title="Deaths" cases={countryInfo.todayDeaths} total={countryInfo.deaths} />
      </div>

{/* {MAP} */}
        <Maps 
        countries={mapCountries}
        center={mapCenter} 
        zoom={mapZoom}
        casesType={casesType}/>
      </div>

      <Card className="app__right">
    <CardContent>
      <h2>Live cases</h2>
      <Table countries={table} />
    {/* {TABLE} */}
   
     <Beds/>
    </CardContent>
    

  </Card>
      

      
    </div>
  );
}


export default App;
