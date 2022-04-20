import PropTypes from 'prop-types';
import merge from 'lodash/merge';
import { useEffect, useState } from 'react';
// @mui
import { Card, CardHeader, Box, TextField } from '@mui/material';
// components
import ReactApexChart, { BaseOptionChart } from '../../../../components/chart';

// ----------------------------------------------------------------------

BookingReservationStats.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  chartData: PropTypes.array.isRequired,
  chartLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default function BookingReservationStats({ title, subheader, data, ...other }) {
  const [chartData, setChartData] = useState();
  const chartLabels = data.map((arrayData) => arrayData.key);
  useEffect(()=>{

    var chartData=[{}]
    chartData[0].data = new Array()
    data.map((data)=>{
      chartData[0].data.push({name:data.key,data:[data.field]})
    })
    setChartData(chartData)
  },[data])
  const chartOptions = merge(BaseOptionChart(), {
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: chartLabels,
    },
    tooltip: {
      y: {
        formatter: (val) => `${val}`,
      },
    },
  });
  return (
    <>
    {chartData?(
      <Card {...other}>
      
      <CardHeader
        title={title}
        subheader={subheader}
      />

      {chartData?.map((item) =>{
        console.log(item)
        return(
        <Box key={item.year} sx={{ mt: 3, mx: 3 }} dir="ltr">
         
            <ReactApexChart type="bar" series={item.data} options={chartOptions} height={364} />

        </Box>
      )})}
    </Card>
    ):null}
</>
  );
}
