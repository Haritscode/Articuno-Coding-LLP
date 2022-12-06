import './App.css';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
import {useState,createContext} from 'react';
import App1 from './App1';
const initalState={
  color:"white"
}
const GlobalProvider=createContext();
function App() {
  const [color, setColor] = useState(false);
  const aulterColor=(value)=>{
    setColor(!value);
  }
  // const colorChange=()=>{
  //   setisTrue(false)
  // }
  return (
    <>
    {/* <div>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" className='custom_input' />
      <TextField id="filled-basic" label="Filled" variant="filled" className="custom_input_2"/>
      <TextField id="standard-basic" label="Standard" variant="standard" className='custom_input_3' />
    </Box>
    </div> */}
    <div>
      <GlobalProvider.Provider value={{color,aulterColor}}>
        <App1/>
      </GlobalProvider.Provider>
    </div>
    </>
  );
}

export default App;
export {GlobalProvider};
