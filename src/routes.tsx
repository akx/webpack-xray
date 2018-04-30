import * as React from 'react';
import HigherRouter from './higher-router';
import {getModule} from './data-utils';
import {ModuleId} from './WebpackAnalysisTypes';

import AssetDetailView from './views/details/AssetDetailView';
import AssetListView from './views/lists/AssetListView';
import ChunkDetailView from './views/details/ChunkDetailView';
import ChunkListView from './views/lists/ChunkListView';
import EntrypointListView from './views/lists/EntrypointListView';
import GraphView from './views/GraphView';
import HomeView from './views/HomeView';
import ModuleDetailView from './views/details/ModuleDetailView';
import ModuleListView from './views/lists/ModuleListView';

export const router = new HigherRouter();

export const AssetDetail = router.route<{ id: string }>({
  path: '/asset/:id',
  render: ({data, match: {params}}) => (
    <AssetDetailView
      asset={data.assets.find((asset) => `${asset.name}` === params.id)!}
    />
  ),
});

export const AssetList = router.route<never>({
  path: '/assets',
  render: ({data}) => <AssetListView assetList={data.assets}/>,
});

export const ChunkDetail = router.route<{ id: string }>({
  path: '/chunk/:id',
  render: ({data, match: {params}}) => (
    <ChunkDetailView
      chunk={data.chunks.find((c) => `${c.id}` === params.id)!}
    />
  ),
});

export const ChunkList = router.route<never>({
  path: '/chunks',
  render: ({data}) => <ChunkListView chunkList={data.chunks}/>,
});

export const EntrypointList = router.route<never>({
  path: '/entrypoints',
  render: ({data}) => <EntrypointListView entrypointMap={data.entrypoints}/>,
});

export const Home = router.route<never>({
  path: '/',
  exact: true,
  render: ({data, onAnalyzeOther}) => <HomeView data={data} onAnalyzeOther={onAnalyzeOther}/>,
});

export const ModuleDetail = router.route<{ id: ModuleId }>({
  path: '/module/:id',
  render: ({data, match: {params}}) => (<ModuleDetailView data={data} module={getModule(data, params.id)} />),
});

export const ModuleList = router.route<never>({
  path: '/modules',
  render: ({data}) => <ModuleListView moduleList={data.modules}/>,
});

export const Graph = router.route<never>({
  path: '/graph',
  render: ({data}) => <GraphView data={data}/>,
});
