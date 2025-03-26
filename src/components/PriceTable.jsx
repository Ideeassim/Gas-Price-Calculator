import { useState, React } from 'react';
import { Box, Button, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';

const PriceTable = ({Z, orange}) => {
  const navigate= useNavigate();
    const gD= Array.from({length:15}, (_, item)=>{
        return  item + 1;
       })
       
       
       const t =[...gD,25, 50, 60]
   
       
        const gasData2= Array.from(t, i =>{
         const weight = i +0;
         const unitPrice =Z/12.5
        
         function customRound(num) {
            let wholePart = Math.floor(num); // Get the whole number part
            let decimalPart = num - wholePart; // Extract the decimal part
          
            if (decimalPart >= 0.5 && decimalPart <= 0.9) {
              return wholePart + 0.5; // Round to 5
            } else {
              return Math.round(num); // Round normally (0.4 and below goes to 0)
            }
          }

         const price= customRound((i* unitPrice/100))*100;
       
         return {weight,price};
        })
       
       //pagination
       //set current page state:
       const [currentPage, setCurrentPage]= useState(1);
       const itemsPerPage=7;
       
       //get items for current page
       const startIndex= (currentPage -1)*7;
       const displayedData= gasData2.slice(startIndex, startIndex+itemsPerPage);
       
       //calculate total pages
       const totalPages= Math.ceil(gasData2.length/itemsPerPage);
   
       
        
  return (
    <Box  width='400rem' >
      
      
        <Box sx={{marginBottom:{xs:'10px', sm:'10px', lg:'0px'}}}><Button onClick={()=>navigate("/")}  variant="contained" color={orange}><Typography sx={{fontFamily: 'Raleway, serif'}} >Change Price</Typography></Button></Box>
        
   <Box sx={{display:'flex', justifyContent:'center'}}>
    {/* TABLE */}
    <TableContainer component={Paper} sx={{width:{sm:500,lg:500}, fontFamily: 'Raleway, serif', height:500, overflowY:'auto', opacity:'0.9'}} >
      <Table sx={{ maxWidth: 500}} aria-label="simple table">
        <TableHead sx={{fontFamily: 'Raleway, serif'}}>
          <TableRow >
            <TableCell sx={{fontSize:'1.3rem', fontFamily: 'Raleway, serif', fontWeight:'900'}}>Weight</TableCell>
            <TableCell align="right" sx={{fontSize:'1.3rem',fontFamily: 'Raleway, serif', fontWeight:'900'}}>Price</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {displayedData.map((row, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{fontSize:'1.3rem',fontFamily: 'Raleway, serif'}}>
                {row.weight}kg
              </TableCell>
              <TableCell align="right" sx={{fontSize:'1.3rem',fontFamily: 'Raleway, serif'}}>₦{row.price}</TableCell>
            </TableRow> ))}
           
           
        </TableBody>
      </Table>
    </TableContainer>
</Box>
  

    <Stack spacing={2} sx={{marginTop:'10px', alignItems:'center'}}>
      
      <Pagination sx={{fontFamily: 'Raleway, serif'}} size='large' count={totalPages} color={orange} page={currentPage} onChange={(event, page)=>setCurrentPage(page)} />
      
    </Stack>
</Box>)
  
}

export default PriceTable