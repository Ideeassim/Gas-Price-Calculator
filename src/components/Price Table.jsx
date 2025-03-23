import {React, useState} from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


const PriceTable= () => {
  const[unitPrice, setUnitPrice]=useState();

 const weights =[];
 for (let i = 3; i < 21; i++) {
 weights.push(i);
  
 }
const secondWgts =[25,50,60]

 const price=[];
 for (let i = 1; i < weights.length; i++) {
 price.push(i*2000)
 }

 function calcPrice(event) {
  return setUnitPrice(event.target.value);
 }

  return (
    <Box
    sx={{
      display: 'flex',
      flexDirection:'column',
      height:'20rem',
      width:'auto',
      gap:'15px'
    
    }}
  >
    
      <Box display='flex' gap={3}>
      <label htmlFor="12.5kg" class='text-[#D5C7A3]'>12.5kg Cylinder</label>
      <input type="text" name="" id="" class='outline rounded' onChange={calcPrice}/>
      
      </Box><p>Unit Price is: {unitPrice}</p>
      {/* table */}
   <Box display='flex' gap={5}>
{/* first table */}
   <TableContainer component={Paper}>
<Table sx={{ minWidth: 600 }} aria-label="simple table">
  <TableHead>
    <TableRow>
      <TableCell>Weight</TableCell>
      <TableCell align="right">Price</TableCell>
    </TableRow>
  </TableHead>
  {/* Body */}
  <TableBody>
    {
      // Create the weights array from 3kg to 21kg
      [...Array(13)].map((_, index) => {
        const weight = 3 + index; // Create weights from 3 to 21
        const price = ((unitPrice/12.5) * weight).toFixed(2); // Example price logic: 5 per kg

        return (
          <TableRow key={weight}>
            <TableCell component="th" scope="row">
              {weight}kg
            </TableCell>
            <TableCell align="right">{price}</TableCell>
          </TableRow>
        );
      })
    }
  
  </TableBody>
</Table>
</TableContainer>
 {/* second table */}
 <TableContainer component={Paper}>
<Table sx={{ minWidth: 600 }} aria-label="simple table">
  <TableHead>
    <TableRow>
      <TableCell>Weight</TableCell>
      <TableCell align="right">Price</TableCell>
    </TableRow>
  </TableHead>
  {/* Body */}
  <TableBody>
    {
      // Create the weights array from 3kg to 21kg
      [...Array(10)].map((_, index) => {
        const weight = 16 + index; // Create weights from 3 to 21
        const price = ((unitPrice/12.5) * weight).toFixed(2); // Example price logic: 5 per kg

        return (
          <TableRow key={weight}>
            <TableCell component="th" scope="row">
              {weight}kg
            </TableCell>
            <TableCell align="right">{price}</TableCell>
          </TableRow>
        );
      })
    }
   {secondWgts.map((weights)=>{
      const price2 = ((unitPrice/12.5) * weights).toFixed(2);
    return <TableRow >
            <TableCell component="th" scope="row">
            {weights}kg
            </TableCell>
            <TableCell align="right">{price2}</TableCell>
          </TableRow>
   })} 
  </TableBody>
</Table>
</TableContainer>
</Box>
   
    
  </Box>
  )
}

export default PriceTable