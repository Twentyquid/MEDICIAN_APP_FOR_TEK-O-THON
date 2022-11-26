import React from "react";
import { LineChart, Line, ResponsiveContainer, Tooltip } from "recharts";

let data = [
  { systolic: 120, diastolic: 50 },
  { systolic: 90, diastolic: 80 },
  { systolic: 70, diastolic: 95 },
  { systolic: 100, diastolic: 60 },
  { systolic: 111, diastolic: 83 },
  { systolic: 99, diastolic: 90 },
  { systolic: 85, diastolic: 58 },
  { systolic: 70, diastolic: 60 },
];

function LineChartCard() {
  return (
    <div className="bg-violet-100 rounded-md flex-1 px-2 py-3 overflow-hidden shadow-md">
      <p className="font-semibold text-gray-700">BP and Sugar Levels</p>
      <div className="pt-8">
        <ResponsiveContainer width="100%" height={100}>
          <LineChart data={data}>
            <Line type="monotone" dataKey="systolic" stroke="#090d17" />
            <Line type="monotone" dataKey="diastolic" stroke="#66b3ff" />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default LineChartCard;
