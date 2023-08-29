import React from "react";
import Box from "@mui/material/Box";

export const ImageCard = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "35vw",
        background: "white",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <Box
        sx={{
          width:"100%",
          height:"35vw",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          backgroundImage:
            'url("https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/original/cms_images/1692290682LOGOMANIA.webp?compress=true&q=70")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="image">
          <h1 style={{ color: "white" }}>LOGOMANIA</h1>
        </div>
      </Box>
    </Box>
  );
};
