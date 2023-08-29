import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Grid, Stack } from '@mui/material';
import ProductStyle from './ProductStyle';
import { useEffect } from 'react';

export default function DropDown() {
  const [category, setCategory] = React.useState('');
  const [size, setSize] = React.useState('');
  const [prod,setProd]=React.useState([]);

  async function filterData(){
      let res= await fetch("http://localhost:3000/product")
      let data=await res.json()
      setProd(data);
      console.log(data);
  }
  useEffect(()=>{
    filterData()
    console.log(prod)
  },[])

  const handleChange = (event) => {
    setCategory(event.target.value);
    
  };
  const handleSize = (event) => {
    setSize(event.target.value);
    
  };

  
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
        {
          prod.map((el)=>{
            return (
              <Box key={el.id}>
                <ProductStyle {...el}/>

                </Box>
            )
          })
        }
      </Box>
    </Box>

    
  );
}
