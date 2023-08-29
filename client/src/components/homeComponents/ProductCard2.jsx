import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

const bg1 =
  "https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/t.resize(w:450)/product/410373919003/300/410373919003_1_9379.webp";

const ProductCard2 = () => {
  return (
    <Card sx={{ position: "relative" }}>
      {/* Add the favorite icon in the top right corner */}
      <IconButton
        sx={{ position: "absolute", top: 8, right: 8, zIndex: 1 }}
        aria-label="add to wishlist"
      >
        <FavoriteIcon />
      </IconButton>

      <CardHeader />
      <CardMedia
        component={"img"}
        max-height={"80%"}
        width={"%"}
        image={bg1}
        alt={"Demo project"}
      ></CardMedia>
      <CardContent>
        <Typography variant={"h6"} textAlign={"center"}>
          Hoody
        </Typography>
        <Typography variant={"p"} textAlign={"center"}>
          Hoody
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard2;
