import * as React from 'react';

import {Module} from '../WebpackAnalysisTypes';
import {ChunksColumn, SizeColumn} from '../table-columns';
import ReactTable, {Column} from 'react-table';
import {sanitizeModuleName} from '../utils';
import {IntegerCell} from '../table-cells';
import {ModuleLink} from './links';

const moduleTableColumns: Column[] = [
  {
    id: 'name',
    accessor: (m: Module) => sanitizeModuleName(m.name),
    Cell: (d) => <ModuleLink module={d.original}/>,
    Header: 'Name',
  },
  SizeColumn,
  {
    accessor: (m: Module) => m.reasons.length,
    Header: '#Reasons',
    id: 'nReasons',
    style: {textAlign: 'right'},
    Cell: IntegerCell,
    maxWidth: 80,
  },
  {
    accessor: 'errors',
    Header: '#Errors',
    style: {textAlign: 'right'},
    Cell: IntegerCell,
    maxWidth: 80,
  },
  {
    accessor: 'warnings',
    Header: '#Warnings',
    style: {textAlign: 'right'},
    Cell: IntegerCell,
    maxWidth: 80,
  },
  ChunksColumn,
];

export const ModuleTable = ({modules}: { modules: Module[] }) => {
  return (
    <ReactTable
      filterable
      defaultFilterMethod={(filter, row) => String(row[filter.id]).includes(filter.value)}
      defaultPageSize={50}
      columns={moduleTableColumns}
      data={modules}
    />
  );
};
