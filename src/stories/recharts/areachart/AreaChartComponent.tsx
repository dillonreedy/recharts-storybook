import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
  TooltipProps,
} from "recharts";
import { format, parseISO } from "date-fns";
import "./area-chart.css";
import { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent";
import { CategoricalChartProps } from "recharts/types/chart/generateCategoricalChart";

function CustomTooltip<TValue extends ValueType, TName extends NameType>({ active, payload, label }: TooltipProps<TValue, TName>): JSX.Element | null {
  console.log(payload);
  if (typeof payload !== "undefined") {
    if (active) {
      return (
        <div className="tooltip">
          <h4>{label && format(parseISO(label), "eeee, d MMM, yyyy")}</h4>
          <p>
            {payload[0]?.value && typeof payload[0]?.value === "number" && (<>$
            {payload[0]?.value?.toFixed(2)}
            {" "}CAD</>)}
          </p>
        </div>
      );
    }
  }
  return null;
}

export function AreaChartComponent({ data }: CategoricalChartProps): JSX.Element {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2451B7" stopOpacity={0.4} />
            <stop offset="75%" stopColor="#2451B7" stopOpacity={0.05} />
          </linearGradient>
        </defs>

        <Area dataKey="value" stroke="#2451B7" fill="url(#color)" />

        <XAxis
          dataKey="date"
          axisLine={false}
          tickLine={false}
          tickFormatter={(str) => {
            const date = parseISO(str);
            if (date.getDate() % 7 === 0) {
              return format(date, "MMM, d");
            }
            return "";
          }}
        />

        <YAxis
          dataKey="value"
          axisLine={false}
          tickLine={false}
          tickCount={8}
          tickFormatter={(number) => `$${number.toFixed(2)}`}
        />

        <Tooltip content={<CustomTooltip />} />

        <CartesianGrid opacity={0.1} vertical={false} />
      </AreaChart>
    </ResponsiveContainer>
  );
}
