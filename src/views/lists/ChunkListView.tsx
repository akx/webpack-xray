import * as React from 'react';
import ReactTable, {Column} from 'react-table';
import {Link} from 'react-router-dom';
import {Chunk} from '../../WebpackAnalysisTypes';
import {SizeColumn} from '../../table-columns';
import {BooleanCell, IntegerCell} from '../../table-cells';
import {ChunkLink} from '../../components/links';

const columns: Column[] = [
  {accessor: 'id', Header: 'ID', Cell: (r) => <ChunkLink name={r.value}/>},
  {accessor: 'names', Header: 'Names', Cell: (r) => r.value.join(', ')},
  SizeColumn,
  {accessor: 'entry', Header: 'Entry?', Cell: BooleanCell},
  {accessor: 'initial', Header: 'Initial?', Cell: BooleanCell},
  {
    id: 'nOrigins',
    accessor: (c: Chunk) => c.origins.length,
    Header: '#Origins',
    Cell: IntegerCell,
    style: {textAlign: 'right'},
  },
  {
    id: 'nModules',
    accessor: (c: Chunk) => c.modules.length,
    Header: '#Modules',
    Cell: IntegerCell,
    style: {textAlign: 'right'},
  },
];

export default class ChunkListView extends React.Component<{
  chunkList: Chunk[];
},
  any> {
  render() {
    return (
      <div className="container is-view">
        <h1 className="title">
          Chunks
        </h1>
        <ReactTable columns={columns} data={this.props.chunkList}/>
      </div>
    );
  }
}
