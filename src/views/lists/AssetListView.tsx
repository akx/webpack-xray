import * as React from 'react';
import ReactTable, {Column} from 'react-table';
import {Link} from 'react-router-dom';
import {ChunksColumn, SizeColumn} from '../../table-columns';
import {Asset} from '../../WebpackAnalysisTypes';
import {BooleanCell} from '../../table-cells';
import {AssetLink} from '../../components/links';

const columns: Column[] = [
  {
    accessor: 'name',
    Header: 'Name',
    Cell: (d) => (<AssetLink name={d.value} />),
  },
  SizeColumn,
  ChunksColumn,
  {accessor: 'emitted', Header: 'Emitted', Cell: BooleanCell},
  {accessor: 'isOverSizeLimit', Header: 'Over Size Limit?', Cell: BooleanCell},
];

export default class AssetListView extends React.Component<{
  assetList: Asset[];
},
  any> {
  render() {
    return (
      <div className="container is-view">
        <h1 className="title">
          Assets
        </h1>
        <ReactTable columns={columns} data={this.props.assetList}/>
      </div>
    );
  }
}
