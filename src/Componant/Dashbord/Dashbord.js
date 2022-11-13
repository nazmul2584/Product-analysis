import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const Dashbord = () => {
    const data = [
        {
          "name": "month A",
          "investment": 4000,
          "profit": 2400
        },
        {
          "name": "month B",
          "investment": 3000,
          "profit": 1398
        },
        {
          "name": "month C",
          "investment": 2000,
          "profit": 9800
        },
        {
          "name": "month D",
          "investment": 2780,
          "profit": 3908
        },
        {
          "name": "month E",
          "investment": 1890,
          "profit": 4800
        },
        {
          "name": "month F",
          "investment": 2390,
          "profit": 3800
        },
        {
          "name": "month G",
          "investment": 3490,
          "profit": 4300
        }
      ]
      const datae = [
        {
          "name": "month A",
          "uv": 4000,
          "pv": 2400,
          "amt": 2400
        },
        {
          "name": "month B",
          "uv": 3000,
          "pv": 1398,
          "amt": 2210
        },
        {
          "name": "month C",
          "uv": 2000,
          "pv": 9800,
          "amt": 2290
        },
        {
          "name": "month D",
          "uv": 2780,
          "pv": 3908,
          "amt": 2000
        },
        {
          "name": "month E",
          "uv": 1890,
          "pv": 4800,
          "amt": 2181
        },
        {
          "name": "month F",
          "uv": 2390,
          "pv": 3800,
          "amt": 2500
        },
        {
          "name": "month G",
          "uv": 3490,
          "pv": 4300,
          "amt": 2100
        }
      ]
    return (
        <div >
            
          <div className='mt-11 ml-44'>
          <BarChart width={930} height={450} data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="profit" fill="#8884d8" />
  <Bar dataKey="investment" fill="#82ca9d" />
</BarChart>
          </div>
          <div className='mt-11 ml-44'>
          <AreaChart width={930} height={450} data={datae}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>

<h1 className='text-xl text-center'>AreaChart</h1>
          </div>
            
        </div>
    );
};

export default Dashbord;