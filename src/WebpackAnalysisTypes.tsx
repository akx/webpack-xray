export interface EntrypointMap {
  [key: string]: Entrypoint;
}

export interface AssetsByChunkNameMap {
  [key: string]: string;
}

export interface ChildMap {
  [key: string]: string;
}

export type ChunkId = number | string;
export type ModuleId = number;

export interface WebpackAnalysisData {
  assets: Asset[];
  assetsByChunkName: AssetsByChunkNameMap;
  builtAt: number;
  children: any[];
  chunks: Chunk[];
  entrypoints?: EntrypointMap;
  errors: string[];
  filteredAssets: number;
  filteredModules: number;
  hash: string;
  modules: Module[];
  outputPath: string;
  publicPath: string;
  time: number;
  version: string;
  warnings: string[];
}

export interface Asset {
  chunkNames: string[];
  chunks: ChunkId[];
  emitted: boolean;
  isOverSizeLimit?: boolean;
  name: string;
  size: number;
}

export interface Chunk {
  children: number[];
  childrenByOrder: ChildMap;
  entry: boolean;
  files: string[];
  filteredModules: number;
  hash: string;
  id: ChunkId;
  initial: boolean;
  modules: Module[];
  names: string[];
  origins: Origin[];
  parents: string[];
  reason?: string;
  rendered: boolean;
  siblings: ChunkId[];
  size: number;
}

export interface Profile {
  factory: number;
  building: number;
  dependencies?: number;
}

export interface Module {
  assets: any[];
  built: boolean;
  cacheable?: boolean;
  chunks: ChunkId[];
  depth: number;
  errors: number;
  failed: boolean;
  filteredModules?: number;
  id: ModuleId;
  identifier: string;
  index2: number;
  index: number;
  issuer: null | string;
  issuerId: null | number;
  issuerName: null | string;
  issuerPath: IssuerModule[] | null;
  modules?: Module[];
  name: string;
  optimizationBailout: string[];
  optional: boolean;
  prefetched: boolean;
  profile?: Profile;
  providedExports: string[] | null;
  reasons: ModuleReason[];
  size: number;
  source?: string;
  usedExports: string[] | boolean;
  warnings: number;
}

export interface IssuerModule {
  id: string;
  identifier: string;
  name: string;
  profile?: Profile;
}

export interface ModuleReason {
  loc: string;
  module: null | string;
  moduleId: ModuleId;
  moduleIdentifier: null | string;
  moduleName: null | string;
  type: string;
  userRequest: string;
}

export interface Origin {
  module: string;
  moduleIdentifier: string;
  moduleName: string;
  loc: string;
  request: string;
  reasons: any[];
  moduleId?: string;
}

export interface Entrypoint {
  id?: string;  // Added by code in xray
  chunks: ChunkId[];
  assets: string[];
  children: ChildMap;
  childAssets: ChildMap;
  isOverSizeLimit?: boolean;
}
