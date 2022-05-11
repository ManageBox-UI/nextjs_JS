/* eslint-disable jsx-a11y/alt-text */
import PropTypes from 'prop-types';
import { Page, View, Text, Image, Document } from '@react-pdf/renderer';
// utils
import { fCurrency } from '../../../../utils/formatNumber';
import { fDate } from '../../../../utils/formatTime';
//
import styles from './InvoiceStyle';
import { CSVLink, CSVDownload } from "react-csv";
// ----------------------------------------------------------------------

InvoiceCSV.propTypes = {
  invoice: PropTypes.object.isRequired,
};

export default function InvoiceCSV({ invoice }) {
  const {
    NodeID,Name, IsOnline, AlarmStatus, Region, City, Town

  } = invoice;

  return (
    <Document>
     <CSVDownload data={invoice} target="_blank" />;
    </Document>
  );
}
