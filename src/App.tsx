import { FormControl, FormHelperText, InputLabel, Input } from '@material-ui/core';
import React from 'react';
import './App.css';
import { useStyles } from "./styles";

function App() {
  const classes = useStyles();
  return (
    <div className={classes.Container}>
      <FormControl>
        <InputLabel htmlFor="my-input">Montly Investment Amount (Rs)</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
      </FormControl>

      <FormControl>
        <InputLabel htmlFor="my-input">Investment Period (years)</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
      </FormControl>

      <FormControl>
        <InputLabel htmlFor="my-input">Expected Return (%)</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
      </FormControl>
    </div >
  );
}

export default App;
