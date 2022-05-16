import React, {memo, useState, useEffect, useCallback} from 'react';
import Api from '../resources/covid.js';

import PainelPrincipal from './PainelPrincipal.jsx';
import PainelData from './PainelData.jsx';

import './Main.css';
const path = 'https://coronavirus-19-api.herokuapp.com/countries';


export default function Main(){
    const [isLoading, setIsLoading] = useState(true);
    const [dataCountry, setDataCountry]= useState();
    const [listOfCountries, setListOfCountries] =useState([]);
    const [country, setCountry] = useState('afghanistan');

    const [date, setDate] = useState(new Date());
    
    useEffect(()=>{
        const getCountries =async()=>{
            const data = await fetch(`${path}`);
            const json = await data.json();

            const countries = json.map(json=> json.country);
            
            setListOfCountries(countries);
        };
        getCountries(); 
    },[]);

    useEffect(()=>{
        const getDataCountry = async ()=>{
            const data = await fetch(`${path}/${country}`);
            const json = await data.json();

            setDataCountry(json);
            setIsLoading(false);
        };
        console.log("effeito");
        getDataCountry();
        setDate(new Date());
    },[country]);

    //console.log(listOfCountries);
    //console.log(dataCountry);
    console.log("o paise agr é:", country);
    return(
        <main className="main">
          {!isLoading &&
           <PainelPrincipal
             onCountry={setCountry}
             paises={listOfCountries}
             date={date}
           />
          }
          
          {!isLoading &&
           <PainelData data={dataCountry}/>
          }
            </main>
    );
}

    /*
    const getCovidData = useCallback((country)=>{
        Api.getCountry(country).
            then(data =>setData(data));
    },[]);

    useEffect(()=>{
        getCovidData(country);
        
    },[getCovidData, country]);
    */
    /*
    
    function getCountry(country){
        return fetch(`${path}/${country}`)
            .then(response=>response.json())
            .then(json=>console.log(json));
    }
    */

/*
    const getCountry2 = async (country)=>{
        const data = await fetch(`${path}/${country}`,headers);
        const json = await data.json();
        console.log(json);
        return json;
    };

    
    console.log("teste funçao 1", Api.getCountry0("brazil"));
    console.log("teste funçao 1", Api.getCountry1("usa"));
    console.log("teste funçao 2", getCountry2("india"));
    console.log("teste outra api", Api.apiGet());
*/
