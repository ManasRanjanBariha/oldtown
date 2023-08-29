import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Productcard from "../components/homeComponents/ProductCard";
import ProductTypes from "../components/homeComponents/ProductTypes";
import "../styles/homestyle.css";
import SecondCoursel from "../components/homeComponents/SecondCoursel";
import NavBar from "../components/navbarComponents/NavBar";
import { ImageCard } from "../components/homeComponents/ImageCard";
import SmallCardCrousel from "../components/homeComponents/SmallCardCrousel";
import Footer from "../components/Footer";

import { useNavigate } from "react-router-dom";

const bg1 =
  "https://cdn.pixabay.com/photo/2015/09/05/21/57/girl-925635_640.jpg";
const Home = () => {
  const [login, setLogin] = useState(false);
  const arr = [1, 2, 3, 4, 5, 7, 8, 9, 9, 4];
  const ar1 = [1, 2, 3, 4];
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
                  FREEDOM PLEASURE & PLAY
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
                  <Button
                    variant="contained"
                    color="error"
                    size="large"
                    sx={{ "&:hover": { border: "1px solid white" } }}
                    onClick={()=>{
                      navigatemen()
                    }}
                  >
                    Discover Man
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    size="large"
                    sx={{ "&:hover": { border: "1px solid white" } }}
                    onClick={()=>{
                      navigatewomen()
                    }}
                  >
                    Discover Woman
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </div>
        </Box>
        <ProductTypes />
        <Box marginBottom={20}>
          <SecondCoursel />
        </Box>
        <Box marginBottom={10}>
          <SmallCardCrousel />
        </Box>
        <Box mb={20} />
        <Container>
          <Grid container spacing={3}>
            {ar1.map((e) => {
              return (
                <Grid item xs={6}>
                  <ImageCard />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default Home;
