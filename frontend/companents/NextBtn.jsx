import { useState } from "react"
import { IconButton } from "@mui/material";
import SkipNext from '@mui/icons-material/SkipNext';



const NextBtn = ({onClick}) => {

    const [ mute, setMute ] = useState(false);
    
    return(
        <IconButton 
        component="label"
        size="large"
        onClick={() => { onClick()}}
        >
        <SkipNext 
            color="action"
            fontSize="large"/>
        </IconButton>
    );
}

export default NextBtn