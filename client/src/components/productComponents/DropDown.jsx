import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Grid, Stack } from '@mui/material';
import ProductStyle from './ProductStyle';

export default function DropDown() {
  const [category, setCategory] = React.useState('');
  const [size, setSize] = React.useState('');

  const handleChange = (event) => {
    setCategory(event.target.value);
    
  };
  const handleSize = (event) => {
    setSize(event.target.value);
    
  };
  const arr=[
    1,2,3,4,5,6,7,8,9
  ]
  const prods = [
    {
      name: "Bootcut",
      image:
        "https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/t.resize(w:300)/banner/1692280540bootcut_fl.webp",
    },
    {
      name: "Slim",
      image:
        "https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/t.resize(w:300)/banner/1692280540bootcut_fl.webp",
    },
    {
      name: "Skinny",
      image:
        "https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/t.resize(w:300)/banner/1692280540bootcut_fl.webp",
    },
    {
      name: "Straight",
      image:
        "https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/t.resize(w:300)/banner/1692280493straight_fl.webp",
    },
    {
      name: "Skinny",
      image:
        "https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/t.resize(w:300)/banner/1692280599superskinny_fl.webp",
    },
    {
      name: "Boyfriend",
      image:
        "https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/t.resize(w:300)/banner/1692280452boyfriend_fl.webp",
    },
  ];

  return (
    <Box>
    <Stack direction="row" spacing={2} marginTop={"2%"}>
        <Box sx={{padding:"1%",fontWeight:"bold"}}>
        Filter By
        </Box>
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Accessories</MenuItem>
          <MenuItem value={20}>Jeans</MenuItem>
          <MenuItem value={30}>T-shirt</MenuItem>
        </Select>
      </FormControl>
    </Box>
     {/* filter by size */}
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Size</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={size}
          label="Age"
          onChange={handleSize}
        >
          <MenuItem value={10}>Small</MenuItem>
          <MenuItem value={20}>Medium</MenuItem>
          <MenuItem value={30}>Large</MenuItem>
        </Select>
      </FormControl>
    </Box>

    </Stack>

    <Box display="flex" flexDirection="row" flexWrap="wrap">
        {prods.map((item) => (
          <Box key={item} flexGrow={1} maxWidth="25%" padding="16px">
            <ProductStyle {...item} />
          </Box>
        ))}
      </Box>
    </Box>

    
  );
}
