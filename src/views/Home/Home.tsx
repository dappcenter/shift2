import React from "react";
import styled from "styled-components";
import { Heading, Text, BaseLayout } from "@pancakeswap-libs/uikit";
import useI18n from "hooks/useI18n";
import Footer from "views/Home/components/Footer";
import Front from "components/layout/Front";
import FarmStakingCard from "views/Home/components/FarmStakingCard";
import LotteryCard from "views/Home/components/LotteryCard";
import CakeStats from "views/Home/components/CakeStats";
import TotalValueLockedCard from "views/Home/components/TotalValueLockedCard";
import EarnAPYCard from "views/Home/components/EarnAPYCard";
import EarnAssetCard from "views/Home/components/EarnAssetCard";
import TwitterCard from "views/Home/components/Twitter";

const Hero = styled.div`
  align-items: center;
 
  background-repeat: no-repeat;
  // background-position: left top, right top;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom:  10em;
  padding-top: 100px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {

    background-position: left center, right center;
    // height: 200px;
 
    padding-top: 100;
    padding-bottom 200;



  }
`;

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
`;

const CTACards = styled(BaseLayout)`
  align-items: start;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 4;
    }
  }
`;

const Home: React.FC = () => {
  const TranslateString = useI18n();

  return (
    <Front>
      <Hero />

      <Hero />

      <Cards>
        <TwitterCard />
      </Cards>
      <Cards>
        <CakeStats />
        <TotalValueLockedCard />
      </Cards>
      <Hero />

      <Footer />
    </Front>
  );
};

export default Home;
