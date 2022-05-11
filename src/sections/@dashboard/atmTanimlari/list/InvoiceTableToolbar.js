import PropTypes from 'prop-types';
import { Stack, InputAdornment, TextField, MenuItem } from '@mui/material';
import DatePicker from '@mui/lab/DatePicker';
// components
import Iconify from '../../../../components/Iconify';

// ----------------------------------------------------------------------

const INPUT_WIDTH = 160;

InvoiceTableToolbar.propTypes = {
  filterName: PropTypes.string,
  filterService: PropTypes.string,
  filterEndDate: PropTypes.instanceOf(Date),
  filterStartDate: PropTypes.instanceOf(Date),
  onFilterName: PropTypes.func,
  onFilterEndDate: PropTypes.func,
  onFilterService: PropTypes.func,
  onFilterStartDate: PropTypes.func,
  optionsService: PropTypes.arrayOf(PropTypes.string),
};

export default function InvoiceTableToolbar({
  optionsService,
  
  filterService,
  onFilterName,
  onFilterService,
  onFilterStartDate,
  onFilterEndDate,
  search,
  setSearch
}) {
  return (
    <Stack spacing={2} direction={{ xs: 'column', md: 'row' }} sx={{ py: 2.5, px: 3 }}>
     

      {/* <DatePicker
        label="Start date"
        value={filterStartDate}
        onChange={onFilterStartDate}
        renderInput={(params) => (
          <TextField
            {...params}
            fullWidth
            sx={{
              maxWidth: { md: INPUT_WIDTH },
            }}
          />
        )}
      />

      <DatePicker
        label="End date"
        value={filterEndDate}
        onChange={onFilterEndDate}
        renderInput={(params) => (
          <TextField
            {...params}
            fullWidth
            sx={{
              maxWidth: { md: INPUT_WIDTH },
            }}
          />
        )}
      /> */}

      <TextField
        fullWidth
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Atm kodu veya atm adı girin"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Iconify icon={'eva:search-fill'} sx={{ color: 'text.disabled', width: 20, height: 20 }} />
            </InputAdornment>
          ),
        }}
      />
    </Stack>
  );
}
