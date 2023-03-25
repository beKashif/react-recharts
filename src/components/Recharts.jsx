import React from 'react'
import './Recharts.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar } from 'recharts'


    // add sample data for the charts
    const data = [
        { day: 'Monday', pageviews: 1000, visitors: 300 },
        { day: 'Tuesday', pageviews: 1500, visitors: 500 },
        { day: 'Wednesday', pageviews: 2000, visitors: 800 },
        { day: 'Thursday', pageviews: 3000, visitors: 1200 },
        { day: 'Friday', pageviews: 2500, visitors: 1000 },
        { day: 'Saturday', pageviews: 2000, visitors: 700 },
        { day: 'Sunday', pageviews: 1800, visitors: 600 },
    ];

const Recharts = () => {
    // add functions for customizing the charts
    const lineColors = ['#8884d8', '#82ca9d']
    const barColors = ['#8884d8', '#82ca9d']

    const lineCustomization = {
        strokeWidth:2,
        dot: { r:4 },
        activeDot: { r:8 },
    }
    const barCustomization = {
        barSize: 30,
        radius: [ 5, 5, 0, 0],
        label: { position: 'top'},
    }

  return (
    <div className='main-container'>

        <h1>React Recharts</h1>

        <h1>Line Chart</h1>
        <LineChart width={600} height={300} data={data}>
            <XAxis dataKey="day" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pageviews" stroke={lineColors[0]} {...lineCustomization} />
            <Line type="monotone" dataKey="visitors" stroke={lineColors[1]} {...lineCustomization} />
        </LineChart>

        <h1>Bar Chart</h1>
        <BarChart width={600} height={300} data={data}>
            <XAxis dataKey="day" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Bar dataKey="pageviews" fill={barColors[0]} {...barCustomization} />
            <Bar dataKey="visitors" fill={barColors[1]} {...barCustomization} />
        </BarChart>
    </div>
  )
}

export default Recharts