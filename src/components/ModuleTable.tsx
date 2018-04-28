import * as React from 'react';

import {Module} from '../WebpackAnalysisTypes';
import {ChunksColumn, SizeColumn} from '../table-columns';
import ReactTable, {Column, RowInfo} from 'react-table';
import Tabbed from './Tabbed';
import {sanitizeModuleName} from '../utils';
import {IntegerCell} from '../table-cells';

const moduleReasonTableColumns: Column[] = [
  {accessor: 'type', Header: 'Type'},
  {accessor: 'module', Header: 'Module'},
  {accessor: 'userRequest', Header: 'User Request'},
  {accessor: 'loc', Header: 'Loc'},
];

const ModuleTableDetail = ({row}) => {
  const module: Module = row._original;
  return (
    <Tabbed tabs={[
      {
        id: 'Reasons',
        render() {
          return (
            <ReactTable
              columns={moduleReasonTableColumns}
              data={module.reasons}
            />
          );
        },
      },
      {
        id: 'Raw Info',
        render() {
          return (<pre><code>{JSON.stringify(module, null, 2)}</code></pre>);
        },
      },
    ]}
    />
  );
};

const moduleTableColumns: Column[] = [
  {
    id: 'name',
    accessor: (m: Module) => sanitizeModuleName(m.name),
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
      columns={moduleTableColumns}
      data={modules}
      SubComponent={ModuleTableDetail}
    />
  );
};
