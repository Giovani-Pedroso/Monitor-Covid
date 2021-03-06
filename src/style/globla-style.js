import {createGlobalStyle} from 'styled-components';
import {MdCoronavirus} from 'react-icons/md';


const globalStyle = createGlobalStyle `
*{
   outline:none;
   box-sizing: border-box;
}

body{
   line-height:normal;
}

html, body{
   width:100%;
   min-height:100%;
   display:flex;
   padding:0;
   margin:0;
}

#root{
   background-color:url(https://static.vecteezy.com/system/resources/previews/000/669/435/original/virus-cell-polygonal-background.jpg)

   height:100%;
   width:100%;
   background-size:cover;
   background-position:center center;
}
`;

export default globalStyle;
