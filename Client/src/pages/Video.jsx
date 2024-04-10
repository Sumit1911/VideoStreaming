import styled from 'styled-components';
import React from 'react'
import { AddTaskOutlined, ReplyOutlined, ThumbDownAltOutlined, ThumbUpOutlined } from '@mui/icons-material';
import Comments from '../components/Comments';
import Card from '../components/Card';

const Container = styled.div`
 display: flex;
 gap: 10px;
`;
const Content = styled.div`
 flex: 4.5;
`;
const VideoWrapper = styled.div`
 
`;
const Title = styled.h1`
 font-size: 18px;
 font-weight: 400;
 margin-top: 20px;
 margin-bottom: 10px;
 color: ${({theme}) => theme.text};
`;
const Details = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
`;
const Info = styled.div`
 color: ${({theme}) => theme.textSoft};
`;
const Buttons = styled.div`
 display: flex;
 gap: 20px;
 color: ${({theme}) => theme.text};
`;
const Button = styled.div`
 font-size: 10px;
 display: flex;
 align-items: center;
 cursor: pointer;
`;
const Hr = styled.hr`
 margin: 15px 0px;
 border: 0.5px solid ${({theme}) => theme.soft};
 `;
const Recommendation = styled.div`
 flex: 2;
`;

const Channel = styled.div`
 display: flex;
 justify-content: space-between;
`;
const ChannelInfo = styled.div`
 display: flex;
 gap: 15px;
`;
const Image = styled.img`
 width: 60px;
 height: 50px;
 border-radius: 50%;
`;
const ChannelDetail = styled.div`
 display: flex;
 flex-direction: column;
 color: ${({theme})=>theme.text};
`;
const ChannelName = styled.span`
 font-weight: 500;
`;
const ChannelCounter = styled.span`
 margin-top: 5px;
 margin-bottom: 20px;
 color: ${({theme})=>theme.textSoft};
 font-size: 12px;
`;
const Description = styled.p`
 font-size: 14px;
`;
const Subscribe = styled.button`
 background-color: #cc1a00;
 font-weight: 500;
 color: white;
 border: none;
 border-radius: 3px;
 height: max-content;
 padding: 10px 20px;
 cursor: pointer;
`;

const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
        <iframe 
          width="100%" 
          height="505" 
          src="https://www.youtube.com/embed/yIaXoop8gl4?si=QKMb1Oej7-9mgcS-" title="YouTube video player" frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
        </iframe>
        </VideoWrapper>
        <Title>Test Video</Title>
        <Details>
          <Info>7,232,232 views • Mar 14, 2024</Info>
          <Buttons>
            <Button><ThumbUpOutlined/>123</Button>
            <Button><ThumbDownAltOutlined/>Dislike</Button>
            <Button><ReplyOutlined/>Share</Button>
            <Button><AddTaskOutlined/>Save</Button>
          </Buttons>
        </Details>
        <Hr/>
        <Channel>
          <ChannelInfo>
             <Image src="data:image/jpeg;base64,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" />
             <ChannelDetail>
              <ChannelName>Sumit Dev</ChannelName>
              <ChannelCounter>200k subscribe</ChannelCounter>
              <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore error repellendus accusamus deleniti consequatur aliquid quo at minus exercitationem est.</Description>
             </ChannelDetail>
          </ChannelInfo>
          <Subscribe>SUBSCRIBE</Subscribe>
        </Channel>
        <Hr/>
        <Comments/>
      </Content>
      <Recommendation>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
      </Recommendation>
    </Container>
  )
}

export default Video
