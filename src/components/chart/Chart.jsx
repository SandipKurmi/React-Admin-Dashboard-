import React from "react";
import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";


const Chart = ({ title, data, dataKey, grid }) => {
  console.log(title);


  return (
    <div className="chart">
      <h3 className="chartTitle"> {title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="Name" />
          <YAxis />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="3 3" />}
          <Legend />
          <Line
            type="monotone"
            dataKey={dataKey}
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
