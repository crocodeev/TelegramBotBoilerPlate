import { useState } from "react"
import { IconButton } from "@mui/material";
import VolumeUp from '@mui/icons-material/VolumeUp';
import VolumeOff from '@mui/icons-material/VolumeOff';


const MuteBtn = () => {

    const [ mute, setMute ] = useState(false);
    
    return(
        <IconButton color="primary" 
        component="label"
        size="large"
        onClick={() => setMute(!mute)}>
        { mute ? <VolumeOff 
        fontSize="large"
        color="action" 
        /> 
        : 
        <VolumeUp 
        fontSize="large" 
        color="action"
        />}
        </IconButton>
    );
}

export default MuteBtn