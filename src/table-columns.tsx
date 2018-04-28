import * as routes from './routes';
import * as React from 'react';
import {Link} from 'react-router-dom';
import {Column} from 'react-table';
import {commonPrefix} from './utils';
import {IntegerCell} from './table-cells';

export const ChunkLink = ({name}: { name: string }) => (
  <Link to={routes.ChunkDetail.reverse({id: name})} className="chunk-link">{name}</Link>
);

export const AssetLink = ({name, displayName = name}: { name: string, displayName?: string }) => (
  <Link to={routes.AssetDetail.reverse({id: name})} className="asset-link">
    {displayName || name}
  </Link>
);

export const ChunksColumn: Column = {
  id: 'chunks',
  Header: 'Chunks',
  accessor: 'chunks',
  Cell: (row) => (row.value as string[]).map((chunkName) => (
    <ChunkLink name={chunkName} key={chunkName}/>
  )),
};

export const AssetsColumn: Column = {
  Header: 'Assets',
  accessor: 'assets',
  Cell: (r) => {
    const assetNames: string[] = r.value;
    const assetPfx = commonPrefix(assetNames);
    return assetNames.map((assetName) => (
      <AssetLink
        name={assetName}
        key={assetName}
        displayName={assetName.slice((assetPfx || '').length)}
      />
    ));
  },
};

export const SizeColumn: Column = {
  accessor: 'size',
  Header: 'Size',
  Cell: IntegerCell,
  style: {textAlign: 'right'},
  maxWidth: 100,
};
