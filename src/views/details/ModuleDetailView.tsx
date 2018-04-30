import * as React from 'react';
import {Link} from 'react-router-dom';
import omit from 'lodash/omit';

import {Module, WebpackAnalysisData} from '../../WebpackAnalysisTypes';
import Tabbed, {TabInfo} from '../../components/Tabbed';
import {ModuleRefsTable} from '../../components/ModuleRefsTable';

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
        id: 'Raw Info',
        render() {
          return (<pre><code>{JSON.stringify(omit(module), null, 2)}</code></pre>);
        },
      },
      {
        id: 'Refs',
        render() {
          return <ModuleRefsTable data={data} moduleId={module.id}/>;
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
