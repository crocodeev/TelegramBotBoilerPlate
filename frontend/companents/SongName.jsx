import { Typography } from "@mui/material";


const SongName = ({song}) => {
    
    console.log(song);

    return(
        <Typography
        align='center'
        variant='h5'>
                {song}
        </Typography>
    );
}

export default SongName