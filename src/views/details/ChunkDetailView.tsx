import * as React from 'react';
import {Link} from 'react-router-dom';

import {Chunk, Origin} from '../../WebpackAnalysisTypes';
import Tabbed, {TabInfo} from '../../components/Tabbed';
import ReactTable, {Column} from 'react-table';
import {ModuleTable} from '../../components/ModuleTable';
import {omit} from '../../utils';

const originTableColumns: Column[] = [
  {accessor: 'module', Header: 'Module'},
  {accessor: 'loc', Header: 'Location'},
  {accessor: 'request', Header: 'Request'},
  {accessor: 'reasons', Header: 'Reasons', Cell: (r) => r.value.join(', ')},
  {accessor: 'moduleId', Header: 'Module ID'},
];

const ChunkOriginsTable = ({origins}: { origins: Origin[] }) => {
  return <ReactTable columns={originTableColumns} data={origins}/>;
};

export default class ChunkDetailView extends React.Component<{
  chunk: Chunk,
},
  any> {
  render() {
    const {chunk} = this.props;
    if (!chunk) {
      return (
        <div className="notification is-warning">
          The chunk was not found.
        </div>
      );
    }

    const tabs: TabInfo[] = [
      {
        id: 'Modules',
        render() {
          return <ModuleTable modules={chunk.modules}/>;
        },
      },
      {
        id: 'Origins',
        render() {
          return <ChunkOriginsTable origins={chunk.origins}/>;
        },
      },
      {
        id: 'Raw Info',
        render() {
          return (<pre><code>{JSON.stringify(omit(chunk, ['modules', 'origins']), null, 2)}</code></pre>);
        },
      },
    ];

    return (
      <div className="container is-view">
        <h1 className="title">
          Chunk <b>{chunk.id}</b> ({chunk.names.join(', ')})
        </h1>
        <Tabbed tabs={tabs}/>
      </div>
    );
  }
}
