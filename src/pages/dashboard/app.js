// @mui
import { useTheme } from '@mui/material/styles';
import { Container, Grid, Stack, Button, Map,forEach, arrays } from '@mui/material';
import useAuth from '../../hooks/useAuth';
import useSettings from '../../hooks/useSettings';
// layouts
import Layout from '../../layouts';
// _mock_
import { _appFeatured, _appAuthors, _appInstalled, _appRelated, _appInvoices } from '../../_mock';
// components
import Page from '../../components/Page';
// sections
import {
  AppWidget,
  AppWelcome,
  AppFeatured,
  AppNewInvoice,
  AppTopAuthors,
  AppTopRelated,
  AppAreaInstalled,
  AppWidgetSummary,
  AppCurrentDownload,
  AppTopInstalledCountries,
} from '../../sections/@dashboard/general/app';
import {
 BookingReservationStats,
} from '../../sections/@dashboard/general/booking';
import {
  AnalyticsCurrentVisits,
 } from '../../sections/@dashboard/general/analytics';
// assets
import { SeoIllustration } from '../../assets';
import axios from 'axios';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { from } from 'stylis';

// ----------------------------------------------------------------------

GeneralApp.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function GeneralApp() {
  const { user } = useAuth();
  const theme = useTheme();
  const { themeStretch } = useSettings();
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data: totalAtm, error: totalAtmError } = useSWR(
    `${process.env.API_URL}/services/GetWidgetContent?WidgetId=ToplamAtm`,
    fetcher
  );
  const { data: users, error: usersError } = useSWR(
    'https://13.79.156.47:8002/services/GetWidgetContent?WidgetId=IzlenenAtm',
    fetcher
  );
  const { data: online, error: onlineError } = useSWR(
    'https://13.79.156.47:8002/services/GetWidgetContent?WidgetId=CevrimiciAtm',
    fetcher
  );
  const { data: alarm, error: alarmError } = useSWR(
    'https://13.79.156.47:8002/services/GetWidgetContent?WidgetId=AlarmCount',
    fetcher
  );
  const { data: aydinlatma, error: aydinlatmaError } = useSWR(
    'https://13.79.156.47:8002/services/GetWidgetContent?WidgetId=Ayd%C4%B1nlatmaBarGraph',
    fetcher
  );
  const { data: pieAydinlatma, error: pieAydinlatmaError } = useSWR(
    'https://13.79.156.47:8002/services/GetWidgetContent?WidgetId=Ayd%C4%B1nlatmaDurumuPieChart',
    fetcher
  );

 
  return (
    <Page title="General: App">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container spacing={3}>
          {totalAtm ? (
            <Grid item xs={12} md={3}>
              <AppWidgetSummary
                title={totalAtm.label}
                total={totalAtm.data.field}
                chartColor={theme.palette.chart.red[0]}
                chartData={[8, 9, 31, 8, 16, 37, 8, 33, 46, 31]}
                subheader={totalAtm.data.desc}
              />
            </Grid>
          ) : null}

          {users ? (
            <Grid item xs={12} md={3}>
              <AppWidgetSummary
                title={users.label}
                total={users.data.field}
                chartColor={theme.palette.chart.red[0]}
                chartData={[8, 9, 31, 8, 16, 37, 8, 33, 46, 31]}
                subheader={users.data.desc}
              />
            </Grid>
          ) : null}

          {online ? (
            <Grid item xs={12} md={3}>
              <AppWidgetSummary
                title={online.label}
                total={online.data.field}
                chartColor={theme.palette.chart.red[0]}
                chartData={[8, 9, 31, 8, 16, 37, 8, 33, 46, 31]}
                subheader={online.data.desc}
              />
            </Grid>
          ) : null}

          {alarm ? (
            <Grid item xs={12} md={3}>
              <AppWidgetSummary
                title={alarm.label}
                total={alarm.data.field}
                chartColor={theme.palette.chart.red[0]}
                chartData={[8, 9, 31, 8, 16, 37, 8, 33, 46, 31]}
                subheader={alarm.data.desc}
              />
            </Grid>
          ) : null}

      {aydinlatma?(

         <Grid item xs={12} md={8}>
         <BookingReservationStats
           title={aydinlatma.label}
           subheader="(+43% Check In | +12% Check Out) than last year"
           data={aydinlatma.data}
         />
       </Grid>

      ):null}  

{/* {pieAydinlatma?(
  pieAydinlatma.data.map((data , i) =>(
    <Grid item xs={12} md={6} key={i}lg={4}>
    <AnalyticsCurrentVisits
      title={pieAydinlatma.label}
      chartData={[
        { label: data.key, value:data.field},
      ]}
      chartColors={[
        theme.palette.primary.main,
        theme.palette.chart.blue[0],
        theme.palette.chart.violet[0],
        theme.palette.chart.yellow[0],
      ]}
    />
  </Grid>)
  )
):null} */}


{pieAydinlatma?(
  <Grid item xs={12} md={4} lg={4}>
          <AnalyticsCurrentVisits
              title={pieAydinlatma.label}
              chartData={pieAydinlatma.data}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.chart.blue[0],
                theme.palette.chart.violet[0],
                theme.palette.chart.yellow[0],
              ]}
            />
            </Grid>
):null}

                  
          

          <Grid item xs={12} md={4} lg={8}>
            <AppAreaInstalled
              title="Area Installed"
              subheader="(+43%) than last year"
              chartLabels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']}
              chartData={[
                {
                  year: '2019',
                  data: [
                    { name: 'Asia', data: [10, 41, 35, 51, 49, 62, 69, 91, 148] },
                    { name: 'America', data: [10, 34, 13, 56, 77, 88, 99, 77, 45] },
                  ],
                },
                {
                  year: '2020',
                  data: [
                    { name: 'Asia', data: [148, 91, 69, 62, 49, 51, 35, 41, 10] },
                    { name: 'America', data: [45, 77, 99, 88, 77, 56, 13, 34, 10] },
                  ],
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} lg={14}>
            <AppNewInvoice
              title="New Invoice"
              tableData={_appInvoices}
              tableLabels={[
                { id: 'id', label: 'Invoice ID' },
                { id: 'category', label: 'Category' },
                { id: 'price', label: 'Price' },
                { id: 'status', label: 'Status' },
                { id: '' },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppTopRelated title="Top Related Applications" list={_appRelated} />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppTopInstalledCountries title="Top Installed Countries" list={_appInstalled} />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppTopAuthors title="Top Authors" list={_appAuthors} />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Stack spacing={3}>
              <AppWidget title="Conversion" total={38566} icon={'eva:person-fill'} chartData={48} />
              <AppWidget title="Applications" total={55566} icon={'eva:email-fill'} color="warning" chartData={75} />
            </Stack>
          </Grid>
                    {/* <Grid item xs={12} md={8}>
            {' '}

            <AppWelcome
              title={`Welcome back! \n ${user?.displayName}`}
              description="If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything."
              img={
                <SeoIllustration
                  sx={{
                    p: 3,
                    width: 360,
                    margin: { xs: 'auto', md: 'inherit' },
                  }}
                />
              }
              action={<Button variant="contained">Go Now</Button>}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <AppFeatured list={_appFeatured} />
          </Grid> */}

          {/* {chartDatas
            ? chartDatas.map((data, i) => (
                <Grid key={i} item xs={12} md={4}>
                  <AppWidgetSummary
                    title={"Toplam ATM ayısı"}
                    total={chartDatas.length}
                    chartColor={theme.palette.chart.red[0]}
                    chartData={[8, 9, 31, 8, 16, 37, 8, 33, 46, 31]}
                  />
                </Grid>
              ))
            : null}  */}

        
        </Grid>
      </Container>
    </Page>
  );
}
