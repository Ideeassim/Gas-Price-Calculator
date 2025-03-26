import { BrowserRouter, Routes, Route} from "react-router-dom";
import {React, useState} from "react";
import PriceTable from "./components/PriceTable";
import PriceSetPage from "./components/PriceSetPage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box } from "@mui/material";

function App() { 
  const [priceState, setPrice]= useState(false);
  const [GasPrice, setGasPrice]=useState('');
  


// color customization
const { palette } = createTheme();
const theme = createTheme({
  palette: {
   
   myOrangeColor: palette.augmentColor({
      color: {
        main: '#EB5B00',
        contrastText:'#F2F6D0'
      }
   }),
   grayColor: palette.augmentColor({
    color:{
      main:'#18230F'
    }
   }),
   offWhite:palette.augmentColor({
    color:{
      main:'#F2F6D0'
    }
   })
  }});

  return (
    <Box className='bg' display='flex' alignItems='center'  >
      <Box className='overlay' zIndex={0}></Box>
      <Box zIndex={1} width='70%' marginX='15%' display='flex' justifyContent='center' >
    <ThemeProvider theme={theme} className='bg'>
  <BrowserRouter >
   
  <Routes>

  <Route path="/" element={<PriceSetPage X= {setPrice} Y={setGasPrice} orange='myOrangeColor' grayColor='grayColor' white='offWhite'/>}></Route>
<Route path="/table" element={<PriceTable Z={GasPrice} orange='myOrangeColor'/> }></Route>
    
  </Routes>   
  </BrowserRouter>
  </ThemeProvider></Box></Box>
  )
}

export default App;
