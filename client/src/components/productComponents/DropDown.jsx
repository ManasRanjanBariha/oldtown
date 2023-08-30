import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Stack } from '@mui/material';
import ProductStyle from './ProductStyle';
import { useEffect, useState } from 'react';

export default function DropDown() {
  const [category, setCategory] = React.useState('');
  const [size, setSize] = React.useState('');
  const [prod, setProd] = React.useState([]);
  const [filteredProd, setFilteredProd] = useState([]);

  async function fetchData() {
    let res = await fetch("http://localhost:3000/product");
    let data = await res.json();
    setProd(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const filteredProducts = prod.filter((product) => {
      if (!category && !size) {
        return true; // No filters applied, show all products
      }
      if (category && size) {
        return product.product === category && product.size === size;
      }
      if (category) {
        return product.product === category;
      }
      if (size) {
        return product.size === size;
      }
    });
    setFilteredProd(filteredProducts);
  }, [category, size, prod]);

  const handleChange = (event) => {
    const selectedCategory = event.target.value;
    setCategory(selectedCategory);
  };

  const handleSize = (event) => {
    const selectedSize = event.target.value;
    setSize(selectedSize);
  };

  return (
    <Box>
      <Stack direction="row" spacing={2} marginTop={"2%"}>
        <Box sx={{ padding: "1%", fontWeight: "bold" }}>
          Filter By
        </Box>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              label="Category"
              onChange={handleChange}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value={'accessories'}>accessories</MenuItem>
              <MenuItem value={'jeans'}>jeans</MenuItem>
              <MenuItem value={'t-shirt'}>t-shirt</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Size</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={size}
              label="Size"
              onChange={handleSize}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value={'Small'}>Small</MenuItem>
              <MenuItem value={'Medium'}>Medium</MenuItem>
              <MenuItem value={'Large'}>Large</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Stack>

      <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent={'center'} gap={'3'}>
        {
          filteredProd.map((el) => (
            <Box key={el.id}>
              <ProductStyle {...el} />
            </Box>
          ))
        }
      </Box>
    </Box>
  );
}
