const path = 'https://coronavirus-19-api.herokuapp.com/countries';
const path2 = 'https://coronavirus-19-api.herokuapp.com/countries';

const headers = {
    method:'get',
    mode:'cors',
    cache:'default'
};

function getCountry0(country){
    let data={};
    fetch(`${path}/${country}`,headers)
        .then(response=>response.json())
        .then(json=> data=json);
    return data;
}

function getCountry1(country){
    return fetch(`${path}/${country}`,headers)
        .then(response=>response.json());
}

const getCountry2= async (country)=>{
    const data = await fetch(`${path}/${country}`,headers);
    const json = await data.json();

    return json;
};

const apiGet = () => {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json());
  };

function getCountries(){

    const data = fetch(`${path}`,headers)
        .then(response=>response.json());

    //const countries = data.map(data => data.country);
    return data;
}

export default {getCountry0,
                getCountry1,
                getCountry2,
                apiGet,
                getCountries};









/*
const callCovidApiAll = async (countriesToReturn)=>{
    const response = await fetch(covidApi);
    const data = await response.json();
    
    return(data.slice(0,countriesToReturn));
};

const callCovidApiCountrie = async (countrie)=>{
    const response = await fetch(`${covidApi}/${countrie}`);
    const data = await response.json();

    return data;
    //console.log(data);
};

export default { callCovidApiCountrie, callCovidApiAll};
*/
