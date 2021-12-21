import React from 'react';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
import { CartesianGridService } from './subcomponents/cartesiangrid.service';

export class BarChartService {
  static getTemplate = () => {
    return (({dataKey, pvStroke, uvStroke, strokeDasharray, dataKeyBar1, dataKeyBar2, ...props}) => {  
      return (
        <BarChart {...props}>
        <CartesianGrid strokeDasharray={strokeDasharray} />
        <XAxis dataKey={dataKey} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey={dataKeyBar1} fill={uvStroke} />
        <Bar dataKey={dataKeyBar2} fill={pvStroke} />
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
        pv: 2400,
        amt: 2400,
      },
      {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
      },
      {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
      },
      {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
      },
      {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
      },
      {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
      },
      {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
      },
    ];
    const margin = { top: 5, right: 30, left: 20, fabottom: 5 };
    
    return { width, height, data, margin };
  }

  static getSubcomponentArgs() {
    return {
      dataKey: 'name',
      pvStroke: '#8884d8',
      uvStroke: '#82ca9d',
      dataKeyBar1: 'uv',
      dataKeyBar2: 'pv',
      ...CartesianGridService.getArgs()
    };
  };
  
}