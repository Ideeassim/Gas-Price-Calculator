
import { useState, React } from 'react';
import { Box, Button } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function App() {

  const gD= Array.from({length:15}, (_, item)=>{
 return  item + 1;
})


const t =[...gD,25, 50, 60]
console.log(t);

 const gasData2= Array.from(t, i =>{
  const weight = i +0;
  const price= i * 1000;

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
console.log(totalPages);

 

 

  return (
<Box>
    {/* TABLE */}
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: 500 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Weight</TableCell>
            <TableCell align="right">Price</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {displayedData.map((row) => (
            <TableRow
              key={row}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.weight}
              </TableCell>
              <TableCell align="right">{row.price}</TableCell>
            </TableRow> ))}
           
           
        </TableBody>
      </Table>
    </TableContainer>

    <Box>
      <Button onClick={()=>setCurrentPage(currentPage-1)} disabled={currentPage===1}>Previous</Button>
      <Button onClick={()=>setCurrentPage(currentPage+1)} disabled={currentPage===totalPages}>Next</Button>
    </Box>
</Box>)
}

export default App;
