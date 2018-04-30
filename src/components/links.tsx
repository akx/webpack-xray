import * as React from 'react';
import {Link} from 'react-router-dom';

import * as routes from '../routes';
import {Module} from '../WebpackAnalysisTypes';
import {sanitizeModuleName} from '../utils';

export const ChunkLink = ({name}: { name: string }) => (
  <Link to={routes.ChunkDetail.reverse({id: name})} className="chunk-link">{name}</Link>
);
export const AssetLink = ({name, displayName = name}: { name: string, displayName?: string }) => (
  <Link to={routes.AssetDetail.reverse({id: name})} className="asset-link">
    {displayName || name}
  </Link>
);

export const ModuleLink = ({module}: { module: Module }) => (
  <Link
    to={routes.ModuleDetail.reverse({id: module.id})}
    className="module-link"
  >
    {sanitizeModuleName(module.name)}
  </Link>
);
