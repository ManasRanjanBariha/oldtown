import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardMedia,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import Productcard from "../components/Productcard";
import ProductTypes from "../components/ProductTypes";
import "../styles/homestyle.css";

import SecondCoursel from "../components/SecondCoursel";

import NavBar from "../components/NavBar";
import SmallCardCrousel from "../components/SmallCardCrousel";

const bg1 =
  "https://cdn.pixabay.com/photo/2015/09/05/21/57/girl-925635_640.jpg";
const Home = () => {
  const arr = [1, 2, 3, 4, 5, 7, 8, 9, 9, 4];
  return (
    <>
      <NavBar />
      <Box mb={2} pb={2}>
        <Box m={0}>
          <div className="home" style={{ backgroundImage: `url(${bg1})` }}>
            <Stack
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              textAlign={"center"}
            >
              <Stack
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                textAlign={"center"}
              >
                <Typography variant="h2" color="secondary">
                  FREEDOM PLESURE & PLAY
                </Typography>
                <Typography variant="h4" color={"secondary"}>
                  Discover winter collection 2023
                </Typography>
                <Stack
                  mt={2}
                  display={"flex"}
                  flexDirection={"row"}
                  gap={3}
                  justifyContent={"center"}
                >
                  <Button variant="contained" color="error" size="large" sx={{
                    '&:hover': {
                      border: '2px solid', // Adding a border to create an "outlined" effect
                      backgroundColor: 'secondary',
                      color: 'error',
                    },
                  }}>
                    Discover Man
                  </Button>
                  <Button variant="contained" color="error" size="large"  sx={{
                    '&:hover': {
                      border: '2px solid', 
                      backgroundColor: 'secondary',
                      color: 'error',
                    },
                  }}>
                    Discover Woman
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </div>
        </Box>

        <ProductTypes />
        <Box>
        <SecondCoursel />
        </Box>
        
        <Box mt={20}>
          <SmallCardCrousel />
        </Box>
      </Box>
    </>
  );
};

export default Home;
