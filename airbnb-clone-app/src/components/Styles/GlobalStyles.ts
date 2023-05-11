import { createGlobalStyle } from 'styled-components'
import AirbnbCerealbd from '../../assets/fonts/airbnbcereal_w_bd.woff2'
import AirbnbCerealbd2 from '../../assets/fonts/airbnbcereal_w_bd.woff'
import AirbnbCerealbk from '../../assets/fonts/airbnbcereal_w_bk.woff2'
import AirbnbCerealbk2 from '../../assets/fonts/airbnbcereal_w_bk.woff'
import AirbnbCerealblk from '../../assets/fonts/airbnbcereal_w_blk.woff2'
import AirbnbCerealblk2 from '../../assets/fonts/airbnbcereal_w_blk.woff'
import AirbnbCereallt from '../../assets/fonts/airbnbcereal_w_lt.woff2'
import AirbnbCereallt2 from '../../assets/fonts/airbnbcereal_w_lt.woff'
import AirbnbCerealmd from '../../assets/fonts/airbnbcereal_w_md.woff2'
import AirbnbCerealmd2 from '../../assets/fonts/airbnbcereal_w_md.woff'
import AirbnbCerealxbd from '../../assets/fonts/airbnbcereal_w_xbd.woff2'
import AirbnbCerealxbd2 from '../../assets/fonts/airbnbcereal_w_xbd.woff'

export const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: 'Airbnb Cereal';
    src: url(${AirbnbCerealbd}) format('woff2'),
         url(${AirbnbCerealbd2}) format('woff'),
         url(${AirbnbCerealbk}) format('woff2'),
         url(${AirbnbCerealbk2}) format('woff'),
         url(${AirbnbCerealblk}) format('woff2'),
         url(${AirbnbCerealblk2}) format('woff');
         url(${AirbnbCereallt}) format('woff2'),
         url(${AirbnbCereallt2}) format('woff');
         url(${AirbnbCerealmd}) format('woff2'),
         url(${AirbnbCerealmd2}) format('woff');
         url(${AirbnbCerealxbd}) format('woff2'),
         url(${AirbnbCerealxbd2}) format('woff');
  }
  
body{
    font-family: Airbnb Cereal, sans-serif;
    font-size: 14px;
    line-height: 1.43;
    color: #222;
    background-color: #fff;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale
    background-color: ${({ theme }) => theme.colors['body']};
    line-break: strict;
}
`
