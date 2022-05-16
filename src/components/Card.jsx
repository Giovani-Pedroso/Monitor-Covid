import React from 'react';
import './styles-components/Card.css';

export default function Card({text, data, color}){
//style={{backgroundColor:"red"}}
    return(
        <div className="card" style={{borderLeftColor: color}}>

          <p className="card-data">{data}</p>
          <br/>
          <p className="card-text">{text}</p>
        </div>
    );
}

