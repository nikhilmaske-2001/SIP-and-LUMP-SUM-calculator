import React from 'react';
import { Card } from '@material-ui/core';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import { useStyles } from './styles';


function SideGraph({ investedData, compondedData }: any) {
    const classes = useStyles();
    const invested_graph = investedData;
    const componded_graph = compondedData;
    const period = investedData.length;
    const data = [{}];

    for (var year = 1; year <= period; year++) {
        var obj = {
            "name": (2021 + year).toString(),
            "invested": invested_graph[year],
            "componded": componded_graph[year],
            "amt": year,
        };
        data.push(obj);
    };

    console.log(data);

    return (
        <Card >
            <div className={classes.graph}>
                <LineChart width={730} height={450} data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="invested" stroke="#8884d8" />
                    <Line type="monotone" dataKey="componded" stroke="#82ca9d" />
                </LineChart>
            </div>
            <Card className={classes.summery}>

            </Card>
        </Card>
    )
}

export default SideGraph;
