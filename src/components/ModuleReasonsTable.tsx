import * as React from 'react';

import {Module} from '../WebpackAnalysisTypes';
import ReactTable, {Column} from 'react-table';

const moduleReasonTableColumns: Column[] = [
  {accessor: 'type', Header: 'Type'},
  {accessor: 'module', Header: 'Module'},
  {accessor: 'userRequest', Header: 'User Request'},
  {accessor: 'loc', Header: 'Loc'},
];
export default ({module}: { module: Module }) => (
  <ReactTable
    columns={moduleReasonTableColumns}
    data={module.reasons}
  />
);
