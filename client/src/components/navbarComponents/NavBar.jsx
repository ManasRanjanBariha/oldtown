import { AppBar, Box, Button, Stack, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
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
  const [showBox, setShowBox] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);


  const nav = useNavigate();

  function loginorsignup() {
    nav("/login");
  }
  function navigatemen() {
    nav("/Products/man");
  }
  function navigatewomen() {
    nav("/Products/women");
  }

  function searchBar() {
    setShowBox(!showBox);
  }
  const handleSearch = () => {
    // Perform the search based on searchQuery
    // For example, you can filter your products based on the search query
    // const filteredResults = prod.filter((product) =>
    //   product.product.toLowerCase().includes(searchQuery.toLowerCase())
    // );

    // setSearchResults(filteredResults);
    // console.log(searchResults);
    nav("/Products/man");
  };

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
        <StyledToolBar
          sx={{ display: { xs: "none", sm: "block", cursor: "pointer" } }}
          onClick={() => {
            nav("/");
          }}
        >
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
          <RightButton onClick={loginorsignup}>
            <Person2Icon fontSize="s" />
          </RightButton>
          <RightButton onClick={searchBar}>
            <SearchIcon fontSize="s" />
          </RightButton>

          <RightButton>
            <WorkIcon fontSize="s" />
          </RightButton>
        </Toolbar>
        {/* for bigger screen */}

        <Toolbar sx={{ display: { xs: "none", md: "flex", xl: "flex" } }}>
          <RightButton onClick={loginorsignup}>
            <Person2Icon />
          </RightButton>
          <RightButton onClick={searchBar}>
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
     
      {showBox && (
        <div className={"sBox"}>
           <div style={{background:"white"}}>
          <input
            type="text"
            placeholder="What are you looking for?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: "80%",
              padding: "15px",
              border: "1px solid #e0e0e0",
            }}
          />
          <button style={{background:"white",color:"black",height:"auto",width:"auto"}} onClick={handleSearch}>Search</button>
        </div>
        {/* Display search results */}
        <div>
            {searchResults.map((result) => (
              <div key={result.id}>
                {result.product}
               
                </div>
            ))}
          </div>
        </div>
      )}
    </AppBar>
  );
};

export default NavBar;
