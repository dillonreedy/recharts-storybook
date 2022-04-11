import React from 'react';
import { LineChart as RechartsLineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts';

export const LineTrailingDotComponent = (({width, height, data, margin, xaxisDataKey, strokeDashArray, type, lineDataKey, stroke, ...props}) => {

  return (
    <RechartsLineChart width={width} height={height} data={data} margin={margin}>
      <CartesianGrid strokeDasharray={strokeDashArray} />
      <XAxis dataKey={xaxisDataKey} />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type={type} dataKey={lineDataKey} stroke={stroke} dot={false}/>
      <Line type={type} dataKey='lastDot' stroke={stroke} dot={{ stroke: 'red', strokeWidth: 1, r: 4,strokeDasharray:''}} />
    </RechartsLineChart>
  )
});