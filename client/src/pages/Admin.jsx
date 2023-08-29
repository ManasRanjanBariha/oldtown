import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  Select,
  MenuItem,
} from "@mui/material";
// import Theme from "../Theme"

export const Admin = () => {
  const [category, setCategory] = React.useState("");
  const [size, setSize] = useState("");
  // console.log(category);
  // console.log(size);

  const handleOnChange = () =>{
      console.log("Jyoti");
  }
  const handleCategory = (event) =>{
    setCategory(event.target.value);
    // console.log("Category which has been selected is ");
    
  }

  const handleSize = (event) =>{
    setSize(event.target.value);
    // console.log("size which has been selected is ");
    
  }

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "100%" }, // Set width to 100%
        //  backgroundColor: '#ffcc00', // Set your desired background color
      }}
      display={"flex"}
      justifyContent={"center"}
      flexDirection={"column"}
      paddingX={"20%"}
      noValidate
      autoComplete="off"
    >


      <TextField
        id="outlined-multiline-flexible"
        label="Product Name *"
        multiline
        maxRows={4}
        fullWidth // Make this text field full width
        sx={{
          backgroundColor: "#87CEEB", // Set your desired background color
        }}
        onChange={handleOnChange}
      />


      <TextField
        id="outlined-multiline-static"
        label="Product Description *"
        multiline
        rows={5}
        // defaultValue="Default"
        fullWidth // Make this text field full width
        sx={{
          backgroundColor: "#87CEEB", // Set your desired background color
        }}
        onChange={handleOnChange}
      />


      <TextField
        fullWidth // Make this text field full width
        label="Image link"
        id="fullWidth"
        required
        sx={{
          backgroundColor: "#87CEEB", // Set your desired background color
        }}
      />


      <TextField
        fullWidth // Make this text field full width
        label="Image link"
        id="fullWidth"
        sx={{
          backgroundColor: "#87CEEB", // Set your desired background color
        }}
      />


      <TextField
        fullWidth // Make this text field full width
        label="Image link"
        id="fullWidth"
        sx={{
          backgroundColor: "#87CEEB", // Set your desired background color
        }}
      />


      <TextField
        id="outlined-multiline-flexible"
        label="$Price *"
        multiline
        maxRows={4}
        fullWidth // Make this text field full width
        sx={{
          backgroundColor: "#87CEEB", // Set your desired background color
        }}
      />

      <Box sx={{ display: "flex", paddingX: "20%" }}>
        <FormControl fullWidth sx={{ backgroundColor: "#87CEEB" }}>
          <InputLabel id="demo-simple-select-label">Category *</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            label="Category"
            onChange={handleCategory}
          >
            <MenuItem value={"Male"}>Male</MenuItem>
            <MenuItem value={"Female"}>Female</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth sx={{ backgroundColor: "#87CEEB" }}>
          <InputLabel id="demo-simple-select-label">Size *</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={size}
            label="Size"
            onChange={handleSize}
          >
            <MenuItem value={"Small"}>Small</MenuItem>
            <MenuItem value={"Medium"}>Medium</MenuItem>
            <MenuItem value={"Large"}>Large</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};
