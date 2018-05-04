import {WebpackAnalysisData} from '../../WebpackAnalysisTypes';
import * as cy from 'cytoscape';
import {sanitizeModuleName} from '../../utils';

interface ExtraNodeDataDefinition extends cy.NodeDataDefinition {
  [key: string]: any;
}

export function generateElements(data: WebpackAnalysisData): cy.ElementsDefinition {
  const nodes: cy.NodeDefinition[] = [];
  const edges: cy.EdgeDefinition[] = [];
  const createdEdgesSet = new Set();
  data.chunks.forEach((chunk) => {
    const chunkNodeId = `chunk_${chunk.id}`;
    if (chunk.modules.length) {
      nodes.push({
        data: {
          id: chunkNodeId,
          label: chunk.names.join(', '),
        } as ExtraNodeDataDefinition,
        classes: 'chunk',
      });
    }
    chunk.modules.forEach((module) => {
      const moduleNodeId = `module_${module.id}`;
      nodes.push({
        data: {
          id: moduleNodeId,
          moduleId: module.id,
          label: `${sanitizeModuleName(module.id.toString())}`,
          parent: chunkNodeId,
          size: module.size,
          vsize: 10 + Math.sqrt(module.size),
        } as ExtraNodeDataDefinition,
        classes: 'module',
      });
      module.reasons.forEach((reason) => {
        if (reason.moduleId === null) {
          console.warn('Reason has no moduleID', reason);
          return;
        }
        const sourceModuleNodeId = `module_${reason.moduleId}`;
        const edgeId = `${sourceModuleNodeId}_to_${moduleNodeId}`;
        if (createdEdgesSet.has(edgeId)) {
          return;
        }
        createdEdgesSet.add(edgeId);
        edges.push({
          data: {
            id: edgeId,
            source: sourceModuleNodeId,
            target: moduleNodeId,
          },
        });
      });
    });
  });

  return {edges, nodes};
};
