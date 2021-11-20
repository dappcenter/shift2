import React, { useEffect, lazy } from 'react'

import styled from 'styled-components'
import { Heading, Text, BaseLayout } from '@pancakeswap-libs/uikit'
import TwitterCard from 'views/Home/components/Twitter'
import Page from 'components/layout/Page'

import Menu from '../../components/Menu'


const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 32px;
  

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const iframe = "https://deathstar.directory/bsc/questionmark/";

const Shell =  () => {

  return (
    

<iframe title="????" src={iframe} height="1200rem" width="100%"  />

  )
  
  
}

export default Shell

