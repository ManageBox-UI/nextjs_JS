// @mui
import PropTypes from 'prop-types';
import { Card, CardHeader, Typography, Stack, LinearProgress, Box } from '@mui/material';
// utils
import { fShortenNumber } from '../../../../utils/formatNumber';

// ----------------------------------------------------------------------

BookingBookedRoom.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  data: PropTypes.array.isRequired,
};

export default function BookingBookedRoom({ title, subheader, data, ...other }) {
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Stack spacing={3} sx={{ px: 3, my: 5 }}>
        {data.map((progress) => (
          <LinearProgress
            variant="determinate"
            key={progress.status}
            value={progress.field*10}
            color={
              progress.key === 'NORMAL'? 'success' : progress.key === 'BILINMIYOR' ? 'warning' : 'error'
            }
            sx={{ height: 8, bgcolor: 'grey.50016' }}
          />
        ))}
      </Stack>

      <Stack direction="row" justifyContent="space-between" sx={{ px: 3, pb: 3 }}>
        {data.map((progress) => (
          <Stack key={progress.key} alignItems="center">
            <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
              <Box
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: 0.5,
                  bgcolor: 'success.main',
                   ...(progress.key === 'NORMAL' && { bgcolor: 'success.main' }),
                  ...(progress.key === 'BILINMIYOR' && { bgcolor: 'warning.main' }),
                  ...(progress.key === 'ELEKTRIK_KESIK' && { bgcolor: 'error.main' }),
                 
                }}
              />

              <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
                {progress.key}
              </Typography>
            </Stack>

            <Typography variant="h6">{fShortenNumber(progress.field)}</Typography>
          </Stack>
        ))}
      </Stack>
    </Card>
  );
}
