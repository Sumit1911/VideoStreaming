import React from 'react'
import { Link as RouterLink } from 'react-router-dom'; 
import styled from 'styled-components';

const Container = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 height: calc(100vh-56px);
 color: ${({theme}) => theme.text};
`;
const Wrapper = styled.div`
 display: flex;
 align-items: center;
 flex-direction: column;
 background-color: ${({theme}) => theme.bgLighter};
 border: 1px solid ${({theme}) => theme.soft};
 padding: 20px 50px;
 gap: 10px;
`;
const Title = styled.h1`
 font-size: 24px;
`;
const SubTitle = styled.h2`
 font-size: 20px;
 font-weight: 300;
`;
const Input = styled.input`
 border: 1px solid ${({theme}) => theme.soft};
 border-radius: 3px;
 padding: 10px;
 background-color: transparent;
 width: 100%;
`;
const Button = styled.button`
 border-radius: 3px;
 border: none;
 padding: 10px 20px;
 cursor: pointer;
 background-color: ${({theme}) => theme.soft};
 color: ${({theme}) => theme.textSoft};
`;
const More = styled.div`
 display: flex;
 margin-top: 10px;
 font-size: 12px;
 color: ${({theme}) => theme.textSoft};
`;
const LinksContainer = styled.div`
  margin-left: 50px;
`;

const StyledLink = styled.span`
  margin-left: 30px;
  text-decoration: none;
  color: ${({theme})=> theme.text};

`;

const Signin = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Sign in</Title>
            <SubTitle>to continue to SumitTube</SubTitle>
            <Input placeholder='username' />
            <Input type="password" placeholder='password' />
            <Button>Sign in</Button>

            <Title>or</Title>
            <SubTitle>to continue to SumitTube</SubTitle>
            <Input placeholder='username' />
            <Input placeholder='email' />
            <Input type="password" placeholder='password' />
            <Button>Sign up</Button>
        </Wrapper>
        <More>
        English(USA)
        <LinksContainer>
          <StyledLink as={RouterLink} to="/help" >Help</StyledLink> {/* Use RouterLink for navigation */}
          <StyledLink as={RouterLink} to="/privacy">Privacy</StyledLink> {/* Use RouterLink for navigation */}
          <StyledLink as={RouterLink} to="/terms">Terms</StyledLink> {/* Use RouterLink for navigation */}
        </LinksContainer>
      </More>

    </Container>
  )
}

export default Signin