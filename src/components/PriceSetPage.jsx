import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';



const PriceSetPage = ({X,Y,orange, grayColor, white}) => {

const [bottlePrice, setBottlePrice]=useState('');

const [error, setErrorProp]=useState(false)
const navigate= useNavigate();

function handleSubmit() {
    if (bottlePrice) {
     X(true);
     Y(bottlePrice);
     navigate("/table");
    }else{
      setErrorProp(true);
     
    }
}
   

  return (
    <Paper sx={{ width:{ xs: '120%', sm: '80%', md: '70%', lg: '60%' },position:'relative', height:{lg:'15rem'},  padding:'20px', paddingY:'50px', opacity:'0.9', fontFamily: 'Raleway, serif'}}  elevation={8} >
      <Box sx={{position:'absolute', top:'-50%',left:'-10%', width:'120%', textAlign:'center'}}><Typography color={white} sx={{fontSize:{xs:'3rem', sm:'3rem', md:'3.5rem', lg:'4rem'}}} variant='h2' fontWeight='400' fontFamily='Monomakh, system-ui'><span style={{color:'#EB5B00'}}>GAS PRICE </span>CALCULATOR</Typography></Box>
        <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <label htmlFor="priceSet"><Typography sx={{ fontFamily: 'Playfair Display, serif',fontSize: { xs: '1rem', sm: '1.5rem', md: '1.5rem', lg: '2.0rem' },  }} variant={{sm:'h1',lg:'h5'}} color={grayColor}>What is the price for 12.5kg?</Typography ></label>
         <Stack display='flex' direction={{sm:'column', lg:'row'}} alignItems='center' marginTop={2}>
         <FormControl  sx={{ m: 1 }} >
          <InputLabel htmlFor="outlined-adornment-amount" color={orange}>Amount</InputLabel>
          <OutlinedInput 
            id="outlined-adornment-amount" color={orange}
            startAdornment={<InputAdornment position="start">₦</InputAdornment>}
            label="Amount"
            error={error} 
          onChange={(event)=>{setBottlePrice(event.target.value)}} value={bottlePrice} />
        </FormControl>
         <p style={{color:'red'}} className='error2'>{error ? "This field cannot be empty2" : ""} </p>
       <Box>
        <Button onClick={handleSubmit} variant="contained" color={orange}><Typography sx={{fontFamily: 'Raleway, serif'}} >Calculate</Typography></Button>
       
        </Box>
        </Stack> <p style={{color:'red'}} className='error'>{error ? "This field cannot be empty" : ""} </p>
        </Box>
    </Paper>
  )
}

export default PriceSetPage;