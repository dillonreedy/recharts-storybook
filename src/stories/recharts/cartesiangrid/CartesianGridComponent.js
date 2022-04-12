import React, { Component } from 'react';
import { Surface, CartesianGrid } from 'recharts';
import PropTypes from 'prop-types';

export default class CartesianGridComponent extends Component {
    constructor(props) {
        super(props);
    }


  render () {
    const {horizontalPoints, verticalPoints, verticalFill, horizontalFill, strokeDasharray} = this.props;

    return (
      <div>
        <Surface width={500} height={500}>
          <CartesianGrid
            x={0}
            y={0}
            width={500}
            height={500}
            fillOpacity={0.4}
            strokeDasharray={strokeDasharray}
            verticalPoints={verticalPoints}
            horizontalPoints={horizontalPoints}
            verticalFill={verticalFill}
            horizontalFill={horizontalFill}
          />
        </Surface>
      </div>
    );
  }
}

CartesianGridComponent.propTypes = {
    /**
     * The pattern of dashes and gaps used to paint the lines of the grid
     */
    strokeDasharray: PropTypes.string
}