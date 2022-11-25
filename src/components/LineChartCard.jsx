import React from "react";
import { LineChart, Line, ResponsiveContainer, Tooltip } from "recharts";

let data = [
  { uv: 2, pv: 3 },
  { uv: 3, pv: 1 },
  { uv: 1, pv: 4 },
  { uv: 5, pv: 6 },
  { uv: 3, pv: 1 },
  { uv: 8, pv: 8 },
  { uv: 3, pv: 11 },
  { uv: 7, pv: 11 },
];

function LineChartCard() {
  return (
    <div className="bg-violet-100 rounded-md flex-1 px-2 py-3 overflow-hidden shadow-md">
      <p className="font-semibold text-gray-700">BP and Sugar Levels</p>
      <div className="pt-8">
        <ResponsiveContainer width="100%" height={100}>
          <LineChart data={data}>
            <Line type="monotone" dataKey="uv" stroke="#090d17" />
            <Line type="monotone" dataKey="pv" stroke="#66b3ff" />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default LineChartCard;
