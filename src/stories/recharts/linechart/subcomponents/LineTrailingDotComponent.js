import React from 'react';
import {
  LineChart as RechartsLineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line,
} from 'recharts';

export function LineTrailingDotComponent({ data }) {
  const width = 770;
  const height = 250;
  const margin = {
    top: 5, right: 30, left: 20, bottom: 5,
  };
  const strokeDashArray = '4';
  const xaxisDataKey = 'month';
  const type = 'monotone';
  const lineDataKey = 'price';
  const stroke = '#8884d8';

  return (
    <RechartsLineChart width={width} height={height} data={data} margin={margin}>
      <CartesianGrid strokeDasharray={strokeDashArray} />
      <XAxis dataKey={xaxisDataKey} />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type={type} dataKey={lineDataKey} stroke={stroke} dot={false} activeDot={false} />
      <Line
        type={type}
        dataKey="lastDot"
        stroke={stroke}
        dot={{
          stroke: 'red', strokeWidth: 1, r: 4, strokeDasharray: '',
        }}
      />
    </RechartsLineChart>
  );
}
