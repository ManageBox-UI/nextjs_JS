import PropTypes from 'prop-types';
import { useState } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import { Checkbox, TableRow, TableCell, Typography, Stack, Link, MenuItem } from '@mui/material';
// utils
import { fDate } from '../../../../utils/formatTime';
import createAvatar from '../../../../utils/createAvatar';
import { fCurrency } from '../../../../utils/formatNumber';
// components
import Label from '../../../../components/Label';
import Avatar from '../../../../components/Avatar';
import Iconify from '../../../../components/Iconify';
import { TableMoreMenu } from '../../../../components/table';
import NextLink from 'next/link';

// ----------------------------------------------------------------------

InvoiceTableRow.propTypes = {
  row: PropTypes.object.isRequired,
  selected: PropTypes.bool,
  onSelectRow: PropTypes.func,
  onViewRow: PropTypes.func,
  onEditRow: PropTypes.func,
  onDeleteRow: PropTypes.func,
};

export default function InvoiceTableRow({ row, selected, onSelectRow, onViewRow, onEditRow, onDeleteRow, postTableData, setOpen, open }) {
  const theme = useTheme();

  const { NodeID,Name, Region, City, Town,DeviceSerial,Address,Lattitude,Longitude,ManageBoxIP } = row;
  
  const [openMenu, setOpenMenuActions] = useState(null);

  const handleOpenMenu = (event) => {
    setOpenMenuActions(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpenMenuActions(null);
  };

  return (
    <TableRow hover selected={selected}>
      <TableCell padding="checkbox">
        <Checkbox checked={selected} onClick={onSelectRow} />
      </TableCell>

      <TableCell sx={{ display: 'flex', alignItems: 'center' }}>

        <Stack>
          <NextLink noWrap variant="body2" href={`/dashboard/details/${NodeID}`} sx={{ color: 'text.disabled', cursor: 'pointer', align:"flex-start" }}>
            {NodeID}
          </NextLink>
        </Stack>
      </TableCell>

      <TableCell align="flex-start">{DeviceSerial}</TableCell>
      <TableCell align="flex-start">{Name}</TableCell>

      <TableCell align="flex-start">{Region}</TableCell>

      <TableCell align="flex-start">{City}</TableCell>

      <TableCell align="flex-start" sx={{ textTransform: 'capitalize' }}>
        {Town}
      </TableCell>
      <TableCell align="flex-start" sx={{ textTransform: 'capitalize' }}>
        {Address}
      </TableCell>
      <TableCell align="flex-start" sx={{ textTransform: 'capitalize' }}>
        {Lattitude}
      </TableCell>
      <TableCell align="flex-start" sx={{ textTransform: 'capitalize' }}>
        {Longitude}
      </TableCell>
      <TableCell align="flex-start" sx={{ textTransform: 'capitalize' }}>
        {ManageBoxIP}
      </TableCell>

      {/* <TableCell align="left">
        <Label
          variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
          color={
            (status === 'paid' && 'success') ||
            (status === 'unpaid' && 'warning') ||
            (status === 'overdue' && 'error') ||
            'default'
          }
          sx={{ textTransform: 'capitalize' }}
        >
          {status}
        </Label>
      </TableCell> */}

      <TableCell align="right">
        <TableMoreMenu
          open={openMenu}
          onOpen={handleOpenMenu}
          onClose={handleCloseMenu}
          actions={
            <>
              <MenuItem
                onClick={() => {
                  onDeleteRow();
                  handleCloseMenu();
                }}
                sx={{ color: 'error.main' }}
              >
                <Iconify icon={'eva:trash-2-outline'} />
                Delete
              </MenuItem>

              <MenuItem
                onClick={() => {
                  onViewRow();
                  handleCloseMenu();
                }}
              >
                <Iconify icon={'eva:eye-fill'} />
                View
              </MenuItem>

              <MenuItem
                onClick={() => setOpen(true)}
              >
                <Iconify icon={'eva:edit-fill'} />
                Edit
              </MenuItem>
            </>
          }
        />
      </TableCell>
    </TableRow>
  );
}
