import React from 'react'
import { Card, CardBody, Heading } from '@pancakeswap-libs/uikit'
// import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { Timeline } from 'react-twitter-widgets'
// import { getBalanceNumber } from 'utils/formatBalance'
// import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
// import { getCakeAddress } from 'utils/addressHelpers'
// import CardValue from './CardValue'
// import { useFarms } from '../../../state/hooks'

const StyledTwitterCard = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  // box-shadow: 0px 4px 18px rgba(50, 113, 165, 0.42);
  border-radius: 12px;
  margin-top: -440px;
  margin-bottom: 100px;
  padding-bottom: 10em;
  
  color: gray;





`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size:44px;
  justify-content: left;
  margin-bottom: 10px;
  margin-top: 10px;
  color: #FF1100;
  text-align: center;

`

const TwitterCard = () => {
  const TranslateString = useI18n()

  return (
    <StyledTwitterCard>
      <CardBody>
      <Row>
               <h1>THE FUTURE OF LIQUIDITY</h1>
      
      </Row>
      <Row>
               <h1>FARMING IS HERE NOW</h1>
    
      </Row>
      <>
      <p>

        With Shift Finance you work with the most cutting edge, modern tech
      </p>
      
      </>

      </CardBody>
    </StyledTwitterCard>
  )
}

export default TwitterCard