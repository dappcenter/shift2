import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap-libs/uikit/dist/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`

  * {
    font-family: 'Kanit', sans-serif;
  }

 home {

    background: #ffffff !important;

  }
  body {
    background-color: ${({ theme }) => theme.colors.background};
    background:  linear-gradient(115.83deg, rgba(37, 37, 37, 0.84) 0%, #000000 12.29%);

    img {
      height: auto;
      max-width: 100%;
      h1 {
        color: #ff1100;
        
      }
    }
  }
`

export default GlobalStyle
