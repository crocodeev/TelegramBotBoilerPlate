import { useState } from "react"
import { IconButton } from "@mui/material";
import ThumbDown from '@mui/icons-material/ThumbDown';



const DislikeBtn = () => {

    const [ mute, setMute ] = useState(false);
    
    return(
        <IconButton 
        component="label"
        size="large"
        onClick={() => setMute(!mute)}>
        <ThumbDown 
            color="action"
            fontSize="large"/>
        </IconButton>
    );
}

export default DislikeBtn