import React, { useCallback, useState } from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';

import './ChartSkills.css';

const renderActiveShape = (props) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent } = props;
  return (
    <g>
      <text x={cx} y={cy} dy={0} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <text x={cx} y={cy} dy={25} textAnchor="middle" fill={fill}>
        {`${(percent * 100).toFixed(2)}%`}
      </text>
      <Sector cx={cx} cy={cy} innerRadius={innerRadius} outerRadius={outerRadius} startAngle={startAngle} endAngle={endAngle} fill="#0d255e" />
      <Sector cx={cx} cy={cy} startAngle={startAngle} endAngle={endAngle} innerRadius={outerRadius + 6} outerRadius={outerRadius + 10} fill="#0d255e" />
    </g>
  );
};

export default function ChartSkills(props) {
  const data = [
    { name: 'HTML', value: props.valueHTML },
    { name: 'PHP', value: props.valuePhp },
    { name: 'CSS', value: props.valueCSS },
    { name: 'JavaScript', value: props.valueJavaScript },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  return (
    <div className="chart-section">
      <h2>Github Repository Saya</h2>
      <ResponsiveContainer>
        <PieChart>
          <Pie activeIndex={activeIndex} activeShape={renderActiveShape} data={data} innerRadius={75} outerRadius={95} fill="#173f9c" dataKey="value" onMouseEnter={onPieEnter} />
        </PieChart>
      </ResponsiveContainer>
      <span>
        Source <i className="fab fa-github"></i> github.com/GannaHap
      </span>
    </div>
  );
}
