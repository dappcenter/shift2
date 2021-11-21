import React from "react";
import styled from "styled-components";
import { Tag, Flex, Heading, Image } from "@pancakeswap-libs/uikit";
import { CommunityTag, CoreTag } from "components/Tags";
import oz from "./oz.svg";
import qu from "./qu.svg";
import im from "./im.svg";
import peck from "./peck.svg";

const Wrapper = styled(Flex)`
  background: #000000;
  margin-top: -42px;
  margin-bottom: 400px;
`;

const MultiplierTag = styled(Tag)`
  margin-left: 4px;
`;

const Footre = () => {
  return (
    <Wrapper justifyContent="space-between" alignItems="center" mb="22px">
      <Image src={oz} alt=" " width={224} height={224} />
      <Image src={qu} alt=" " width={223} height={223} />
      <Image src={im} alt=" " width={223} height={223} />
      <Image src={peck} alt=" " width={223} height={223} />
    </Wrapper>
  );
};

export default Footre;
