import * as React from 'react';
import {Link} from 'react-router-dom';
import {omit} from 'lodash';

import {Asset} from '../../WebpackAnalysisTypes';
import Tabbed, {TabInfo} from '../../components/Tabbed';
import {ChunkLink} from '../../components/links';

export default class AssetDetailView extends React.Component<{
  asset: Asset,
},
  any> {
  render() {
    const {asset} = this.props;
    if (!asset) {
      return <div>Oopsy woopsy</div>;
    }

    const tabs: TabInfo[] = [
      {
        id: 'Raw Info',
        render() {
          return (<pre><code>{JSON.stringify(omit(asset, []), null, 2)}</code></pre>);
        },
      },
    ];

    return (
      <div className="container is-view">
        <h1 className="title">
          Asset <b>{asset.name}</b>
        </h1>
        <div className="columns">
          <div className="column">
            <h2 className="title">Chunks</h2>
            <ul>
              {asset.chunks.map(String).map((chunkId) => <ChunkLink name={chunkId} key={chunkId}/>)}
            </ul>
          </div>
          <div className="column">
            <Tabbed tabs={tabs}/>
          </div>
        </div>

      </div>
    );
  }
}
