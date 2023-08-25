import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
    }

    html,body{
        padding: 0;
        margin: 0;
        font-size: 14px;
        color: #141416;
        font-family: sans-serif;
    }
    h1,h2,h3,h4,h5,h6,p,hr,ul,ol,li,table,td,th,input,button{
        padding: 0;
        margin:0
    }
    button,input,select,option{
        outline: none;
        border: none;
    }
    ul,ol{
        list-style-type: none;
    }
    a{
        text-decoration: none;
    }

`

export default GlobalStyle