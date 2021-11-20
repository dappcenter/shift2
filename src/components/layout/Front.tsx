import styled from 'styled-components'
import img from './city.png'


const Front = styled.div`
  margin-left: auto;
  margin-right: auto;
  background-image: url(${img});
width: 80%;


// width: 100vw;
background-repeat: no-repeat;
background-size: 100%;
margin-bottom: 400px;

  h1 { 
    color: white;

    
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    padding-left: 24px;
    padding-right: 24px;
  }
`

export default Front
