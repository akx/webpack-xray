import * as React from 'react';
import ReactTable, {Column} from 'react-table';
import {Link} from 'react-router-dom';
import {Entrypoint, EntrypointMap} from '../../WebpackAnalysisTypes';
import {AssetsColumn, ChunksColumn} from '../../table-columns';

const columns: Column[] = [
  {accessor: 'id', Header: 'Identifier'},
  ChunksColumn,
  AssetsColumn,
];

export default class EntrypointListView extends React.Component<{
  entrypointMap: EntrypointMap;
},
  any> {
  render() {
    const rows: Entrypoint[] = Object.entries(this.props.entrypointMap)
      .map(([id, entrypoint]) => ({id, ...entrypoint}));

    return (
      <div className="container is-view">
        <h1 className="title">
          Entrypoints
        </h1>
        <ReactTable columns={columns} data={rows}/>
      </div>
    );
  }
}
