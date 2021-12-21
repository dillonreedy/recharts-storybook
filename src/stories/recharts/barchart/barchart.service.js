import React from 'react';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
import { BarService } from './subcomponents/bar.service';
import { CartesianGridService } from './subcomponents/cartesiangrid.service';

export class BarChartService {
  static getTemplate = () => {
    return (({dataKey, pvStroke, uvStroke, strokeDasharray, barDataKey, fill, ...props}) => {  
      return (
        <BarChart {...props}>
        <CartesianGrid strokeDasharray={strokeDasharray} />
        <XAxis dataKey={dataKey} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey={barDataKey} fill={fill} />
      </BarChart>
      ) 
    });
  } 

  static getArgTypes() {
    return {
      width: {
        description: 'The width of the barchart.',
        defaultValue: { summary: '0'},
      },
      height: {
        description: 'The height of the barchart.',
        defaultValue: { summary: '0'},
      },
      data: {
        description: 'The source data, in which each element is an object.',
        defaultValue: { summary: '[]'},
      },
      margin: {
        description: 'The sizes of whitespace around the container.',
        defaultValue: { summary: '{ top: 5, right: 5, bottom: 5, left: 5 }'},
      }
    }
  }

  static getArgs() {
    const width = 770;
    const height = 250;
    const data = [
      {
        name: 'Page A',
        uv: 4000,
      },
      {
        name: 'Page B',
        uv: 3000,
      },
      {
        name: 'Page C',
        uv: 2000,
      },
      {
        name: 'Page D',
        uv: 2780,
      },
      {
        name: 'Page E',
        uv: 1890,
      },
      {
        name: 'Page F',
        uv: 2390,
      },
      {
        name: 'Page G',
        uv: 3490,
      },
    ];
    const margin = { top: 5, right: 30, left: 20, fabottom: 5 };
    
    return { width, height, data, margin };
  }

  static getSubcomponentArgs() {
    return {
      dataKey: 'name',
      ...BarService.getArgs(),
      ...CartesianGridService.getArgs()
    };
  };
  
}