import React, { Component } from 'react';
import { Surface, PolarGrid } from 'recharts';

export default class PolarGridComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { polarAngles, polarRadius } = this.props;

    return (
      <Surface width={500} height={500}>
        <PolarGrid
          cx={250}
          cy={250}
          innerRadius={0}
          outerRadius={200}
          width={500}
          height={500}
          polarAngles={polarAngles}
          polarRadius={polarRadius}
          radialLines
        />
      </Surface>
    );
  }
}
