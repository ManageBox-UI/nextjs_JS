// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container } from '@mui/material';
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';
// hooks
import useSettings from '../../hooks/useSettings';
// layouts
import Layout from '../../layouts';
// _mock_
import { _bookings, _bookingNew, _bookingsOverview, _bookingReview } from '../../_mock';
// components
import Page from '../../components/Page';
// sections
import {
  BookingDetails,
  BookingBookedRoom,
  BookingTotalIncomes,
  BookingRoomAvailable,
  BookingNewestBooking,
  BookingWidgetSummary,
  BookingCheckInWidgets,
  BookingCustomerReviews,
  BookingReservationStats,
} from '../../sections/@dashboard/general/booking';
// assets
import { BookingIllustration, CheckInIllustration, CheckOutIllustration } from '../../assets';
import axios from 'axios';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

// ----------------------------------------------------------------------

GeneralBooking.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------
export default function GeneralBooking() {
  const theme = useTheme();

  const { themeStretch } = useSettings();


  return (
    <Page title="General: Banking">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <BookingWidgetSummary title="Toplam ATM " total={714000} icon={<BookingIllustration />} />
          </Grid>

          <Grid item xs={12} md={4}>
            <BookingWidgetSummary title="İzlenen ATM" total={311000} icon={<CheckInIllustration />} />
          </Grid>

          <Grid item xs={12} md={4}>
            <BookingWidgetSummary title="Çevirimiçi" total={124000} icon={<CheckOutIllustration />} />
          </Grid>

          <Grid item xs={12} md={8}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <BookingTotalIncomes total={18765} percent={2.6} chartData={[111, 136, 76, 108, 74, 54, 57, 84]} />
              </Grid>

              <Grid item xs={12} md={6}>
                <BookingBookedRoom title="Booked Room" data={_bookingsOverview} />
              </Grid>

              <Grid item xs={12} md={12}>
                <BookingCheckInWidgets
                  chartData={[
                    { label: 'Check In', percent: 72, total: 38566 },
                    { label: 'Check Out', percent: 64, total: 18472 },
                  ]}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={4}>
            <BookingRoomAvailable
              title="Room Available"
              data={[
                { label: 'Sold out', value: 120 },
                { label: 'Available', value: 66 },
              ]}
              chartColors={[[theme.palette.primary.light, theme.palette.primary.main]]}
            />
          </Grid>

          <Grid item xs={12} md={8}>
            <BookingReservationStats
              title="Reservation Stats"
              subheader="(+43% Check In | +12% Check Out) than last year"
              data={[
                {
                  key: "ILETISIM_YOK",
                  field: 1,
                  status: 1
                },
                {
                  key: "KAPALI",
                  field: 2,
                  status: 1
                }
              ]}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <BookingCustomerReviews
              title="Customer Reviews"
              subheader={`${_bookingReview.length} Reviews`}
              list={_bookingReview}
            />
          </Grid>

          <Grid item xs={12}>
            <BookingNewestBooking title="Newest Booking" subheader="12 Booking" list={_bookingNew} />
          </Grid>

          <Grid item xs={12}>
            <BookingDetails
              title="Booking Details"
              tableData={_bookings}
              tableLabels={[
                { id: 'booker', label: 'Booker' },
                { id: 'checkIn', label: 'Check In' },
                { id: 'checkOut', label: 'Check Out' },
                { id: 'status', label: 'Status' },
                { id: 'phone', label: 'Phone' },
                { id: 'roomType', label: 'Room Type' },
                { id: '' },
              ]}
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
