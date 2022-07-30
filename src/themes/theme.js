import { createTheme } from '@mui/material/styles';

let myTheme = createTheme({
    breakpoints: {
        values: {
          xs: 0,
          xs2:400,
          sm: 600,
          sm2:750,
          md: 900,
          lg: 1200,
          xl: 1536,
        },
      },
});    


export default myTheme;