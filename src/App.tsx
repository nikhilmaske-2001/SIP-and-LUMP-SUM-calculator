import { FormControl, InputLabel, Input, Card, CardContent, Box } from '@material-ui/core';
import React from 'react';
import './App.css';
import { useStyles } from "./styles";

function App() {
  const classes = useStyles();
  return (
    <div className={classes.Container}>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <FormControl className={classes.Box}>
            <InputLabel htmlFor="my-input">Montly Investment Amount (Rs)</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
          </FormControl>

          <FormControl className={classes.Box}>
            <InputLabel htmlFor="my-input">Investment Period (years)</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
          </FormControl>

          <FormControl className={classes.Box}>
            <InputLabel htmlFor="my-input">Expected Return (%)</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
          </FormControl>

          <Box className={classes.Total}>Total: </Box>
        </CardContent>
      </Card>
    </div >
  );
}

export default App;
