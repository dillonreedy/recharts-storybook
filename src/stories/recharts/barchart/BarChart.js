import React from 'react';
import { BarChart as RechartsBarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
import PropTypes from 'prop-types';

export const BarChart = (({dataKey, pvStroke, uvStroke, width, height, data, margin, ...props}) => {  
  return (
    <RechartsBarChart
    width={width}
    height={height}
    data={data}
    margin={margin}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey={dataKey} />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="pv" fill={pvStroke} />
    <Bar dataKey="uv" fill={uvStroke} />
  </RechartsBarChart>
  )
});

BarChart.propTypes = {
   /**
   * The color of the pv bar.
   */
  pvStroke: PropTypes.string,
    /**
   * The color of the uv bar.
   */
  uvStroke: PropTypes.string
}

BarChart.defaultProps = {
    pvStroke: '#8884d8',
    uvStroke: '#82ca9d'
}