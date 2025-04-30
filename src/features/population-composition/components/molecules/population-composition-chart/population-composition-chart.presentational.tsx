'use client';

import { ComponentProps, FC, useMemo } from 'react';
import {
  CartesianGrid,
  Label,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { css, cx } from 'styled-system/css';
import { PopulationComposition } from '@/features/population-composition/schemas';
import { Prefecture } from '@/features/prefecture/schemas';
import { createLineStyle, formatTo10kNumberUnit } from './utils';

export type PopulationCompositionChartPresentationalProps =
  ComponentProps<'div'> & {
    type: {
      label: string;
      value: string;
    };
    populationCompositions: {
      prefecture: Prefecture;
      data: PopulationComposition['data'];
    }[];
  };

type WideChart = {
  year: number;
  [prefName: Prefecture['prefName']]: number;
};

export const PopulationCompositionChartPresentational: FC<
  PopulationCompositionChartPresentationalProps
> = ({ type: { label }, populationCompositions, className, ...rest }) => {
  const wideCharts: WideChart[] = useMemo(() => {
    // flatten from prefecture-by-prefecture data to year-by-year data
    const flattedData = populationCompositions.flatMap(({ prefecture, data }) =>
      data.map(({ year, value }) => ({
        prefecture,
        year,
        value,
      })),
    );

    // group by year
    const yearBasedData = Object.groupBy(flattedData, ({ year }) => year);

    // convert the data to a wide format
    const wideChart = Object.entries(yearBasedData).map(([year, data]) => {
      const row = { year: Number(year) } as WideChart;
      if (data == null) {
        return row;
      }
      for (const { prefecture, value } of data) {
        row[prefecture.prefName] = value;
      }
      return row;
    });
    return wideChart;
  }, [populationCompositions]);

  return (
    <div
      className={cx(
        className,
        css({
          position: 'relative',
        }),
      )}
      {...rest}
    >
      <strong
        className={css({
          fontSize: {
            base: 'md',
            sm: 'xl',
            md: '2xl',
          },
          fontWeight: 'bold',
          position: 'absolute',
          left: '46%',
        })}
      >
        {label}
      </strong>
      <ResponsiveContainer height="100%" width="100%">
        <LineChart
          data={wideCharts}
          margin={{ top: 48, right: 0, left: 24, bottom: 16 }}
        >
          <CartesianGrid stroke="var(--colors-muted)" strokeDasharray="3 3" />
          <XAxis
            dataKey="year"
            domain={['dataMin', 'dataMax']}
            tick={{ fontSize: 12, fill: 'var(--colors-text)' }}
          >
            <Label
              fill="var(--colors-text)"
              fontWeight="bold"
              offset={24}
              position="right"
              value="年度"
            />
          </XAxis>
          <YAxis
            tick={{ fontSize: 12, fill: 'var(--colors-text)' }}
            tickCount={16}
            tickFormatter={formatTo10kNumberUnit({ maximumFractionDigits: 0 })}
          >
            <Label
              fill="var(--colors-text)"
              fontWeight="bold"
              offset={24}
              position="top"
              value="人口数(万人)"
            />
          </YAxis>
          <Legend
            align="right"
            height={24}
            layout="vertical"
            verticalAlign="top"
          />
          <Tooltip
            contentStyle={{ backgroundColor: 'var(--colors-base)' }}
            formatter={formatTo10kNumberUnit({ maximumFractionDigits: 4 })}
            itemSorter={(item) => (item.value as number) * -1}
          />
          {populationCompositions.map(({ prefecture }, index) => (
            <Line
              dataKey={prefecture.prefName}
              dot={{ r: 3 }}
              isAnimationActive
              key={prefecture.prefCode}
              name={prefecture.prefName}
              strokeWidth={2}
              type="monotone"
              unit="万人"
              {...createLineStyle(index)}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
