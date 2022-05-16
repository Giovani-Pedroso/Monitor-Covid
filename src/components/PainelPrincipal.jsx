import React,{useState} from 'react';

import './styles-components/PainelPrincipal.css';

export default function PainelPrincipal({paises, onCountry, date}){

    //const [date, setDate] = useState(new Date()); 
    const dateFomated = `${date.getDate()}/${date.getMonth() +1}/${
date.getFullYear()}`;

    const hourFomated = `${date.getHours()}:${date.getMinutes()}:${
date.getSeconds()}`;
    
    paises.sort();

    const handleCountry = (e)=>{
        const newCountry = e.toLowerCase();
        console.log(newCountry);
        onCountry(newCountry);
    };
    
    return(
        <div className="painel">
          <h1>Monitor Covid-19</h1>
          <p>
            Atualizado: {dateFomated} - {hourFomated}
          </p>
          <select onChange={(e => handleCountry(e.target.value))}>
            {
                paises.map(pais=>{
                    return(
                        <option key={pais} value={pais}>{pais}</option>
                    );
                })
            }
          </select>
        </div>
    );
}
/*

            {date.getDate()}/
            {date.getMonth() +1}/
            {date.getFullYear()} - 
            {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}
 */
