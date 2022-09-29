import React from 'react';
import {
  LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line as RechartsLine,
} from 'recharts';
import PropTypes from 'prop-types';

export function Line({
  type, dataKey, stroke, onClick, ...props
}) {
  const width = 770;
  const height = 250;
  const data = [
    {
      month: 'Jan',
      price: 4000,
    },
    {
      month: 'Feb',
      price: 3000,
    },
    {
      month: 'Mar',
      price: 2000,
    },
    {
      month: 'Apr',
      price: 2780,
    },
    {
      month: 'Jun',
      price: 1890,
    },
    {
      month: 'Jul',
      price: 2390,
    },
    {
      month: 'Aug',
      price: 3490,
    },
  ];
  const margin = {
    top: 5, right: 30, left: 20, fabottom: 5,
  };
  const strokeDashArray = '4';
  const xaxisDataKey = 'month';

  return (
    <LineChart width={width} height={height} data={data} margin={margin}>
      <CartesianGrid strokeDasharray={strokeDashArray} />
      <XAxis dataKey={xaxisDataKey} />
      <YAxis />
      <Tooltip />
      <Legend />
      <RechartsLine type={type} dataKey={dataKey} stroke={stroke} onClick={onClick} />
    </LineChart>
  );
}

Line.propTypes = {
  /**
   * The interpolation type of line and customized interpolation function can be set to type. It's the same as type in Area.
   */
  type: PropTypes.oneOf(['basis', 'basisClosed', 'basisOpen', 'linear', 'linearClosed', 'natural', 'monotoneX', 'monotoneY', 'monotone', 'step', 'stepBefore', 'stepAfter']),
  /**
   * The key or getter of a group of data which should be unique in a LineChart.
   */
  dataKey: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.func,
  ]),
  /**
   * Is for defining the border color.
   */
  stroke: PropTypes.string,
  /**
   * The customized event handler of click on the area in this group
   */
  onClick: PropTypes.func,
};

Line.defaultProps = {
  type: 'linear',
  dataKey: null,
  stroke: '#3182bd',
};
