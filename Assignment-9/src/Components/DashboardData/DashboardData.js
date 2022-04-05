import React from "react";
import "./DashboardData.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Radar,
  RadarChart,
  PolarRadiusAxis,
  PolarGrid,
} from "recharts";

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

export default function DashboardData() {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        Product Investment and Revenue Analysis
      </h1>
      <div>
        <ResponsiveContainer width="40%" aspect={3}>
          <LineChart
            width={20}
            height={30}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="4 5" />
            <XAxis dataKey="month" />
            <YAxis dataKey="investment" />
            <Legend />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="investment" stroke="#82ca9d" />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div>
        <ResponsiveContainer width="40%" aspect={3}>
          <ScatterChart
            width={40}
            height={40}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid />
            <XAxis
              type="number"
              dataKey="investment"
              name="investment"
              unit="$"
            />
            <YAxis type="number" dataKey="revenue" name="revenue" unit="$" />
            <Tooltip cursor={{ strokeDasharray: "3 3" }} />
            <Scatter name="A school" data={data} fill="#8884d8" />
          </ScatterChart>
        </ResponsiveContainer>
      </div>

      <div>
        <ResponsiveContainer width="100%" aspect={3}>
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid />
            <PolarRadiusAxis />
            <Legend />
            <Tooltip />
            <Radar
              name="investment"
              dataKey="investment"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.5}
            />
            <Radar
              name="revenue"
              dataKey="revenue"
              stroke="#82ca9d"
              fill="#82ca9b"
            ></Radar>
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
