import React from 'react';
import styled from 'styled-components';
import SumitTube from '../image/logo.png';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import ArticleIcon from '@mui/icons-material/Article';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SettingsIcon from '@mui/icons-material/Settings';
import FlagIcon from '@mui/icons-material/Flag';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

const Container = styled.div`
 flex:1;
 background-color: ${({theme}) =>theme.bgLighter};
 height: 100vh;
 color: ${({theme}) =>theme.text};
 font-size: 13px;
 position: sticky;
 top: 0;
`;
const Wrapper = styled.div`
 padding: 14px 26px;
`;
const Logo = styled.div`
 display: flex;
 align-items: center;
 gap: 5px;
 font-weight: bold;
 margin-bottom: 20px;
 font-size: 15px;
`;
const Img = styled.img`
  height: 25px;
  margin-top: -3px
`;

const Item = styled.div`
 display: flex;
 align-items: center;
 gap: 10px;
 cursor: pointer;
 padding: 4px 0px;

 &:hover {
  background-color: ${({theme}) => theme.soft};
 }

 `;

 const Hr = styled.hr`
 margin: 13px 0px;
 border: 0.5px solid ${({theme}) =>theme.soft};
 `;

 const Login = styled.div`
 
 `;
 const Button = styled.button`
 padding: 5px 15px;
 background-color: transparent;
 border: 1px solid #3ea6ff;
 color: #3ea6ff;
 border-radius: 3px;
 font-weight: 500;
 margin-top: 10px;
 cursor: pointer;
 display: flex;
 align-items: center;
 gap: 5;
 `;

/* const Title = styled.h2`
 font-size: 14px;
 font-weight: 500;
 color:#aaaaaa;
 margin-bottom: 20px;
 `; */
 /* <Title>BEST OF SUMITTUBE</Title> */

/* const Scroll = styled.div`
  overflow: hidden;
  overflow-y: auto;
  scrollbar-color: red red;
  scrollbar-width: thin;
;` */
const Menu = ({darkMode, setDarkMode}) => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Link to="/" style={{textDecoration:"none", color:"inherit"}}>
            <Logo>
              <Img src={SumitTube}/>SumitTube
            </Logo>
          </Link>
          <Item>
            <HomeIcon/>Home
          </Item>
          <Item>
            <ExploreIcon/>Explore
          </Item>
          <Item>
            <SubscriptionsIcon/>Subscriptions
          </Item>
          <Hr/>
          <Item>
            <VideoLibraryIcon/>Library
          </Item>
          <Item>
            <HistoryIcon/>History
          </Item>
          <Hr/>
          <Login>
            Sign in to like videos, <br /> comment, and susbscribe.
            <Link to="Signin" style={{textDecoration:"none"}}>
              <Button><AccountCircleIcon/>SIGN IN</Button>
            </Link>
          </Login>
          <Item>
            <LibraryMusicIcon/>Music
          </Item>
          <Item>
            <SportsBasketballIcon/>Sports
          </Item>
          <Item>
            <SportsEsportsIcon/>Gaming
          </Item>
          <Item>
            <MovieCreationIcon/>Movies
          </Item>
          <Item>
            <ArticleIcon/>News
          </Item>
          <Item>
            <LiveTvIcon/>Live
          </Item>
          <Hr/>
          <Item>
            <SettingsIcon/>Settings
          </Item>
          <Item>
            <FlagIcon/>Report
          </Item>
          <Item>
            <HelpOutlineIcon/>Help
          </Item>
          <Item onClick={() => setDarkMode(!darkMode)}>
            <SettingsBrightnessIcon/>{darkMode? "Light": "Dark"} Mode
          </Item>
        </Wrapper>
      </Container>
    </div>
  )
}

export default Menu;
