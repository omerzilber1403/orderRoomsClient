import * as React from 'react';
import { Grid, Button, Typography } from '@mui/material';
import useStyles from "./Styles";
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import { Link, useLocation } from 'react-router-dom';
let theme = createTheme();
theme = responsiveFontSizes(theme);


export default function BasicGrid() {
    const classes = useStyles();
    

    return (
        <Grid container className={classes.root} rowSpacing={0} columnSpacing={0}>
            <Grid item xs={12} className={classes.textItem}>
                <ThemeProvider theme={theme}>
                    <Typography variant="h3" className={classes.text}>ברוכים הבאים<br/> בחרו מהאפשרויות הבאות</Typography>
                </ThemeProvider>
               
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} className={classes.item}>
                    <Button  component={Link} to="/choose-room" variant="contained" color="secondary" className={classes.button} size="large">אני יודע איזה כיתה אני רוצה</Button>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} className={classes.item}>
                    <Button component={Link} to="/calendar" variant="contained" color="secondary" className={classes.button} size="large">לחיפוש כיתה לפי תאריך</Button>
            </Grid>
        </Grid>
    );
}