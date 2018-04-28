import * as React from 'react';
import ReactTable, {Column} from 'react-table';
import {Link} from 'react-router-dom';
import {AssetsColumn, ChunksColumn, SizeColumn} from '../../table-columns';
import {Asset} from '../../WebpackAnalysisTypes';
import {BooleanCell} from '../../table-cells';

const columns: Column[] = [
  {accessor: 'name', Header: 'Name'},
  SizeColumn,
  ChunksColumn,
  {accessor: 'emitted', Header: 'Emitted', Cell: BooleanCell},
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
