import React from 'react';

import Card from './Card.jsx';

import './styles-components/PainelData.css';

export default function PainelData({data}){
    const ph={deaths:100,
              todayDeaths: 2,
              cases:1000,
              todayCases:2,
              recovered:300000,
             };
    const deaths="osasco";
    return(
        <div className="painel-data">
          {/*
          <Card color="red" text={"Mortes"} data={ph.deaths}/>
          <Card color="orange" text={"Mortes hoje"} data={ph.todayDeaths}/>
          <Card color="purple" text={"Casos"} data={ph.cases}/>
          <Card color="blue" text={"Casos hoje"} data={ph.todayCases}/>
          <Card color="green" text={"Recuperados"} data={ph.recovered}/>
           */}
          <Card color="red" text={"Mortes"} data={data.deaths}/>
          <Card color="orange" text={"Em estado critico"} data={data.critical}/>
          <Card color="purple" text={"Casos"} data={data.cases}/>
          <Card color="blue" text={"Casos por milhão"} data={data.casesPerOneMillion}/>
          <Card color="green" text={"Recuperados"} data={data.recovered}/>
        </div>
    );
}
