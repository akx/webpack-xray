import * as React from 'react';
import {Link} from 'react-router-dom';

import {Module} from '../../WebpackAnalysisTypes';
import {ModuleTable} from '../../components/ModuleTable';

export default class ModuleListView extends React.Component<{
  moduleList: Module[],
},
  any> {
  render() {
    return (
      <div className="container is-view">
        <h1 className="title">
          Modules
        </h1>
        <ModuleTable modules={this.props.moduleList}/>
      </div>
    );
  }
}
