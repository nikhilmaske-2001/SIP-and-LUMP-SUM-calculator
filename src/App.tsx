import React, { useState } from 'react';
import { FormControl, InputLabel, Input, Card, CardContent, Box, Button } from '@material-ui/core';
import { useStyles } from "./styles";

const initialState = {
  monthly_investment: "",
  period: "",
  return: "",
}

function App() {
  const classes = useStyles();

  const [formData, setFormData] = useState(initialState);
  const [totalAmount, setTotalAmount] = useState("");

  const calculateTotal = () => {
    console.log(formData);
    setTotalAmount(formData.monthly_investment);
  };

  return (
    <div className={classes.Container}>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <FormControl className={classes.Box}>
            <InputLabel htmlFor="my-input">Monthly Investment Amount (Rs)</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" onChange={(e) => setFormData({ ...formData, monthly_investment: e.target.value })} />
          </FormControl>

          <FormControl className={classes.Box}>
            <InputLabel htmlFor="my-input">Investment Period (years)</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" onChange={(e) => setFormData({ ...formData, period: e.target.value })} />
          </FormControl>

          <FormControl className={classes.Box}>
            <InputLabel htmlFor="my-input">Expected Return (%)</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" onChange={(e) => setFormData({ ...formData, return: e.target.value })} />
          </FormControl>

          <Button className={classes.Button} variant="outlined" color="primary" fullWidth
            onClick={calculateTotal}> Calculate </Button>
          <Box className={classes.Total}>Total: {totalAmount}</Box>
        </CardContent>
      </Card>
    </div >
  );
}

export default App;
