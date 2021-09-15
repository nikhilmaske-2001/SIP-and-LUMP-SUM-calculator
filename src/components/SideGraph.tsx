import { Card } from '@material-ui/core';
import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import { useStyles } from './styles';

const data = [
    {
        "name": "2021",
        "invested": 4000,
        "componded": 2400,
        "amt": 2400
    },
    {
        "name": "2022",
        "invested": 3000,
        "componded": 1398,
        "amt": 2210
    },
    {
        "name": "2023",
        "invested": 2000,
        "componded": 9800,
        "amt": 2290
    },
    {
        "name": "2024",
        "invested": 2780,
        "componded": 3908,
        "amt": 2000
    },
    {
        "name": "2025",
        "invested": 1890,
        "componded": 4800,
        "amt": 2181
    },
    {
        "name": "2026",
        "invested": 2390,
        "componded": 3800,
        "amt": 2500
    },
    {
        "name": "2027",
        "invested": 3490,
        "componded": 4300,
        "amt": 2100
    },
    {
        "name": "2028",
        "invested": 3490,
        "componded": 4300,
        "amt": 2100
    },
    {
        "name": "2029",
        "invested": 3490,
        "componded": 4300,
        "amt": 2100
    },
    {
        "name": "2030",
        "invested": 3490,
        "componded": 4300,
        "amt": 2100
    },
    {
        "name": "2031",
        "invested": 3490,
        "componded": 4300,
        "amt": 2100
    },
    {
        "name": "2032",
        "invested": 3490,
        "componded": 4300,
        "amt": 2100
    },
    {
        "name": "2033",
        "invested": 3490,
        "componded": 4300,
        "amt": 2100
    },
    {
        "name": "2034",
        "invested": 3490,
        "componded": 4300,
        "amt": 2100
    },
    {
        "name": "2035",
        "invested": 3490,
        "componded": 4300,
        "amt": 2100
    },
    {
        "name": "2036",
        "invested": 3490,
        "componded": 4300,
        "amt": 2100
    },
    {
        "name": "2037",
        "invested": 3490,
        "componded": 4300,
        "amt": 2100
    }
]

function SideGraph() {
    const classes = useStyles();

    return (
        <Card >
            <div className={classes.graph}>
                <LineChart width={730} height={250} data={data}
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
        </Card>
    )
}

export default SideGraph;
