import React, { Component } from "react";
import { Funnel, FunnelChart, LabelList, ResponsiveContainer } from "recharts";

export default class FunnelChartComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {data} = this.props;
        return (
          <div style={{height: 200, width: 200}}>
              <ResponsiveContainer height="100%" width="100%">
                <FunnelChart layout="horizontal">
                  <Funnel
                    data={data}
                    dataKey="value"
                    stroke="#424242"
                    isAnimationActive
                    labelLine
                    lastShapeType="rectangle"
                    orientation="horizontal"
                  >
                    <LabelList
                      dataKey="name"
                      fill="#000"
                      labelLine
                      position="right"
                      stroke="none"
                    />
                  </Funnel>
                </FunnelChart>
              </ResponsiveContainer>
            </div>
          );
    }
}
