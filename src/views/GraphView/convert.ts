import {WebpackAnalysisData} from '../../WebpackAnalysisTypes';
import * as cy from 'cytoscape';

interface ExtraNodeDataDefinition extends cy.NodeDataDefinition {
  [key: string]: any;
}

export function generateElements(data: WebpackAnalysisData): cy.ElementsDefinition {
  const nodes: cy.NodeDefinition[] = [];
  const edges: cy.EdgeDefinition[] = [];
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
          label: `${module.id}`,
          parent: chunkNodeId,
          size: module.size,
          vsize: 10 + Math.sqrt(module.size),
        } as ExtraNodeDataDefinition,
        classes: 'module',
      });
      module.reasons.forEach((reason) => {
        const sourceModuleNodeId = `module_${reason.moduleId}`;
        edges.push({
          data: {
            source: sourceModuleNodeId,
            target: moduleNodeId,
          },
        });
      });
    });
  });

  return {edges, nodes};
};
