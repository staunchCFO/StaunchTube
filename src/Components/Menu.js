import React from 'react';
import styled from 'styled-components';

import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bg};
  height: 100vh;
  color: ${({ theme }) => theme.text};
  overflow-y: scroll;
  font-size: 14px;
  position: sticky;
  top: 0;
`;

const Wrapper = styled.div`
  padding: 18px 0px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 0px 26px;
  font-weight: bold;
  margin-bottom: 25px;
`;

const Img = styled.img`
  height: 25px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
  cursor: pointer;
  padding: 7.5px 26px;
  &:hover {
    background-color: ${({ theme }) => theme.soft};
    width: 100%;
  }
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Login = styled.div`
    padding: 0px 26px;
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
  gap: 5px;
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  padding: 0px 26px;
  margin-bottom: 20px;
`;

const Menu = ({ darkMode, setDarkMode }) => {
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo>
            <Img src='data:image/webp;base64,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' />
            StaunchTube
          </Logo>
        </Link>
        <Item>
          <HomeIcon />
          Home
        </Item>
        <Item>
          <ExploreOutlinedIcon />
          Explore
        </Item>
        <Item>
          <SubscriptionsOutlinedIcon />
          Subscriptions
        </Item>
        <Hr />
        <Item>
          <VideoLibraryOutlinedIcon />
          Library
        </Item>
        <Item>
          <HistoryOutlinedIcon />
          History
        </Item>
        <Hr />
        <Login>
          Sign in to like videos, comment, and subscribe.
          <Link to="signin" style={{textDecoration:"none"}}>
            <Button>
              <AccountCircleOutlinedIcon />
              SIGN IN
            </Button>
          </Link>
        </Login>
        <Hr />
        <Title>Best Of StaunchTube</Title>
        <Item>
          <LibraryMusicOutlinedIcon />
          Music
        </Item>
        <Item>
          <SportsBasketballOutlinedIcon />
          Sports
        </Item>
        <Item>
          <SportsEsportsOutlinedIcon />
          Gaming
        </Item>
        <Item>
          <MovieOutlinedIcon />
          Movies
        </Item>
        <Item>
          <ArticleOutlinedIcon />
          News
        </Item>
        <Item>
          <LiveTvOutlinedIcon />
          Live
        </Item>
        <Hr />
        <Item>
          <SettingsOutlinedIcon />
          Settings
        </Item>
        <Item>
          <FlagOutlinedIcon />
          Report
        </Item>
        <Item>
          <HelpOutlineOutlinedIcon />
          Help
        </Item>
        <Item onClick={() => setDarkMode(!darkMode)}>
          <SettingsBrightnessOutlinedIcon />
          {darkMode ? "Light" : "Dark"} Mode
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;