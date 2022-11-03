import MuteBtn from "../companents/MuteBtn";
import NextBtn from "../companents/NextBtn";
import DislikeBtn from "../companents/DislikeBtn";
import Bar from "../companents/Bar";
import SongName from "../companents/SongName";
import { Grid } from '@mui/material';
import { useState } from "react";
import { Link } from "react-router-dom";         

const Controls = () => {

    const tracks = [
    "Михаил Круг - Кольщик",
    "Громыка - Говорил я вам",
    "Биртман - Илососка",
    "НОМ - Подшиток"
    ];

    let [counter, setCounter] = useState(0);

    const changeTrack = () => {
        
      if(counter < tracks.length - 1){
        setCounter(counter + 1);
      }else{
        setCounter(0);
      }
    }



    return(
    <div>
        <Grid container  
        justifyContent="center"
        rowSpacing={5}>
        <Grid item xs={12}>
        <Bar></Bar>
        </Grid>  
        <Grid item xs={12}>
        <SongName song={ tracks[counter] }></SongName>
        </Grid>    
        <Grid item 
        justifyContent="center">
            <MuteBtn />
            <NextBtn onClick={changeTrack}/>
            <Link to="bye">
            <DislikeBtn />
            </Link>
        </Grid>
        </Grid>
    </div>
    )
}



export default Controls;