import 'styled-components'
type Colors = {
  [key: string]: string
}

type Shades = {
  [key: string]: string
}

type Gradients = {
  [key: string]: string
}
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors
    shades: Shades
    gradients: Gradients
  }
}
