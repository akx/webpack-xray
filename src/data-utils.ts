import {Module, ModuleId, WebpackAnalysisData} from './WebpackAnalysisTypes';
import {uniq} from './utils';

export function getModuleRefs(data: WebpackAnalysisData, moduleId: ModuleId, unique: boolean = false): {
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
  return {
    referrers: (unique ? uniq(referrers) : referrers),
    referrents: (unique ? uniq(referrents) : referrents),
  };
}

export function getModule(data: WebpackAnalysisData, moduleId: ModuleId | string): Module {
  if (typeof moduleId === 'string' && /^\d+$/.test(moduleId)) {
    moduleId = parseInt(moduleId, 10);
  } else if (typeof moduleId === 'string') {
    moduleId = decodeURIComponent(moduleId);
  }
  const module = data.modules.find((m) => m.id === moduleId);
  if (module === undefined) {
    throw new Error(`module ${moduleId} not found`);
  }
  return module;
}
