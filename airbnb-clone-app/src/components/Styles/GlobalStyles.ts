import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: 'Airbnb Cereal';
    src: url('/fonts/Airbnb_Cereal-Bold.woff2') format('woff2'),
         url('/fonts/Airbnb_Cereal-Medium.woff2') format('woff2'),
         url('/fonts/Airbnb_Cereal-Bold.woff2') format('woff2'),
  }

body{
    font-family: Airbnb Cereal, sans-serif;
    font-size: 14px;
    line-height: 1.43;
    color: #222;
    background-color: #fff;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }) => theme.colors.body};
    line-break: strict;
}
`
