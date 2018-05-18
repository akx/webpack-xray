import {Module, ModuleId, WebpackAnalysisData} from './WebpackAnalysisTypes';

export function getModuleRefs(data: WebpackAnalysisData, moduleId: ModuleId): {
  referrers: Module[],
  referrents: Module[],
} {
  const module = getModule(data, moduleId);
  const referrents = data.modules.filter(
    (destM) => destM.reasons.some((r) => r.moduleId === moduleId),
  );
  const referrers = module.reasons
    .filter((r) => r.moduleId)
    .map((r) => getModule(data, r.moduleId));
  return {referrents, referrers};
}

export function getModule(data: WebpackAnalysisData, moduleId: ModuleId | string): Module {
  if (typeof moduleId === 'string') {
    moduleId = parseInt(moduleId, 10);
  }
  const module = data.modules.find((m) => m.id === moduleId);
  if (module === undefined) {
    throw new Error(`module ${moduleId} not found`);
  }
  return module;
}
