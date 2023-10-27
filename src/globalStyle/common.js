import { createGlobalStyle } from "styled-components";

const CommonStyle = createGlobalStyle`
   .container{
    max-width: 1200px;
    margin: 0 auto;
   }

   .df{
    display: flex;
   }
   .justify-content{
    justify-content: center;
    
   }

   .align-items{
    align-items: center;

   }
   .justify-content-space-between{
    justify-content: space-between;
   }
   
`;

export default CommonStyle;
