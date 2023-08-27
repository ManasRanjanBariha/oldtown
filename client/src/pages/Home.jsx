import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardMedia,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import Productcard from "../components/Productcard";
import ProductTypes from "../components/ProductTypes";
import "../styles/homestyle.css";
import NavBar from "../components/NavBar";
const bg1 =
  "https://cdn.pixabay.com/photo/2015/09/05/21/57/girl-925635_640.jpg";
const Home = () => {
  return (
    <>    <NavBar/>
    <Box mb={2} pb={2}>
      <Box m={0}>
        <div className="home"  style={{ backgroundImage: `url(${bg1})` }}>
          <Stack
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            textAlign={"center"}
          >
            <Typography variant="h2" color="white.main">
              FREEDOM PLESURE & PLAY
            </Typography>
            <Typography variant="h4" color={"white.main"}>Discover winter collection 2023</Typography>
            <Stack
            mt={2}
              display={"flex"}
              flexDirection={"row"}
              gap={3}
              justifyContent={"center"}
            >
              <Button variant="contained" color="error" size="large">
                Discover Man
              </Button>
              <Button variant="contained" color="error" size="large">
                Discover Woman
              </Button>
            </Stack>
          </Stack>
        </div>
      </Box>
      <ProductTypes />
      </Box>
      </>

  );
};

export default Home;
