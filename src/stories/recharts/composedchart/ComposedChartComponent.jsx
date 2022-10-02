import React, { Component } from "react";
import {
  ResponsiveContainer, ComposedChart, Line, Bar, Area, Scatter, XAxis,
  YAxis, ReferenceLine, ReferenceDot, Tooltip, Legend, CartesianGrid, Brush,
  LineChart,
} from "recharts";

// eslint-disable-next-line react/prefer-stateless-function
export default class ComposedChartComponent extends Component {
  constructor(props) {
    super(props);
  }

  renderTimeChart() {
    const { from, to, timeData } = this.props;

    return (
      <div>
        <p>A ComposedChart of time scale</p>
        <div className="composed-chart-wrapper">
          <ComposedChart
            width={600}
            height={400}
            data={timeData}
            margin={{
              top: 20, right: 20, bottom: 20, left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            {/* <XAxis dataKey="x" /> */}
            <XAxis
              dataKey="x"
              domain={[
                from.getTime(),
                to.getTime(),
              ]}
              scale="time"
              type="number"
              tick={{ fontSize: 10, fill: "red" }}
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="y" fill="#8884d8" stroke="#8884d8" />
            <Bar dataKey="y" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="y" stroke="#ff7300" />
          </ComposedChart>
        </div>
      </div>
    );
  }

  render() {
    const { data } = this.props;
    return (
      <div className="line-charts">
        <p>A simple ComposedChart of Line, Bar, Area</p>
        <div className="composed-chart-wrapper">
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart
              width={800}
              height={400}
              data={data}
              margin={{
                top: 20, right: 20, bottom: 5, left: 20,
              }}
            >
              <XAxis dataKey="name" scale="band" />
              <YAxis />
              <Legend layout="vertical" align="right" verticalAlign="middle" />
              <CartesianGrid stroke="#f5f5f5" />
              <Tooltip />
              <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
              <Bar dataKey="uv" fill="#ff7300" />
              <Bar dataKey="pv" barSize={20} fill="#413ea0" />
              <ReferenceLine x="Page C" stroke="red" label="Max PV PAGE" />
              <ReferenceDot x="Page C" y={1300} stroke="red" />
              <Brush>
                <LineChart>
                  <Line dataKey="uv" stroke="#ff7300" dot={false} />
                </LineChart>
              </Brush>
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        <p>A simple ComposedChart of Line, Bar</p>
        <div className="composed-chart-wrapper">
          <ComposedChart
            width={800}
            height={400}
            data={data}
            margin={{
              top: 20, right: 20, bottom: 20, left: 20,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Legend />
            <CartesianGrid stroke="#f5f5f5" />
            <Tooltip />
            <Bar dataKey="pv" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="pv" stroke="#ff7300" />
          </ComposedChart>
        </div>

        <p>A vertical ComposedChart of Line, Bar</p>
        <div className="composed-chart-wrapper">
          <ComposedChart
            width={800}
            height={400}
            data={data}
            layout="vertical"
            margin={{
              top: 20, right: 20, bottom: 20, left: 20,
            }}
          >
            <XAxis type="number" />
            <YAxis type="category" dataKey="name" />
            <Legend />
            <CartesianGrid stroke="#f5f5f5" />
            <Tooltip />
            <Area dataKey="amt" fill="#8884d8" stroke="#8884d8" />
            <Bar dataKey="pv" barSize={20} fill="#413ea0" />
            <Line dataKey="uv" stroke="#ff7300" />
          </ComposedChart>
        </div>

        <p>A ComposedChart of Line, Bar, Area, Scatter</p>
        <div className="composed-chart-wrapper">
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart
              width={800}
              height={400}
              data={data}
              margin={{
                top: 20, right: 20, bottom: 5, left: 20,
              }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Legend layout="vertical" align="right" verticalAlign="middle" />
              <CartesianGrid stroke="#f5f5f5" />
              <Tooltip />
              <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
              <Line type="monotone" dataKey="uv" stroke="#ff7300" />
              <Bar dataKey="pv" barSize={20} fill="#413ea0" />
              <Scatter dataKey="pv" fill="red" />
              <Brush />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        {this.renderTimeChart()}
      </div>
    );
  }
}
