import React from 'react';
import {
  LineChart as RechartsLineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line,
} from 'recharts';
import PropTypes from 'prop-types';

export function LineChart({
  width, height, data, margin, xaxisDataKey, strokeDashArray, type, lineDataKey, stroke, ...props
}) {
  return (
    <RechartsLineChart width={width} height={height} data={data} margin={margin}>
      <CartesianGrid strokeDasharray={strokeDashArray} />
      <XAxis dataKey={xaxisDataKey} />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type={type} dataKey={lineDataKey} stroke={stroke} />
    </RechartsLineChart>
  );
}

LineChart.propTypes = {
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
  xaxisDataKey: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  /**
   * The interpolation type of line and customized interpolation function can be set to type. It's the same as type in Area.
   */
  type: PropTypes.oneOf(['basis', 'basisClosed', 'basisOpen', 'linear', 'linearClosed', 'natural', 'monotoneX', 'monotoneY', 'monotone', 'step', 'stepBefore', 'stepAfter']),
  /**
   * The key or getter of a group of data which should be unique in a LineChart.
   */
  lineDataKey: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.func,
  ]),
  /**
   *
   */
  stroke: PropTypes.string,
};

LineChart.defaultProps = {
  width: 0,
  height: 0,
  data: [],
  margin: {
    top: 5, right: 5, bottom: 5, left: 5,
  },
  strokeDashArray: '1',
  xaxisDataKey: null,
  type: 'linear',
  lineDataKey: null,
};
