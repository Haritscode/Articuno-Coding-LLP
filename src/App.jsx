import './App.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
function App() {
  return (
    <>
    <div>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" className='Mui-focused' />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </Box>
    </div>
    </>
  );
}

export default App;