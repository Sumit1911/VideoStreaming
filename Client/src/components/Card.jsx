import styled from 'styled-components';
import React from 'react'
import { Link } from 'react-router-dom';

const Container = styled.div`
 width: 360px;
 margin-bottom: ${(props)=>props.type === "sm" ? "10px": "45px"};
 cursor: pointer;
 display: ${(props)=>props.type === "sm" && "flex"};
 gap: 10px;
`;
const Image = styled.img`
 width: 92%;
 height:  ${(props)=>props.type === "sm" ? "100px": "180px"};
 border-radius: 15px;
 background-color: #999;
 flex: 1;
`;
const Details = styled.div`
 display: flex;
 margin-top: ${(props)=>props.type !== "sm" && "16px"};
 gap: 10px;
 flex: 1;
`;
const ChannelImage = styled.img`
 width: 36px;
 height: 36px;
 border-radius: 50%;
 background-color: #999;
 display: ${(props)=>props.type === "sm" && "none" };
`;

const Texts = styled.div``;
const Title = styled.h1`
 font-size: 16px;
 font-weight: 500;
 color: ${({theme}) => theme.text};
`;
const ChannelName = styled.h2`
 font-size: 14px;
 color: ${({theme}) => theme.textSoft};
 margin: 6px 0px;
`;
const Info = styled.div`
 font-size: 14px;
 color: ${({theme}) => theme.textSoft};
`;

const Card = ({type}) => {
  return (
    <Link to="/Video/test" style={{textDecoration:"none"}}>
      <Container type={type}>
          <Image type={type} src='data:image/jpeg;base64,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'></Image>
          <Details type={type}>
              <ChannelImage type={type} src="data:image/jpeg;base64,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"/>
                  <Texts>
                      <Title>Test Video</Title>
                      <ChannelName>Sumit Dev</ChannelName>
                      <Info>785,980 • 1 day ago</Info>
                  </Texts>
          </Details>
      </Container>
    </Link>
  )
}

export default Card