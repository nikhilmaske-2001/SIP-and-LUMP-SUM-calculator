import React, { useState } from 'react';
import { FormControl, InputLabel, Input, Card, CardContent, Box, Button } from '@material-ui/core';
import { useStyles } from "./styles";
import { Doughnut } from "react-chartjs-2";
import { chartColors } from './colors/chartColors';
import SideGraph from './components/SideGraph';

const initialState = {
  monthly_investment: "",
  period: "",
  return: "",
}

const initialStateLump = {
  investment: "",
  period: "",
  return: "",
}

function App() {
  const classes = useStyles();

  const [formData, setFormData] = useState(initialState);
  const [formDataLump, setFormDataLump] = useState(initialStateLump);
  const [totalAmount, setTotalAmount] = useState(0);
  const [investedAmount, setInvestedAmount] = useState(0);
  const [chartData, setChartData] = useState({});
  const [investedData, setinvestedData] = useState({});
  const [compondedData, setcompoundedData] = useState({});
  const [investedDataLump, setinvestedDataLump] = useState({});
  const [compoundedDataLump, setcompoundedDataLump] = useState({});
  const [openChart, setOpenChart] = useState(false);
  const [page, setPage] = useState(1);

  const calculateTotal = () => {
    var monthly_investment: number = +formData.monthly_investment;
    var period: number = +formData.period;
    var expected_return: number = +formData.return;
    var investment_amount: number = 0;
    var total: number = 0;
    var invested_graph = [];
    var expected_graph = [];

    for (var year = 1; year <= period; year++) {
      for (var month = 1; month <= 12; month++) {
        total = total + monthly_investment;
        investment_amount = investment_amount + monthly_investment;
      }
      var one_year_return = Math.round((total / 100) * expected_return);
      total = Math.round(total + one_year_return);
      invested_graph.push(investment_amount);
      expected_graph.push(total);
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
    setinvestedData(invested_graph);
    setcompoundedData(expected_graph);
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

  const openSIP = () => {
    setPage(1);
    setFormData(initialState);
    setFormDataLump(initialStateLump);
    setChartData({});
    setTotalAmount(0);
    setInvestedAmount(0);
    setinvestedData({});
    setcompoundedData({});
    setinvestedDataLump({});
    setcompoundedDataLump({});
  }

  const openLump = () => {
    setPage(0);
    setFormData(initialState);
    setFormDataLump(initialStateLump);
    setChartData({});
    setTotalAmount(0);
    setInvestedAmount(0);
    setinvestedData({});
    setcompoundedData({});
    setinvestedDataLump({});
    setcompoundedDataLump({});
  }

  // Lump
  const calculateTotalLump = () => {
    var investment: number = +formDataLump.investment;
    var period: number = +formDataLump.period;
    var expected_return: number = +formDataLump.return;
    var expected_graph = [];
    var initialInvestment: number = +formDataLump.investment;
    expected_graph.push(investment);

    for (var year = 1; year <= period; year++) {
      investment = investment + Math.round((investment / 100) * expected_return);
      expected_graph.push(investment);
    }

    console.log(expected_graph);
    var wealthGain = (investment) - initialInvestment;
    setInvestedAmount(initialInvestment);
    setTotalAmount(investment);
    setChartData({
      maintainAspectRatio: false,
      responsive: false,
      labels: ["Amount Invested", "Wealth Gain"],
      datasets: [
        {
          data: [initialInvestment, wealthGain],
          backgroundColor: chartColors,
          hoverBackgroundColor: chartColors
        }
      ]
    });
    setcompoundedDataLump(expected_graph);
  }
  return (
    <div className={classes.Container}>
      <Card className={classes.root} variant="outlined">
        <div className={classes.upButtons}>
          <Button onClick={openSIP}>SIP</Button>
          <Button onClick={openLump}>LumpSum</Button>
        </div>
        {page ?
          <CardContent>
            <FormControl className={classes.Box}>
              <InputLabel htmlFor="my-input">Monthly Investment Amount (Rs)</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text" onChange={(e) => setFormData({ ...formData, monthly_investment: e.target.value })} value={formData.monthly_investment} />
            </FormControl>

            <FormControl className={classes.Box}>
              <InputLabel htmlFor="my-input">Investment Period (years)</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text" onChange={(e) => setFormData({ ...formData, period: e.target.value })} value={formData.period} />
            </FormControl>

            <FormControl className={classes.Box}>
              <InputLabel htmlFor="my-input">Expected Return (%)</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text" onChange={(e) => setFormData({ ...formData, return: e.target.value })} value={formData.return} />
            </FormControl>

            <Button className={classes.Button} variant="outlined" color="primary" fullWidth
              onClick={calculateTotal}> Calculate </Button>
            <Box className={classes.Total}>Total: ₹ {totalAmount} <br />
              Invested Amount: ₹ {investedAmount}</Box>
          </CardContent> :
          // LUMP SUM
          <CardContent>
            <FormControl className={classes.Box}>
              <InputLabel htmlFor="my-input">Investment Amount (Rs)</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text" onChange={(e) => setFormDataLump({ ...formDataLump, investment: e.target.value })} value={formDataLump.investment} />
            </FormControl>

            <FormControl className={classes.Box}>
              <InputLabel htmlFor="my-input">Investment Period (years)</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text" onChange={(e) => setFormDataLump({ ...formDataLump, period: e.target.value })} value={formDataLump.period} />
            </FormControl>

            <FormControl className={classes.Box}>
              <InputLabel htmlFor="my-input">Expected Return (%)</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text" onChange={(e) => setFormDataLump({ ...formDataLump, return: e.target.value })} value={formDataLump.return} />
            </FormControl>

            <Button className={classes.Button} variant="outlined" color="primary" fullWidth
              onClick={calculateTotalLump}> Calculate </Button>
            <Box className={classes.Total}>Total: ₹ {totalAmount} <br />
              Invested Amount: ₹ {investedAmount}</Box>
          </CardContent>
        }

        <Button className={classes.graph_button} onClick={open_chart}>{openChart ? `HideChart` : `Show in Chart`}</Button>
        <Doughnut className={classes.piechart} data={chartData} options={options} />
      </Card>
      {
        page ?
          openChart &&
          <SideGraph investedData={investedData}
            compondedData={compondedData} />
          :
          openChart &&
          <SideGraph investedData={investedDataLump} compondedData={compoundedDataLump} />
      }
    </div >
  );
}

export default App;
