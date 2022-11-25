import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  LineChart,
  Line,
  Tooltip,
} from "recharts";

const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];
const data02 = [
  { name: "A1", value: 100 },
  { name: "A2", value: 300 },
  { name: "B1", value: 100 },
  { name: "B2", value: 80 },
  { name: "B3", value: 40 },
  { name: "B4", value: 30 },
  { name: "B5", value: 50 },
  { name: "C1", value: 100 },
  { name: "C2", value: 200 },
  { name: "D1", value: 150 },
  { name: "D2", value: 50 },
];

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

function Reports() {
  return (
    <div className="w-full pb-20 md:pb-0 min-h-screen bg-gray-300">
      <h3 className="text-2xl px-4 py-3 font-semibold">Reports</h3>
      <div className="flex flex-col md:grid grid-cols-2 gap-2">
        <div className="bg-violet-100 px-4 py-3 rounded-md">
          <div>
            <p className="text-lg font-semibold">Haemoglobin Levels</p>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <Bar dataKey="uv" fill="#8884d8" />
              <Bar dataKey="pv" fill="#a98bf0" />
              <Tooltip />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-violet-100 px-4 py-3 rounded-md">
          <div>
            <p className="text-lg font-semibold">Blood Constituents</p>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data01}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius={60}
                fill="#8884d8"
              />
              <Pie
                data={data02}
                dataKey="value"
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={90}
                fill="#82ca9d"
              />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-violet-100 px-4 py-3 rounded-md">
          <div>
            <p className="text-lg font-semibold">Blood Pressure Levels</p>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <Line
                type="monotone"
                strokeWidth={2}
                dataKey="uv"
                stroke="#8884d8"
              />
              <Line
                type="monotone"
                strokeWidth={2}
                dataKey="pv"
                stroke="#37cc5a"
              />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="col-start-1 col-end-3 bg-white px-4 py-3">
          <table className="w-full text-center">
            <tbody className="striped">
              <tr>
                <th>Blood test</th>
                <th>Result</th>
                <th>Normal Value</th>
              </tr>
              <tr>
                <td>WBC</td>
                <td>33.2</td>
                <td>33</td>
              </tr>
              <tr>
                <td>WBC</td>
                <td>33.2</td>
                <td>33</td>
              </tr>
              <tr>
                <td>WBC</td>
                <td>33.2</td>
                <td>33</td>
              </tr>
              <tr>
                <td>WBC</td>
                <td>33.2</td>
                <td>33</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Reports;
