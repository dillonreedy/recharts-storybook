import React, { Component } from "react";
import {
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  BarChart
} from "recharts";


export default class StackedBarChartComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {data, cPalette} = this.props;
        return (
            <BarChart
              width={600}
              height={300}
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}

            >
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Legend />
              <Bar dataKey={'uv'} stackId='a' fill={'red'} />
              <Bar dataKey={'pv'} stackId='a' fill={'blue'} />
            </BarChart>
          );
    }
}