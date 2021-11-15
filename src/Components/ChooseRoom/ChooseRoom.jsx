import * as React from 'react';
import { useState, useEffect } from 'react';
import { Grid, Button, Typography, Autocomplete, TextField } from '@mui/material';
import useStyles from "./Styles";
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';

import { Link, useLocation } from 'react-router-dom';
import axios from "axios";

let theme = createTheme();
theme = responsiveFontSizes(theme);


export default function BasicGrid() {
    const classes = useStyles();
    const [options, setOptions] = React.useState([]);

    useEffect(() => {

      async function fetchData() {
        
        const request = await axios.get("/api/chooseRoom/get-rooms")
        .then()
        .catch((error) => console.log(error));
        let arr =request.data.map((obj) => {
          return obj.name
        })
        setOptions(arr);
        return request;
      }
      fetchData();
    }, []);
    
    return (
        <Grid container className={classes.root} rowSpacing={0} columnSpacing={0}>
            <Grid item xs={12} className={classes.textItem}>
                <ThemeProvider theme={theme}>
                    <Typography variant="h3" className={classes.text}>שם הכיתה</Typography>
                </ThemeProvider>
            </Grid>
            <Grid item xs={12} className={classes.AutocompleteItem}>
               <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={options}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="דוגמה: אודיטוריום" />}
                /> 
                
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} className={classes.item}>
                    <Button component={Link} to="/calendar" variant="contained" color="secondary" className={classes.button} size="large">לחיפוש כיתה לפי תאריך</Button>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} className={classes.item}>
                    <Button  component={Link} to="/choose-room" variant="contained" color="secondary" className={classes.button} size="large">המשך</Button>
            </Grid>
        </Grid>
    );
}