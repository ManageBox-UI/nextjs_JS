import PropTypes from 'prop-types';
import merge from 'lodash/merge';
// @mui
import { Card, Typography, Stack } from '@mui/material';
// utils
import { fCurrency, fPercent } from '../../../../utils/formatNumber';
// components
import Iconify from '../../../../components/Iconify';
import ReactApexChart, { BaseOptionChart } from '../../../../components/chart';
import {useEffect} from 'react'
// ----------------------------------------------------------------------

BookingTotalIncomes.propTypes = {
  sx: PropTypes.object,
  total: PropTypes.number,
  percent: PropTypes.number,
  chartData: PropTypes.oneOfType(PropTypes.number,PropTypes.string),
};

export default function BookingTotalIncomes({ total, title,percent,subheader, chartData, sx, ...other }) {
 
  const chartOptions = merge(BaseOptionChart(), {
    chart: { sparkline: { enabled: true } },
    xaxis: { labels: { show: false } },
    yaxis: { labels: { show: false } },
    stroke: { width: 4 },
    legend: { show: false },
    grid: { show: false },
    tooltip: {
      marker: { show: false },
      y: {
        formatter: (seriesName) => fCurrency(seriesName),
        title: {
          formatter: () => '',
        },
      },
    },
    fill: { gradient: { opacityFrom: 0, opacityTo: 0 } },
  });

  return (
    <Card
      sx={{
        p: 3,
        boxShadow: 0,
        color: 'primary.darker',
        backgroundColor: 'primary.lighter',
        ...sx,
      }}
      {...other}
    >
      <Stack direction="row" justifyContent="space-between" sx={{ mb: 3 }}>
        <div>
          <Typography sx={{ mb: 2, typography: 'subtitle2' }}>{title}</Typography>
          <Typography sx={{ typography: 'h3' }}>{total}</Typography>
        </div>

        <div>
          <Stack direction="row" alignItems="center" justifyContent="flex-end" sx={{ mb: 0.6 }}>
            <Iconify width={20} height={20} icon={percent >= 0 ? 'eva:trending-up-fill' : 'eva:trending-down-fill'} />
            <Typography variant="subtitle2" component="span" sx={{ ml: 0.5 }}>
              {percent < 0 }
              {percent}
            </Typography>
          </Stack>
          <Typography variant="body2" component="span" sx={{ opacity: 0.72 }}>
            <subheader>{subheader}</subheader>
          </Typography>
        </div>
      </Stack>

      <ReactApexChart type="area" series={[{ data: chartData }]} options={chartOptions} height={320} />
    </Card>
  );
}
