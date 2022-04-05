import React from "react";
import {
  LineChart,
  CartesianGrid,
  Line,
  YAxis,
  XAxis,
  Tooltip,
  Legend,
} from "recharts";
import { BarChart, Bar } from "recharts";
import { AreaChart,Area } from "recharts";

const DashBoard = () => {
  const data = [
    {
      month: "Mar",
      investment: 100000,
      sell: 241,
      revenue: 10401,
    },
    {
      month: "Apr",
      investment: 200000,
      sell: 423,
      revenue: 24500,
    },
    {
      month: "May",
      investment: 500000,
      sell: 726,
      revenue: 67010,
    },
    {
      month: "Jun",
      investment: 500000,
      sell: 529,
      revenue: 40405,
    },
    {
      month: "Jul",
      investment: 600000,
      sell: 601,
      revenue: 50900,
    },
    {
      month: "Aug",
      investment: 700000,
      sell: 670,
      revenue: 61000,
    },
  ];
  return (
    <div className="container ">
      <h3 className="py-5">Sell Vs Revenue</h3>
      <LineChart
      
        width={730}
        height={250}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="sell" stroke="#8884d8" />
        <Line type="monotone" dataKey="revenuev" stroke="#82ca9d" />
      </LineChart>

      <div className="Barchat py-5">
      <h3 className="py-5">Sell Vs Investment</h3>
        <BarChart width={730} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sell" fill="#8884d8" />
          <Bar dataKey="investment" fill="blue" />
        </BarChart>
      </div>
      <div className="py-5">
      <h3 className="py-5">Revenue Vs investment</h3>
      <AreaChart width={730} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="revenue" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="investment" stroke="orange" fillOpacity={1} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="month" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>
      </div>
    </div>
  );
};

export default DashBoard;
