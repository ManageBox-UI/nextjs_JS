import sumBy from 'lodash/sumBy';
import { useState } from 'react';
// next
import NextLink from 'next/link';
import { useRouter } from 'next/router';
// @mui
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Tab,
  Tabs,
  Card,
  Table,
  Stack,
  Switch,
  Button,
  Tooltip,
  Divider,
  TableBody,
  Container,
  IconButton,
  TableContainer,
  TablePagination,
  FormControlLabel,
} from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// hooks
import useTabs from '../../hooks/useTabs';
import useSettings from '../../hooks/useSettings';
import useTable, { getComparator, emptyRows } from '../../hooks/useTable';
// _mock_
// layouts
import Layout from '../../layouts';
// components
import Page from '../../components/Page';
import Label from '../../components/Label';
import Iconify from '../../components/Iconify';
import Scrollbar from '../../components/Scrollbar';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
import { TableEmptyRows, TableHeadCustom, TableNoData, TableSelectedActions } from '../../components/table';
// sections
import InvoiceAnalytic from '../../sections/@dashboard/atmTanimlari/InvoiceAnalytic';
import { InvoiceTableRow, InvoiceTableToolbar } from '../../sections/@dashboard/atmTanimlari/list';
import axios from 'axios';
import { useEffect } from 'react';
import useSWR from 'swr';
import EditModal from '../../components/EditModal';
// ----------------------------------------------------------------------



const TABLE_HEAD = [
  { id: 'invoiceNumber', label: 'Atm Kodu', align: 'left' },
  { id: 'createDate', label: 'Cihaz Seri No', align: 'left' },
  { id: 'dueDate', label: 'Atm Adı', align: 'left' },
  { id: 'price', label: 'Bölge', align: 'center', width: 140 },
  { id: 'sent', label: 'İl', align: 'center', width: 140 },
  { id: 'status', label: 'İlçe', align: 'left' },
  { id: 'status', label: 'Enlem', align: 'left' },
  { id: 'status', label: 'Boylam', align: 'left' },
  { id: 'status', label: 'MBX IP', align: 'left' },
  { id: '' },
];

// ----------------------------------------------------------------------

AtmTanimlari.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function AtmTanimlari() {
  const fetcher = (url) =>
    axios
      .get(url, { headers: { Authorization: 'Bearer ' + localStorage.getItem('accessToken') } })
      .put(url, { headers: { Authorization: 'Bearer ' + localStorage.getItem('accessToken') } })
      .then((res) => res.data);
  const { data: atmTanimlari, error: atmTanimlariError } = useSWR(
    'https://13.79.156.47:8002/services/GetReportTable?TableID=AtmLer',
    fetcher
  );
  
  const theme = useTheme();

  const { themeStretch } = useSettings();

  const router = useRouter();
    useEffect(()=>{
      console.log(selected)
    },[selected])
  const {
    dense,
    page,
    order,
    orderBy,
    rowsPerPage,
    setPage,
    //
    selected,
    setSelected,
    onSelectRow,
    onSelectAllRows,
    //
    onSort,
    onChangeDense,
    onChangePage,
    onChangeRowsPerPage,
  } = useTable({ defaultOrderBy: 'createDate' });

  const [filterName, setFilterName] = useState('');

  const [filterService, setFilterService] = useState('all');

  const [filterStartDate, setFilterStartDate] = useState(null);

  const [filterEndDate, setFilterEndDate] = useState(null);
  const [open, setOpen] = useState(false);

  const { currentTab: filterStatus, onChangeTab: onFilterStatus } = useTabs('all');

  const handleFilterName = (filterName) => {
    setFilterName(filterName);
    setPage(0);
  };

  const handleFilterService = (event) => {
    setFilterService(event.target.value);
  };

  const handleDeleteRow = (id) => {
    const deleteRow = atmTanimlari.filter((row) => row.id !== id);
    setSelected([]);
  };

  const handleDeleteRows = (selected) => {
    const deleteRows = atmTanimlari.filter((row) => !selected.includes(row.id));
    setSelected([]);
  };

  const handleEditRow = (id) => {
    router.push(PATH_DASHBOARD.invoice.edit(id));
  };

  const handleViewRow = (id) => {
    router.push(`/dashboard/invoices?id=${id}`);
  };

  const dataFiltered = applySortFilter({
    atmTanimlari,
    comparator: getComparator(order, orderBy),
    filterName,
    filterService,
    filterStatus,
    filterStartDate,
    filterEndDate,
  });

  const denseHeight = dense ? 56 : 76;

  const getLengthByStatus = (status) => atmTanimlari?.filter((item) => item.status === status).length;

  const getTotalPriceByStatus = (status) =>
    sumBy(
      atmTanimlari?.filter((item) => item.status === status),
      'totalPrice'
    );

  const getPercentByStatus = (status) => (getLengthByStatus(status) / atmTanimlari.length) * 100;

  const TABS = [
    { value: 'all', label: 'All', color: 'info', count: atmTanimlari?.length },
    { value: 'paid', label: 'Çevirimiçi', color: 'success', count: getLengthByStatus('paid') },
    { value: 'unpaid', label: 'Kurulmamış', color: 'warning', count: getLengthByStatus('unpaid') },
    { value: 'overdue', label: 'Çevirimdışı', color: 'error', count: getLengthByStatus('overdue') },
  ];

  return (
    <Page title="Invoice: List">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="ATMLER TANIMLARI "
          links={[
           <></>
          ]}
         
        />
        {atmTanimlari ? (
          <>
            <Card sx={{ mb: 5 }}>
              <Scrollbar>
                <Stack
                  direction="row"
                  divider={<Divider orientation="vertical" flexItem sx={{ borderStyle: 'dashed' }} />}
                  sx={{ py: 2 }}
                >
                  <InvoiceAnalytic
                    title="Total"
                    total={atmTanimlari.length}
                    percent={100}
                    price={sumBy(atmTanimlari, 'totalPrice')}
                    icon="ic:round-receipt"
                    color={theme.palette.info.main}
                  />
                  <InvoiceAnalytic
                    title="Çevirimiçi"
                    total={getLengthByStatus(atmTanimlari.IsActive)}
                    percent={getPercentByStatus(atmTanimlari.IsActive)}
                    price={getTotalPriceByStatus('paid')}
                    icon="eva:checkmark-circle-2-fill"
                    color={theme.palette.success.main}
                  />
                  <InvoiceAnalytic
                    title="Kurulmamış"
                    total={getLengthByStatus('unpaid')}
                    percent={getPercentByStatus('unpaid')}
                    price={getTotalPriceByStatus('unpaid')}
                    icon="eva:clock-fill"
                    color={theme.palette.warning.main}
                  />
                  <InvoiceAnalytic
                    title="Çevirimdışı"
                    total={getLengthByStatus('overdue')}
                    percent={getPercentByStatus('overdue')}
                    price={getTotalPriceByStatus('overdue')}
                    icon="eva:bell-fill"
                    color={theme.palette.error.main}
                  />
                </Stack>
              </Scrollbar>
            </Card>

            <Card>
              <Tabs
                allowScrollButtonsMobile
                variant="scrollable"
                scrollButtons="auto"
                value={filterStatus}
                onChange={onFilterStatus}
                sx={{ px: 2, bgcolor: 'background.neutral' }}
              >
                {TABS.map((tab) => (
                  <Tab
                    disableRipple
                    key={tab.value}
                    value={tab.value}
                    icon={<Label color={tab.color}> {tab.count} </Label>}
                    label={tab.label}
                  />
                ))}
              </Tabs>

              <Divider />

              <InvoiceTableToolbar
                filterName={filterName}
                filterService={filterService}
                filterStartDate={filterStartDate}
                filterEndDate={filterEndDate}
                onFilterName={handleFilterName}
                onFilterService={handleFilterService}
                onFilterStartDate={(newValue) => {
                  setFilterStartDate(newValue);
                }}
                onFilterEndDate={(newValue) => {
                  setFilterEndDate(newValue);
                }}
              />

              <Scrollbar>
                <TableContainer sx={{ minWidth: 800, position: 'relative' }}>
                <Stack spacing={1} direction="row">
                          <Tooltip title="CSV">
                            <IconButton color="primary">
                              <Iconify icon={'bi:filetype-csv'} />
                              
                            </IconButton>
                          </Tooltip>

                          <Tooltip title="PDF">
                            <IconButton color="primary">
                              <Iconify icon={'codicon:file-pdf'} />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="Ekle">
                            <IconButton color="primary">
                              <Iconify icon={'carbon:add'} />
                              <EditModal open={open} setOpen={setOpen} />
                            </IconButton>
                            
                          </Tooltip>
                          <Tooltip title="Güncelle">
                            <IconButton color="primary">
                              <Iconify icon={'clarity:update-line'} />
                            </IconButton>
                          </Tooltip>

                          <Tooltip title="Sil">
                            <IconButton color="error" onClick={() => handleDeleteRows(selected)}>
                              <Iconify icon={'eva:trash-2-outline'} />
                            </IconButton>
                          </Tooltip>
                        </Stack>
                  {selected.length > 0 && (
                    <TableSelectedActions
                      dense={dense}
                      numSelected={selected.length}
                      rowCount={atmTanimlari.length}
                      onSelectAllRows={(checked) =>
                        onSelectAllRows(
                          checked,
                          atmTanimlari.map((row) => row.id)
                        )
                      }
                      actions={
                        <></>
                      }
                    />
                  )}

                  <Table size={dense ? 'small' : 'medium'}>
                    <TableHeadCustom
                      order={order}
                      orderBy={orderBy}
                      headLabel={TABLE_HEAD}
                      rowCount={atmTanimlari.length}
                      numSelected={selected.length}
                      onSort={onSort}
                      onSelectAllRows={(checked) =>
                        onSelectAllRows(
                          checked,
                          atmTanimlari.map((row) => row.id)
                        )
                      }
                    />

                    {atmTanimlari ? (
                      <TableBody>
                        {atmTanimlari.map((row) => (
                          <InvoiceTableRow
                          key={row.id}
                          row={row}
                          setOpen={setOpen}
                            open={open}
                          selected={selected.includes(row.NodeID)}
                          onSelectRow={() => onSelectRow(row.NodeID)}
                          onViewRow={() => handleViewRow(row.NodeID)}
                          onEditRow={() => handleEditRow(row.NodeID)}
                          onDeleteRow={()=>handleDeleteRow(row.NodeID)}
                          />
                        ))}

                        <TableEmptyRows height={denseHeight} emptyRows={emptyRows(page, rowsPerPage, atmTanimlari.length)} />
                      </TableBody>
                    ) : null}
                      
                  </Table>
                </TableContainer>
              </Scrollbar>

              <Box sx={{ position: 'relative' }}>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  component="div"
                  count={dataFiltered.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={onChangePage}
                  onRowsPerPageChange={onChangeRowsPerPage}
                />

                <FormControlLabel
                  control={<Switch checked={dense} onChange={onChangeDense} />}
                  label="Dense"
                  sx={{ px: 3, py: 1.5, top: 0, position: { md: 'absolute' } }}
                />
              </Box>
            </Card>
          </>
        ) : null}
        <EditModal open={open} setOpen={setOpen} />
      </Container>
    </Page>
  );
}

// ----------------------------------------------------------------------

function applySortFilter({
  atmTanimlari,
  comparator,
  filterName,
  filterStatus,
  filterService,
  filterStartDate,
  filterEndDate,
}) {
  const stabilizedThis = atmTanimlari?.map((el, index) => [el, index]);

  stabilizedThis?.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });

  atmTanimlari = stabilizedThis?.map((el) => el[0]);

  if (filterName) {
    atmTanimlari = atmTanimlari?.filter(
      (item) =>
        item.Name.toLowerCase().indexOf(filterName.toLowerCase()) !== -1 ||
        item.Name.toLowerCase().indexOf(filterName.toLowerCase()) !== -1
    );
  }

  if (filterStatus !== 'all') {
    atmTanimlari = atmTanimlari?.filter((item) => item.status === filterStatus);
  }

  if (filterService !== 'all') {
    atmTanimlari = atmTanimlari?.filter((item) => item.items.some((c) => c.service === filterService));
  }

  if (filterStartDate && filterEndDate) {
    atmTanimlari = atmTanimlari?.filter(
      (item) =>
        item.createDate.getTime() >= filterStartDate.getTime() && item.createDate.getTime() <= filterEndDate.getTime()
    );
  }

  return atmTanimlari;
}
