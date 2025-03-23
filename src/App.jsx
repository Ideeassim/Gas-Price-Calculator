
import { useState, React } from 'react';
import { Box } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
function App() {
//  const [currentPage, setCurrentPage] = useState(1);

 //generate data
 const gasData=Array.from({length:15}, (_, item) =>{
   const weight =( item +3) ;
  const price = weight * 1000;
 
   return {weight, price};
 })
const t =[25, 50, 60]
 const gasData2= Array.from(t, i =>{
  const wght = i +0;
  const p2= i * 1000;

  return {wght,p2};
 })

//pagination
//set current page state:
const [currentPage, setCurrentPage]= useState(1)

 

 

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
          {gasData.map((row) => (
            <TableRow
              key={row.weight}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.weight}
              </TableCell>
              <TableCell align="right">{row.price}</TableCell>
            </TableRow> ))}
             {gasData2.map((row, index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.wght}
                </TableCell>
               
                  
                   
                 
                <TableCell align="right">{row.p2}</TableCell>
              </TableRow>
              
          ))}
           
        </TableBody>
      </Table>
    </TableContainer>
</Box>)
}

export default App;
