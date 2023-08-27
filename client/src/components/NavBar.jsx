import {
  AppBar,
  Box,
  Button,
  Container,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { Theme } from "../Theme";
import styled from "@emotion/styled";
import Person2Icon from "@mui/icons-material/Person2";
import SearchIcon from "@mui/icons-material/Search";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import FavoriteIcon from "@mui/icons-material/Favorite";
import WorkIcon from "@mui/icons-material/Work";

import LeftDrawer from "./LeftDrawer";

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
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
  fontsize: "2px",
  border: "1px solid white",
  "&:hover": {
    color: "black",
  },
});

const NavBar = () => {
  return (
    <AppBar position="sticky">
        <Stack
          direction="row"
          spacing={2}
          justifyContent={"space-between"}
          
        >
          <Toolbar sx={{ display: { xs: "none", md: "flex", xl: "center" } }}>
            <StyledButton>MAN</StyledButton>
            <StyledButton>WOMAN</StyledButton>
            <StyledButton>KID</StyledButton>
            <StyledButton>SALE</StyledButton>
          </Toolbar>
          <Box display={"flex"} alignItems={"center"}>
            <Box sx={{ display: { sm: "block", md: "none" } }}>
              {/* menu button for small screen */}
              <StyledButton>
                <LeftDrawer />
              </StyledButton>
            </Box>
            <StyledToolBar>
              <Typography
                variant="h4"
                sx={{ fontFamily: "Scto_Grotesk_Regular" }}
              >
                DIESEL
              </Typography>
              successful livng
            </StyledToolBar>
          </Box>
          <Toolbar>
            <RightButton>
              <Person2Icon fontSize="inherit" />
            </RightButton>
            <RightButton>
              <SearchIcon fontSize="inherit" />
            </RightButton>

            <RightButton>
              <WorkIcon fontSize="inherit" />
            </RightButton>
          </Toolbar>
        </Stack>
   
    </AppBar>
  );
};

export default NavBar;
