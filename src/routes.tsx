import * as React from 'react';
import HigherRouter from './higher-router';
import {getModule} from './data-utils';
import {ModuleId, WebpackAnalysisData} from './WebpackAnalysisTypes';

import AssetDetailView from './views/details/AssetDetailView';
import AssetListView from './views/lists/AssetListView';
import ChunkDetailView from './views/details/ChunkDetailView';
import ChunkListView from './views/lists/ChunkListView';
import EntrypointListView from './views/lists/EntrypointListView';
import GraphView from './views/GraphView';
import HomeView from './views/HomeView';
import ModuleDetailView from './views/details/ModuleDetailView';
import ModuleListView from './views/lists/ModuleListView';

interface RouterProps {
  data: WebpackAnalysisData;
  onAnalyzeOther: any;
  match: {
    params: { [key: string]: string },
  };
}

export const router = new HigherRouter();

export const AssetDetail = router.route<{ id: string }>({
  path: '/asset/:id',
  render: ({data, match: {params}}: RouterProps) => (
    <AssetDetailView
      asset={data.assets.find((asset) => `${asset.name}` === params.id)!}
    />
  ),
});

export const AssetList = router.route<never>({
  path: '/assets',
  render: ({data}: RouterProps) => <AssetListView assetList={data.assets}/>,
});

export const ChunkDetail = router.route<{ id: string }>({
  path: '/chunk/:id',
  render: ({data, match: {params}}: RouterProps) => (
    <ChunkDetailView
      chunk={data.chunks.find((c) => `${c.id}` === params.id)!}
    />
  ),
});

export const ChunkList = router.route<never>({
  path: '/chunks',
  render: ({data}: RouterProps) => <ChunkListView chunkList={data.chunks}/>,
});

export const EntrypointList = router.route<never>({
  path: '/entrypoints',
  render: ({data}: RouterProps) => <EntrypointListView entrypointMap={data.entrypoints ? data.entrypoints : {}}/>,
});

export const Home = router.route<never>({
  path: '/',
  exact: true,
  render: ({data, onAnalyzeOther}: RouterProps) => <HomeView data={data} onAnalyzeOther={onAnalyzeOther}/>,
});

export const ModuleDetail = router.route<{ id: ModuleId }>({
  path: '/module/:id',
  render: ({data, match: {params}}: RouterProps) => (
    <ModuleDetailView data={data} module={getModule(data, params.id)} />
  ),
});

export const ModuleList = router.route<never>({
  path: '/modules',
  render: ({data}: RouterProps) => <ModuleListView moduleList={data.modules}/>,
});

export const Graph = router.route<never>({
  path: '/graph',
  render: ({data}: RouterProps) => <GraphView data={data}/>,
});
