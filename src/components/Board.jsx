import React from 'react';

export default function Board({data}){
    const {cases, totalDeaths, recovered, deaths, todayCases} = data;

    return(
        <div>
          <Card/>
        </div>

    );
}
