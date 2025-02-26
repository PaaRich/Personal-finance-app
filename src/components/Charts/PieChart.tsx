import { PieChart, Pie, Cell } from "recharts";
import { useContext } from "react";
import { Context } from "../../context/Context";

const totalLimit = 975;
const spent = 338;

const DonutChart = ({ width, height = 300, innerRadius = 70, outerRadius = 100 }: { width?: number; height?: number; innerRadius?: number; outerRadius?: number }) => {
  const { dataForChart } = useContext(Context);

  return (
    <div>
      {/* Pie Chart */}
      <PieChart width={width} height={height}>
        <Pie
          data={dataForChart}
          cx="50%"
          cy="50%"
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          dataKey="value"
        >
          {dataForChart.map((entry: { color: string | undefined; }, index: unknown) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        {/* Centered Text */}
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="central"
          fontSize="30px"
          fontWeight="bold"
          fill="#333"
        >
          ${spent}
          
        </text>
        <text
          x="50%"
          y="60%"
          textAnchor="middle"
          dominantBaseline="central"
          fontSize="15px"
          fill="#777"
        >
          of ${totalLimit} limit
        </text>
      </PieChart>

    </div>
  );
};

export default DonutChart;
