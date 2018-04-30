import * as React from 'react';
import {Link} from 'react-router-dom';

import {Module, WebpackAnalysisData} from '../../WebpackAnalysisTypes';
import Tabbed, {TabInfo} from '../../components/Tabbed';
import ModuleRefsTable from '../../components/ModuleRefsTable';
import ModuleReasonsTable from '../../components/ModuleReasonsTable';
import {formatInteger} from '../../formatting';
import {ChunkLinks, ModuleLink} from '../../components/links';
import {getModule} from '../../data-utils';

// TODO: Flesh me out

export default class ModuleDetailView extends React.Component<{
  data: WebpackAnalysisData,
  module: Module,
},
  any> {
  render() {
    const {data, module} = this.props;
    const tabs: TabInfo[] = [
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
        <div className="columns">
          <div className="column">
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
          </div>
          <div className="column is-two-thirds">
            <Tabbed tabs={tabs}/>
          </div>
        </div>
      </div>
    );
  }
}
