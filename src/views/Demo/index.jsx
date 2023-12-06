import { Grid } from '@mui/material';
import styles from './demo.module.css';
import HeTuLuoShu from './components/HeTuLuoShu';

const Demo = () => {

    return (
        <Grid container className={styles.container}>
            <Grid container className={styles.content}>
                <Grid xs={12} sm={1}/>
                <Grid xs={12} sm={10} className={styles.wrapper}>
                    <HeTuLuoShu/>
                </Grid>
                <Grid xs={12} sm={1}/>
            </Grid>
        </Grid>
    )
}

export default Demo;