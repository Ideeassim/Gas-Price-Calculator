import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';



const PriceSetPage = ({X,Y,orange}) => {

const [bottlePrice, setBottlePrice]=useState('');
const [errorMessage, setError]=useState('');
const navigate= useNavigate();

function handleSubmit() {
    if (bottlePrice) {
     X(true);
     Y(bottlePrice)
     navigate("/table");
    }else{
        setError('enter price!')
    }
}
   

  return (
    <Paper sx={{ width:'70%', height:'15rem', padding:'20px', paddingY:'50px', opacity:'0.9'}}  elevation={8} >
      
        <label htmlFor="priceSet"><Typography variant='h5'>What is the price for 12.5kg?</Typography ></label>
         <Stack display='flex' direction='row' alignItems='center' marginTop={2}>
         <FormControl  sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount" color={orange}>Amount</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount" color={orange}
            startAdornment={<InputAdornment position="start">₦</InputAdornment>}
            label="Amount"
          onChange={(event)=>{setBottlePrice(event.target.value)}} value={bottlePrice} />
        </FormControl>
        
       <Box>
        <Button onClick={handleSubmit} variant="contained" color={orange}><Typography>Calculate</Typography></Button>
        <p>{errorMessage}</p>
        </Box>
        </Stack>
    </Paper>
  )
}

export default PriceSetPage;