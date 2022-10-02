import React, { Component } from "react";
import { Surface, Pie } from "recharts";

export default class PieComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data, sectors } = this.props;
    return (
      <Surface width={500} height={500}>
        <Pie
          cx={250}
          cy={250}
          endAngle={0}
          startAngle={360}
          outerRadius={200}
          innerRadius={180}
          data={data}
          sectors={sectors}
          paddingAngle={10}
          dataKey="value"
          fill="#fff"
          stroke="#000"
        />
        <line x1={0} y1={250} x2={500} y2={250} stroke="black" />
      </Surface>
    );
  }
}
