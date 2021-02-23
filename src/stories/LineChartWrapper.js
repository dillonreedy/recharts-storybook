import React from 'react';
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts';
import PropTypes from 'prop-types';

export const LineChartWrapper = (({width, height, data, margin, dataKey, strokeDashArray, type, ...props}) => {

  return (
    <LineChart width={width} height={height} data={data} margin={margin}>
      <CartesianGrid strokeDasharray={strokeDashArray} />
      <XAxis dataKey={dataKey} />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type={type} dataKey="price" stroke="#8884d8" />
    </LineChart>
  )
});

LineChartWrapper.propTypes = {
  /**
   * The width of chart container.
   */
  width: PropTypes.number,
  /**
   * The height of chart container.
   */
  height: PropTypes.number,
  /**
   * The source data, in which each element is an object.
   */
  data: PropTypes.array,
  /**
   * The sizes of whitespace around the container.
   */
  margin: PropTypes.object,
  /**
   * The pattern of dashes and gaps used to paint the lines of the grid.
   */
  strokeDashArray: PropTypes.string,
  /**
   * The key of data displayed in the axis.
   */
  dataKey: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  /**
   * The interpolation type of line and customized interpolation function can be set to type. It's the same as type in Area.
   */
  type: PropTypes.oneOf(['basis' , 'basisClosed' , 'basisOpen' , 'linear' , 'linearClosed' , 'natural' , 'monotoneX' , 'monotoneY' , 'monotone' , 'step' , 'stepBefore' , 'stepAfter'])
}

LineChartWrapper.defaultProps = {
  width: 0,
  height: 0,
  data: [],
  margin: { top: 5, right: 5, bottom: 5, left: 5 },
  strokeDashArray: "1",
  dataKey: null,
  type: "linear"
}