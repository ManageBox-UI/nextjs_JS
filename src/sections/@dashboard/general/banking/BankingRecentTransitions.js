import PropTypes from 'prop-types';
import { useState } from 'react';
import { format } from 'date-fns';
import { sentenceCase } from 'change-case';// @mui
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Card,
  Table,
  Avatar,
  Button,
  Divider,
  MenuItem,
  TableRow,
  TableBody,
  TableCell,
  CardHeader,
  Typography,
  TableContainer,
} from '@mui/material';
// utils
import { fCurrency } from '../../../../utils/formatNumber';
// components
import Label from '../../../../components/Label';
import Iconify from '../../../../components/Iconify';
import Scrollbar from '../../../../components/Scrollbar';
import { TableMoreMenu, TableHeadCustom } from '../../../../components/table';
import {FileUpload, ThreeDRotation } from '@mui/icons-material';

// ----------------------------------------------------------------------

BankingRecentTransitions.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  tableData: PropTypes.array.isRequired,
  tableLabels: PropTypes.array.isRequired,
};

export default function BankingRecentTransitions({ title, subheader, tableLabels, tableData, ...other }) {
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} sx={{ mb: 3 }} />

      <Scrollbar>
        <TableContainer sx={{ minWidth: 720 }}>
          <Table>
            <TableHeadCustom headLabel={tableLabels} />

            <TableBody>
              {tableData.map((row) => (
                <BankingRecentTransitionsRow key={row.id} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Scrollbar>

      <Divider />

      <Box sx={{ p: 2, textAlign: 'right' }}>
        <Button size="small" color="inherit" endIcon={<Iconify icon={'eva:arrow-ios-forward-fill'} />}>
          View All
        </Button>
      </Box>
    </Card>
  );
}

// ----------------------------------------------------------------------

BankingRecentTransitionsRow.propTypes = {
  row: PropTypes.shape({
    id: PropTypes.string,
    amount: PropTypes.number,
    avatar: PropTypes.string,
    category: PropTypes.string,
    date: PropTypes.number,
    message: PropTypes.string,
    status: PropTypes.string,
    type: PropTypes.string,
  }),
};

function BankingRecentTransitionsRow({ row }) {
  const theme = useTheme();

  const isLight = theme.palette.mode === 'light';

  const [openMenu, setOpenMenuActions] = useState(null);

  const handleOpenMenu = (event) => {
    setOpenMenuActions(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpenMenuActions(null);
  };

  const handleDownload = () => {
    handleCloseMenu();
    console.log('DOWNLOAD', row.id);
  };

  const handlePrint = () => {
    handleCloseMenu();
    console.log('PRINT', row.id);
  };

  const handleShare = () => {
    handleCloseMenu();
    console.log('SHARE', row.id);
  };

  const handleDelete = () => {
    handleCloseMenu();
    console.log('DELETE', row.id);
  };

  return (
    <TableRow>
      <TableCell>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
      
          <Box sx={{ ml: 2 }}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {<Avatar alt={row.name} src={row.avatar} />,<Typography variant="subtitle2"> {row.name}</Typography>}
            </Typography>
          </Box>
        </Box>
      </TableCell>

      <TableCell>
        <Typography variant="subtitle2">{row.webUserID}</Typography>
        {/* <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {row.name}
        </Typography> */}
      </TableCell>

     

      <TableCell>
        <Label
          variant={row.email}
          color={(row.status === 'completed' && 'success') || (row.status === 'in_progress' && 'warning') || 'error'}
        >
          {sentenceCase(row.email)}
        </Label>
      </TableCell>
      <TableCell>
        <Typography variant="subtitle2">{row.role}</Typography>
        {/* <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {row.name}
        </Typography> */}
      </TableCell>

      <TableCell align="right">
        <TableMoreMenu
          open={openMenu}
          onOpen={handleOpenMenu}
          onClose={handleCloseMenu}
          actions={
            <>
              <MenuItem onClick={handleDownload}>
                <Iconify icon={'eva:download-fill'} />
                Download
              </MenuItem>

              <MenuItem onClick={handlePrint}>
                <Iconify icon={'eva:printer-fill'} />
                Print
              </MenuItem>

              <MenuItem onClick={handleShare}sx={{ color:"green" }}>
                <Iconify icon={'eva:upload-fill'} />
                GÜNCELLE
              </MenuItem>

              <Divider sx={{ borderStyle: 'dashed' }} />

              <MenuItem onClick={handleDelete} sx={{ color: 'error.main', backgroundColor:"black" }}>
                <Iconify icon={'eva:trash-2-outline'} />
                SİL
              </MenuItem>
            </>
          }
        />
      </TableCell>
    </TableRow>
  );
}

// ----------------------------------------------------------------------

AvatarIcon.propTypes = {
  icon: PropTypes.string.isRequired,
};

function AvatarIcon({ icon }) {
  return (
    <Avatar
      sx={{
        width: 48,
        height: 48,
        color: 'text.secondary',
        bgcolor: 'background.neutral',
      }}
    >
      <Iconify icon={icon} width={24} height={24} />
    </Avatar>
  );
}

// ----------------------------------------------------------------------

function renderAvatar(category, avatar) {
  if (category === 'Books') {
    return <AvatarIcon icon={'eva:book-fill'} />;
  }
  if (category === 'Beauty & Health') {
    return <AvatarIcon icon={'eva:heart-fill'} />;
  }
  return avatar ? (
    <Avatar alt={category} src={avatar} sx={{ width: 48, height: 48, boxShadow: (theme) => theme.customShadows.z8 }} />
  ) : null;
}
