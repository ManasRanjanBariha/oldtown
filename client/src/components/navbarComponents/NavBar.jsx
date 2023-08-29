import { AppBar, Box, Button, Stack, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Theme } from "../../Theme";
import styled from "@emotion/styled";
import Person2Icon from "@mui/icons-material/Person2";
import SearchIcon from "@mui/icons-material/Search";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import FavoriteIcon from "@mui/icons-material/Favorite";
import WorkIcon from "@mui/icons-material/Work";
import LeftDrawer from "./LeftDrawer";
import { useNavigate } from "react-router-dom";

const StyledToolBar = styled(Toolbar)({
  display: "inherit",
  justifyContent: "space-between",
  spacing: "0.5px",
  // fontWeight:"bold",
  flexDirection: "column",
});
const StyledButton = styled(Button)({
  color: "white",
  "&:hover": {
    color: "black",
  },
});
const RightButton = styled(Button)({
  color: "white",
  // size: "large",
  border: "1px solid white",
  "&:hover": {
    color: "black",
  },
});

const NavBar = () => {
  
  const nav = useNavigate();

  function loginorsignup() {
    nav("/login");
  }
  function navigatemen()
  {
    nav('/Products/man')
  }
  function navigatewomen()
  {
    nav('/Products/women')
  }
  return (
    <AppBar position="sticky">
      <Stack direction="row" spacing={2} justifyContent={"space-between"}>
        <Toolbar sx={{ display: { xs: "none", md: "flex", xl: "center" } }}>
          <StyledButton onClick={navigatemen}>MAN</StyledButton>
          <StyledButton onClick={navigatewomen}>WOMAN</StyledButton>
          <StyledButton>KID</StyledButton>
          <StyledButton>SALE</StyledButton>
        </Toolbar>
        {/* <Box display={"flex"} alignItems={"center"} justifyContent={"space-between" }> */}
        <Box
          sx={{
            display: { xs: "block", sm: "block", md: "none" },
            padding: "0px",
          }}
        >
          {/* menu button for small screen */}
          <StyledButton>
            <LeftDrawer />
          </StyledButton>
        </Box>
        <StyledToolBar sx={{ display: { xs: "none", sm: "block",cursor:"pointer"} }} onClick={()=>{
          nav('/')
        }}>
          <Typography variant="h4" sx={{ fontFamily: "Scto_Grotesk_Regular" }}>
            DIESEL
          </Typography>
          successful living
        </StyledToolBar>

        {/* for smaller screen (title) */}

        <Toolbar
          sx={{
            display: { xs: "block", sm: "none", md: "none" },
            fontSize: "10px",
            flexGrow: 1,
            justifyContent: "left",
            alignItems: "left",
            padding: "0px",
          }}
        >
          <Typography variant="h6" sx={{ fontFamily: "Scto_Grotesk_Regular" }}>
            DIESEL
          </Typography>
          successful livng
        </Toolbar>
        {/* </Box> */}

        {/* for smaller screen */}

        <Toolbar
          sx={{
            display: { xs: "flex", md: "none", xl: "none" },
            padding: "0px",
          }}
        >
          <RightButton>
            <Person2Icon fontSize="s" />
          </RightButton>
          <RightButton>
            <SearchIcon fontSize="s" />
          </RightButton>

          <RightButton>
            <WorkIcon fontSize="s" />
          </RightButton>
        </Toolbar>
        {/* for bigger screen */}

        <Toolbar sx={{ display: { xs: "none", md: "flex", xl: "flex" } }}>
          <RightButton>
            <Person2Icon />
          </RightButton>
          <RightButton>
            <SearchIcon />
          </RightButton>
          <RightButton>
            <FavoriteIcon />
          </RightButton>
          <RightButton>
            <QuestionMarkIcon />
          </RightButton>
          <RightButton>
            <WorkIcon />
          </RightButton>
        </Toolbar>
      </Stack>
    </AppBar>
  );
};

export default NavBar;
