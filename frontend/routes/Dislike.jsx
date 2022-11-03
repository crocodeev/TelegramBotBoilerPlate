import Bar from "../companents/Bar";
import { Grid } from '@mui/material';
import { Button, List, ListItem, ListItemButton, ListItemText} from '@mui/material';

import { Link } from "react-router-dom";         

const Dislike = () => {

    return(
    <div>
        <Grid container  
        justifyContent="center"
        rowSpacing={5}>

        <Grid item xs={12}>
        <Bar></Bar>
        </Grid>

        <Grid
        justifyContent='center'
        alignItems='flex-start'>
        <Link to="/">
          <List>
            <ListItem>
              <ListItemButton>
              <ListItemText primary="Не формат ✂️"/>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
              <ListItemText primary="Не нравится 🔻"/>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
              <ListItemText primary="Не надоел 😪"/>
              </ListItemButton>
            </ListItem>
          </List>
        </Link>  
        </Grid>

        </Grid>
      
    </div>
    )
}



export default Dislike;