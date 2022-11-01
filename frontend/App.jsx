import MuteBtn from "./companents/MuteBtn";
import NextBtn from "./companents/NextBtn";
import DislikeBtn from "./companents/DislikeBtn";
import Bar from "./companents/Bar";
import { Container, Grid, Box, Typography } from '@mui/material';

const App = () => {
    return(
    <div>
        <Grid>
        <Bar></Bar>
        </Grid>
        <Grid container  justifyContent="center">
        <Grid container>
        <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            INPLAY
          </Typography>
        </Grid>    
        <Grid justifyContent="center">
            <MuteBtn />
            <NextBtn />
            <DislikeBtn />
        </Grid>
        </Grid>
    </div>
    )
}

export default App;