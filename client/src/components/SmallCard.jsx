import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const img="https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/t.resize(w:300)/banner/1692282522FW23_DROP_1_2_LOOKBOOK___OPC_SELL_OUT_CROPS_RAW_EDGES_(FL)___NEON_TOUCH_DENIM_(ML)_1_1_DIESEL__997.webp"
const SmallCard = () => {
  return (

    <Card>
    <CardMedia 
    component={"img"}
    max-height={"80%"}
    
    image={img}
    alt={"Demo project"}
    />
    <CardContent>
        <Typography variant={"h6"} textAlign={"center"}>
          Bags
        </Typography>
        </CardContent>
    </Card>
  )
}

export default SmallCard