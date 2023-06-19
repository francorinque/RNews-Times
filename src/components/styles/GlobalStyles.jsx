import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    *,::before,::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
    }

    :root{
        --clr-primary-100:#F9F4ED;
        --clr-primary-200:#EAEAEA;
        --clr-secundary-50: #6B85FA;
        --clr-secundary-100: #3143BA;
        --clr-secundary-200: #2A2A2A;
        --clr-nav-scrolled: #eaeaea47;
        --h-header: 70px;
        --radius: 5px;
        --shadow:   0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1);
        --regular: 300;
        --semibold: 600;
        --bold: 800;
    }

    body{
      min-width: 250px;
        background-color: ${({ theme }) => theme.body};
       color: ${({ theme }) => theme.text};
       font-family: 'Montserrat', sans-serif;
    }

    img{
      width: 100%;
      max-width: 100%;
      height: 100%;
      object-fit: cover;
    }

    h1 {
    color: var(--clr-secundary-50);
    font-size: clamp(40px, 3vw, 70px);
    font-weight: var(--bold);
  }
  
  section{
    padding-top:  calc(var(--h-header) + 50px);
  }

`

export const lightTheme = {
  body: "var(--clr-primary-100)",
  text: "var(--clr-secundary-200)",
  bgHeader: "var(--clr-primary-200)",
  textHeader: "var(--clr-secundary-200)",
  bgCircle: "var(--clr-secundary-50)"
}
export const darkTheme = {
  body: "var(--clr-secundary-200)",
  text: "var(--clr-primary-100)",
  bgHeader: "var(--clr-secundary-200)",
  textHeader: "var(--clr-primary-200)",
  bgCircle: "var(--clr-primary-200)"
}
