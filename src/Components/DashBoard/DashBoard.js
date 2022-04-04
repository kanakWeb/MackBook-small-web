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
import { Treemap } from "recharts";

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
      <h3 className="py-5">This is Dashboard</h3>
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
        <BarChart width={730} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sell" fill="#8884d8" />
          <Bar dataKey="revenuev" fill="#82ca9d" />
        </BarChart>
      </div>
      <div className="py-5">
        <Treemap
          width={730}
          height={250}
          data={data}
          dataKey="sell"
          ratio={4 / 3}
          stroke="#fff"
          XAxis='month'
          fill="#8884d8"
        />
      </div>
    </div>
  );
};

export default DashBoard;
