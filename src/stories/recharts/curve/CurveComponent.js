import React, { Component } from 'react';
import { Surface, Curve, Layer } from 'recharts';
import { curveCardinalClosed, curveCatmullRomOpen  } from 'd3-shape';

export default class CurveComponent extends Component {
  constructor(props) {
      super(props)
  }
  render () {
    const {points, scale, ticks} = this.props;

    return (
      <Surface width={600} height={800}>
        <Layer>
          <text x={10} y={20}>curveCardinalClosed</text>
          {
            ticks.map((entry, index) => (
              <Layer key={`curve-${index}`}>
                <Curve
                  stroke={`${scale(entry)}`}
                  fill="none"
                  type={curveCardinalClosed.tension(entry)}
                  points={points}
                />
                <text x={200} y={40 + index * 30} fill={`${scale(entry)}`}>
                  {`curveCardinalClosed.tension(${entry})`}
                </text>
              </Layer>
            ))
          }

          {
            points.map((entry, index) => (
              <circle cx={entry.x} cy={entry.y} r={4} key={`circle-${index}`}/>
            ))
          }
        </Layer>

        <Layer transform="translate(0, 200)">
          <text x={10} y={20}>curveCatmullRomOpen</text>
          {
            ticks.map((entry, index) => (
              <Layer key={`curve-${index}`}>
                <Curve
                  stroke={`${scale(entry)}`}
                  fill="none"
                  type={curveCatmullRomOpen.alpha(entry)}
                  points={points}
                />
                <text x={200} y={40 + index * 30} fill={`${scale(entry)}`}>
                  {`curveCatmullRomOpen.alpha(${entry})`}
                </text>
              </Layer>
            ))
          }

          {
            points.map((entry, index) => (
              <circle cx={entry.x} cy={entry.y} r={4} key={`circle-${index}`}/>
            ))
          }
        </Layer>
      </Surface>
    );
  }
}

