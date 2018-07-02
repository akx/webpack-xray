import * as React from 'react';
import {Link} from 'react-router-dom';

import {Module, WebpackAnalysisData} from '../../WebpackAnalysisTypes';
import Tabbed, {TabInfo} from '../../components/Tabbed';
import ModuleRefsTable from '../../components/ModuleRefsTable';
import ModuleReasonsTable from '../../components/ModuleReasonsTable';
import {formatInteger} from '../../formatting';
import {ChunkLinks, ModuleLink} from '../../components/links';
import {getModule} from '../../data-utils';
import {ModuleTable} from '../../components/ModuleTable';

// TODO: Flesh me out

interface ModuleDetailViewProps {
  data: WebpackAnalysisData;
  module: Module;
}

const ModuleInfo = ({data, module}: ModuleDetailViewProps) => (
  <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
    <tbody>
    <tr>
      <th>Size</th>
      <td className="has-text-right">{formatInteger(module.size)} b</td>
    </tr>
    <tr>
      <th>Chunks</th>
      <td><ChunkLinks chunks={module.chunks}/></td>
    </tr>
    <tr>
      <th>Issuer</th>
      <td>{module.issuerId !== null ? <ModuleLink module={getModule(data, module.issuerId)}/> : 'none'}</td>
    </tr>
    </tbody>
  </table>
);

export default class ModuleDetailView extends React.Component<ModuleDetailViewProps, {}> {
  render() {
    const {data, module} = this.props;
    if (!module) {
      return (
        <div className="notification is-warning">
          The module was not found.
        </div>
      );
    }
    const tabs: TabInfo[] = [
      {
        id: 'Info',
        render() {
          return <ModuleInfo module={module} data={data}/>;
        },
      },
      {
        id: 'Submodules',
        hidden: !data.modules,
        render() {
          return <ModuleTable modules={data.modules}/>;
        },
      },
      {
        id: 'Refs',
        render() {
          return <ModuleRefsTable data={data} moduleId={module.id}/>;
        },
      },
      {
        id: 'Reason Detail',
        render() {
          return <ModuleReasonsTable module={module}/>;
        },
      },
      {
        id: 'Raw Info',
        render() {
          return (<pre><code>{JSON.stringify(module, null, 2)}</code></pre>);
        },
      },
    ];

    return (
      <div className="container is-view">
        <h1 className="title">
          Module <b>{module.id}</b>
        </h1>
        <Tabbed tabs={tabs}/>
      </div>
    );
  }
}
