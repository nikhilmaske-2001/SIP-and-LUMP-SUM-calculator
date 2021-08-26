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
  const [totalAmount, setTotalAmount] = useState(0);
  const [investedAmount, setInvestedAmount] = useState(0);

  const calculateTotal = () => {
    var monthly_investment: number = +formData.monthly_investment;
    var period: number = +formData.period;
    var expected_return: number = +formData.return;
    var investment_amount: number = 0;
    var total: number = 0;

    for (var year = 1; year <= period; year++) {
      for (var month = 1; month <= 12; month++) {
        total = total + monthly_investment;
        investment_amount = investment_amount + monthly_investment;
      }
      var one_year_return = (total / 100) * expected_return;
      total = total + one_year_return;
    }
    setInvestedAmount(Math.round(investment_amount));
    setTotalAmount(total);
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
          <Box className={classes.Total}>Total: {totalAmount} <br />
            Invested Amount : {investedAmount}</Box>
        </CardContent>
      </Card>
    </div >
  );
}

export default App;
