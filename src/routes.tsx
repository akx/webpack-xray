import * as React from 'react';

import ChunkDetailView from './views/details/ChunkDetailView';
import ModuleListView from './views/lists/ModuleListView';
import HomeView from './views/HomeView';
import ChunkListView from './views/lists/ChunkListView';
import AssetListView from './views/lists/AssetListView';
import EntrypointListView from './views/lists/EntrypointListView';
import HigherRouter from './higher-router';
import AssetDetailView from './views/details/AssetDetailView';

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

export const ModuleList = router.route<never>({
  path: '/modules',
  render: ({data}) => <ModuleListView moduleList={data.modules}/>,
});
