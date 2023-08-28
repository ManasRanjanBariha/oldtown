import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid, Hidden } from '@mui/material';


const img="https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/t.resize(w:500)/product/410279568029/665/410279568034_1_8604.webp"



const ProductStyle=(prop)=> {
  const { name, image } = prop;
  return (
    <Grid marginTop={"3%"}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="80%"
          image={image}
          alt="product_images"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            ${name}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{whiteSpace: "nowrap", overflow: "hidden",textOverflow: "ellipsis"}}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
     </CardActionArea>
    </Card>
    </Grid>
  );
}
export default ProductStyle;
