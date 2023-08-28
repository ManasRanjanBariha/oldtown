import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const bg1 =
  "https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/t.resize(w:450)/product/410373919003/300/410373919003_1_9379.webp";

const ProductCard2 = () => {
  return (
    <Card sx={{}}>
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
