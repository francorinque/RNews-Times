import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    *,::before,::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
    }

    :root{
   
        --h-header: 80px;
        --radius: 4px;
        --shadow:   0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1);
        --regular: 300;
        --semibold: 600;
        --bold: 800;

        --bgColor: #f6efde;
        --bgColorMenu: #ede0bb;
        --colorLinkActive: #674427;
        --colorOutline: rgba(81, 81, 81, 0.254);
        --textColorRandomNews : #f6efde;
        --textColor: #181818;
    }

    a{
      color: inherit;
    }

    body{
      min-width: 250px;
    
       font-family: 'Onest', sans-serif;
       background:  url("../../assets/images/background.webp") no-repeat center/cover;
       color: var(--textColor);
    }

    img{
      width: 100%;
      max-width: 100%;
      height: 100%;
      object-fit: cover;
    }

 
  
  section{
    padding-top:  calc(var(--h-header) + 70px);
  }

`
