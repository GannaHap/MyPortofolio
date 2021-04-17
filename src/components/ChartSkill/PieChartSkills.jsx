import React, { useCallback, useState } from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, name } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector cx={cx} cy={cy} innerRadius={innerRadius} outerRadius={outerRadius} startAngle={startAngle} endAngle={endAngle} fill="#1d1461" />
      <Sector cx={cx} cy={cy} startAngle={startAngle} endAngle={endAngle} innerRadius={outerRadius + 6} outerRadius={outerRadius + 10} fill="#1d1461" />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#5145ad">
        {`( ${(percent * 100).toFixed(2)}% )`}
      </text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#302969">{`${name}`}</text>
    </g>
  );
};

export default function PieChartSkills(props) {
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
      <ResponsiveContainer>
        <PieChart>
          <Pie activeIndex={activeIndex} activeShape={renderActiveShape} data={data} innerRadius={75} outerRadius={95} fill="#382e81" dataKey="value" onMouseEnter={onPieEnter} />
        </PieChart>
      </ResponsiveContainer>
      <span>
        Source <i className="fab fa-github"></i> github.com/GannaHap
      </span>
    </div>
  );
}
