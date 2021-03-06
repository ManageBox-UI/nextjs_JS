import sumBy from 'lodash/sumBy';
import { useState } from 'react';
import { useRouter } from 'next/router';
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
import InvoiceAnalytic from '../../sections/@dashboard/atmler/InvoiceAnalytic';
import { InvoiceTableRow, InvoiceTableToolbar } from '../../sections/@dashboard/atmler/list';
import axios from 'axios';
import { useEffect } from 'react';
import useSWR from 'swr';
import EditModal from '../../components/EditModal';
import InvoiceCSV from '../../sections/@dashboard/atmler/details/InvoiceCSV';
import { CSVLink } from 'react-csv';
// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'invoiceNumber', label: 'Atm Kodu', align: 'left' },
  { id: 'createDate', label: 'Atm Adı', align: 'left' },
  { id: 'dueDate', label: 'İzleme Durumu', align: 'left' },
  { id: 'price', label: 'Alarm', align: 'center', width: 140 },
  { id: 'sent', label: 'Bölge', align: 'center', width: 140 },
  { id: 'status', label: 'İl', align: 'left' },
  { id: 'status', label: 'İlçe', align: 'left' },
];

// ----------------------------------------------------------------------
InvoiceList.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function InvoiceList() {
  const fetcher = (url) =>
    axios
      .get(url, { headers: { Authorization: 'Bearer ' + localStorage.getItem('accessToken') } })
      .then((res) => res.data);
  const { data: atmler, error: atmlerError } = useSWR(
    'https://13.79.156.47:8002/services/GetReportTable?TableID=AtmLer',
    fetcher
  );
  const theme = useTheme();

  const { themeStretch } = useSettings();

  const router = useRouter();

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

  const [search, setSearch] = useState('');

  const [open, setOpen] = useState(false);
  const [filterService, setFilterService] = useState('all');

  const [filterStartDate, setFilterStartDate] = useState(null);

  const [filterEndDate, setFilterEndDate] = useState(null);

  const [filteredAtmData, setFilteredAtmData] = useState([]);

  const { currentTab: filterStatus, onChangeTab: onFilterStatus } = useTabs('all');

  const handleFilterName = (filterName) => {
    setFilterName(filterName);
    setPage(0);
  };

  const handleFilterService = (event) => {
    setFilterService(event.target.value);
  };

  const handleDeleteRow = (id) => {
    const deleteRow = atmler.filter((row) => row.id !== id);
    setSelected([]);
  };

  const handleDeleteRows = (selected) => {
    const deleteRows = atmler.filter((row) => !selected.includes(row.id));
    setSelected([]);
  };

  const handleEditRow = (id) => {
    router.push(PATH_DASHBOARD.invoice.edit(id));
  };

  const handleViewRow = (id) => {
    router.push(`/dashboard/invoices?id=${id}`);
  };

  const dataFiltered = applySortFilter({
    atmler,
    filteredAtmData,
    comparator: getComparator(order, orderBy),
    filterName,
    filterService,
    filterStatus,
    filterStartDate,
    filterEndDate,
  });

  const denseHeight = dense ? 56 : 76;

  const getLengthByStatus = (status) => filteredAtmData?.filter((item) => item.status === status).length;

  const getTotalPriceByStatus = (status) =>
    sumBy(
      filteredAtmData?.filter((item) => item.status === status),
      'totalPrice'
    );

  const getPercentByStatus = (status) => (getLengthByStatus(status) / filteredAtmData.length) * 100;

  const TABS = [
    { value: 'all', label: 'All', color: 'info', count: filteredAtmData?.length },
    { value: 'paid', label: 'Çevirimiçi', color: 'success', count: getLengthByStatus('paid') },
    { value: 'unpaid', label: 'Kurulmamış', color: 'warning', count: getLengthByStatus('unpaid') },
    { value: 'overdue', label: 'Çevirimdışı', color: 'error', count: getLengthByStatus('overdue') },
  ];
  useEffect(() => {
    const filteredAtm = atmler?.filter((row) => {
      if (!search) {
        return row;
      }
      if (search && row.Name.includes(search)) {
        return row;
      }
    });
    setFilteredAtmData(filteredAtm);
  }, [search]);
  const getActives = () => {
    const actives = filteredAtmData.filter((row) => {
      if (row.IsActive !== 1) {
        return row;
      }
    });
    return actives.length;
  };
  const postTableData = (id) => {
    console.log(id);

    // axios.post('https://13.79.156.47:8002/services/EditTable', {
    //   TableID:id,
    //   OP:opData ,
    //   data: editData
    // })
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
  };
  return (
    <Page title="Atm: Atmler">
      <Container maxWidth={themeStretch ? false : 'xlg'}>
        <HeaderBreadcrumbs heading="ATMLER " links={[<></>]} />
        {filteredAtmData ? (
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
                    total={filteredAtmData.length}
                    percent={100}
                    price={sumBy(filteredAtmData, 'totalPrice')}
                    icon="ic:round-receipt"
                    color={theme.palette.info.main}
                  />
                  <InvoiceAnalytic
                    title="Çevirimiçi"
                    total={getActives()}
                    percent={getPercentByStatus(filteredAtmData.IsActive)}
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
              <Stack spacing={1} direction="row">
                <CSVLink data={atmler} asyncOnClick={true} onClick={open}>
                  {atmler ? (
                    <IconButton color="primary">
                      <Iconify icon={'ph:file-csv'} />
                    </IconButton>
                  ) : (
                    'Download me'
                  )}
                </CSVLink>
                <Tooltip title="PDF">
                  <IconButton color="primary">
                    <Iconify icon={'codicon:file-pdf'} />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Copy">
                  <IconButton color="primary">
                    <Iconify icon={'clarity:update-line'} />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Yazdır">
                  <IconButton color="primary" onClick={() => handleDeleteRows(selected)}>
                    <Iconify icon={'cil:print'} />
                  </IconButton>
                </Tooltip>
              </Stack>
              <Divider />

              <InvoiceTableToolbar
                filterName={filterName}
                filterService={filterService}
                filterStartDate={filterStartDate}
                filterEndDate={filterEndDate}
                setSearch={setSearch}
                search={search}
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
                  {selected.length > 0 && (
                    <TableSelectedActions
                      dense={dense}
                      numSelected={selected.length}
                      rowCount={filteredAtmData.length}
                      onSelectAllRows={(checked) =>
                        onSelectAllRows(
                          checked,
                          filteredAtmData.map((row) => row.id)
                        )
                      }
                      actions={<></>}
                    />
                  )}

                  <Table size={dense ? 'small' : 'medium'}>
                    <TableHeadCustom
                      order={order}
                      orderBy={orderBy}
                      headLabel={TABLE_HEAD}
                      rowCount={filteredAtmData.length}
                      numSelected={selected.length}
                      onSort={onSort}
                      onSelectAllRows={(checked) =>
                        onSelectAllRows(
                          checked,
                          filteredAtmData.map((row) => row.id)
                        )
                      }
                    />

                    {filteredAtmData ? (
                      <TableBody>
                        {filteredAtmData?.map((row) => (
                          <InvoiceTableRow
                            postTableData={postTableData}
                            setOpen={setOpen}
                            open={open}
                            key={row.id}
                            row={row}
                            selected={selected.includes(row.NodeID)}
                            onSelectRow={() => onSelectRow(row.NodeID)}
                            onViewRow={() => handleViewRow(row.NodeID)}
                          />
                        ))}

                        <TableEmptyRows height={denseHeight} emptyRows={emptyRows(page, rowsPerPage, atmler)} />
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
  atmler,
  comparator,
  filterName,
  filterStatus,
  filterService,
  filterStartDate,
  filterEndDate,
  filteredAtmData,
}) {
  const stabilizedThis = filteredAtmData?.map((el, index) => [el, index]);

  stabilizedThis?.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });

  atmler = stabilizedThis?.map((el) => el[0]);

  if (filterName) {
    atmler = atmler?.filter(
      (item) =>
        item.Name.toLowerCase().indexOf(filterName.toLowerCase()) !== -1 ||
        item.Name.toLowerCase().indexOf(filterName.toLowerCase()) !== -1
    );
  }

  if (filterStatus !== 'all') {
    atmler = atmler?.filter((item) => item.status === filterStatus);
  }

  if (filterService !== 'all') {
    atmler = atmler?.filter((item) => item.items.some((c) => c.service === filterService));
  }

  if (filterStartDate && filterEndDate) {
    atmler = atmler?.filter(
      (item) =>
        item.createDate.getTime() >= filterStartDate.getTime() && item.createDate.getTime() <= filterEndDate.getTime()
    );
  }

  return atmler;
}
