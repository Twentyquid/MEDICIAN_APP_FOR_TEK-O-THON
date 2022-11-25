import React from "react";
import { LineChart, Line, ResponsiveContainer, Tooltip } from "recharts";

let data = [
  { uv: 2, pv: 3 },
  { uv: 3, pv: 1 },
  { uv: 1, pv: 0 },
  { uv: 5, pv: 0 },
];

function LineChartCard() {
  return (
    <div className="bg-violet-100 rounded-md flex-1 px-2 py-3 overflow-hidden shadow-md">
      <p className="font-semibold text-gray-700">Heamoglobin</p>
      <div className="pt-8">
        <ResponsiveContainer width="100%" height={100}>
          <LineChart data={data}>
            <Line type="monotone" dataKey="uv" stroke="#090d17" />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default LineChartCard;
