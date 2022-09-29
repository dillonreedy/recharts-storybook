import React, { Component } from "react";
import * as _ from "lodash";
import {
  RadialBarChart,
  RadialBar,
  Cell,
  Legend,
  Tooltip,
  LabelList,
} from "recharts";
import { changeNumberOfData } from "../../../utils/utils";

const initialState = {
  data: [],
  colors: [],
};
export default class RadialBarChartComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      colors: [],
    };
    this.chartRef = React.createRef();
  }

  componentDidMount() {
    if (
      this.chartRef.current !== undefined &&
      this.chartRef !== undefined &&
      this.chartRef.current !== null &&
      this.chartRef !== null
    ) {
      console.log(this.chartRef.current.getItemByXY({ x: 150, y: 100 }));
    }
  }

  handleChangeData = () => {
    this.setState(() => _.mapValues(initialState, changeNumberOfData));
  };

  render() {
    const { data, colors, style } = this.props;

    return (
      <div className="radial-bar-charts">
        <a
          href="javascript: void(0);"
          className="btn update"
          onClick={this.handleChangeData}
        >
          change data
        </a>
        <br />
        <p>RadialBarChart</p>
        <div className="radial-bar-chart-wrapper">
          <RadialBarChart
            width={500}
            height={300}
            cx={150}
            cy={150}
            innerRadius={20}
            outerRadius={140}
            barSize={10}
            data={data}
            ref={this.chartRef.current}
          >
            <RadialBar minPointSize={15} background dataKey="uv">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index]} />
              ))}
              <LabelList position="insideEnd" fill="#fff" fontSize={10} />
            </RadialBar>
            <Legend
              iconSize={10}
              width={120}
              height={140}
              layout="vertical"
              verticalAlign="middle"
              wrapperStyle={style}
            />
            <Tooltip />
          </RadialBarChart>
        </div>

        <p>RadialBarChart with positive and negative value</p>
        <div className="radial-bar-chart-wrapper">
          <RadialBarChart
            width={500}
            height={300}
            cx={150}
            cy={150}
            innerRadius={20}
            outerRadius={140}
            data={data}
            startAngle={90}
            endAngle={-270}
          >
            <RadialBar background dataKey="pv">
              <LabelList position="end" />
            </RadialBar>
            <Legend
              iconSize={10}
              width={120}
              height={140}
              layout="vertical"
              verticalAlign="middle"
              wrapperStyle={style}
            />
            <Tooltip />
          </RadialBarChart>
        </div>
      </div>
    );
  }
}
