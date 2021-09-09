import React, { useState } from 'react';
import { FormControl, InputLabel, Input, Card, CardContent, Box, Button, Typography } from '@material-ui/core';
import { useStyles } from "./styles";
import { Doughnut } from "react-chartjs-2";
import { chartColors } from './colors/chartColors';
import SideGraph from './components/SideGraph';

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
  const [chartData, setChartData] = useState({});
  const [openChart, setOpenChart] = useState(false);

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
      var one_year_return = Math.round((total / 100) * expected_return);
      total = Math.round(total + one_year_return);
    }
    investment_amount = Math.round(investment_amount);
    total = Math.round(total);
    var wealthGain = total - investment_amount;
    setInvestedAmount(investment_amount);
    setTotalAmount(total);
    setChartData({
      maintainAspectRatio: false,
      responsive: false,
      labels: ["Amount Invested", "Wealth Gain"],
      datasets: [
        {
          data: [investment_amount, wealthGain],
          backgroundColor: chartColors,
          hoverBackgroundColor: chartColors
        }
      ]
    });
  };

  const open_chart = () => {
    setOpenChart(!openChart);
  }

  const options = {
    legend: {
      display: false,
      position: "right"
    },
    elements: {
      arc: {
        borderWidth: 0
      }
    }
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
          <Box className={classes.Total}>Total: ₹ {totalAmount} <br />
            Invested Amount : ₹ {investedAmount}</Box>
        </CardContent>
        <Card className={classes.summery}>
          <Typography> Summery </Typography>
        </Card>
        <Button className={classes.graph_button} onClick={open_chart}>Show in Graph</Button>
        <Doughnut className={classes.piechart} data={chartData} options={options} />
      </Card>
      {
        openChart &&
        <SideGraph />
      }
    </div >
  );
}

export default App;
