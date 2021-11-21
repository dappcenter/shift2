import React from "react";
import { Card, CardBody, Heading, Text } from "@pancakeswap-libs/uikit";
import styled from "styled-components";
import { getBalanceNumber } from "utils/formatBalance";
import { useTotalSupply, useBurnedBalance } from "hooks/useTokenBalance";
import useI18n from "hooks/useI18n";
import { getCakeAddress } from "utils/addressHelpers";
import CardValue from "./CardValue";

const StyledCakeStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  text-color: #ffffff;
`;

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  color: #ffffff;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const CakeStats = () => {
  const TranslateString = useI18n();
  const totalSupply = useTotalSupply();
  const burnedBalance = getBalanceNumber(useBurnedBalance(getCakeAddress()));
  const cakeSupply = totalSupply
    ? getBalanceNumber(totalSupply) - burnedBalance
    : 0;

  return (
    <StyledCakeStats>
      <CardBody>
        <Heading size="xl" mb="24px">
          {TranslateString(534, "SHIFT Stats")}
        </Heading>
        <Row>
          <Text fontSize="14px" color="#FFFFFF">
            {TranslateString(536, "Total SHIFT Supply")}
          </Text>
          {cakeSupply && (
            <CardValue fontSize="14px" color="#FFFFFF" value={cakeSupply} />
          )}
        </Row>
        <Row>
          <Text fontSize="14px" color="#FFFFFF">
            {TranslateString(538, "Total SHIFT Burned")}
          </Text>
          <CardValue
            fontSize="14px"
            color="#FFFFFF"
            decimals={0}
            value={burnedBalance}
          />
        </Row>
        <Row>
          <Text fontSize="14px" color="#FFFFFF">
            {TranslateString(540, "New SHIFT/block")}
          </Text>
          <CardValue fontSize="14px" color="#FFFFFF" decimals={0} value={8} />
        </Row>
      </CardBody>
    </StyledCakeStats>
  );
};

export default CakeStats;
