import { Grid } from '@mui/material';
import './style.css';
import HeTuLuoShu from './components/HeTuLuoShu';

const Demo = () => {

    return (
        <Grid container className="container">
            <Grid container className="content">
                <Grid xs={12} sm={1}/>
                <Grid xs={12} sm={10} className="wrapper">
                    <HeTuLuoShu/>
                </Grid>
                <Grid xs={12} sm={1}/>
            </Grid>
        </Grid>
    )
}

export default Demo;