import * as cy from 'cytoscape';
// https://flatuicolors.com/palette/es
export default [
  {
    selector: 'node',
    style: {
      'content': 'data(label)',
      'text-valign': 'center',
      'text-halign': 'center',
    },
  },
  {
    selector: 'node.chunk',
    style: {
      'padding-top': '10px',
      'padding-left': '10px',
      'padding-bottom': '10px',
      'padding-right': '10px',
      'text-valign': 'top',
      'text-halign': 'center',
      'background-color': '#f7f1e3',
    },
  },
  {
    selector: 'node.module',
    style: {
      'background-color': '#ffda79',
      'border-color': '#cd6133',
      'border-width': 1,
      'shape': 'ellipse',
      'width': 'data(vsize)',
      'height': 'data(vsize)',
    },
  },
  {
    selector: 'edge',
    style: {
      'curve-style': 'bezier',
      'target-arrow-shape': 'triangle',
      'width': 1,
      'line-color': '#cd6133',
      'target-arrow-color': '#cd6133',
    },
  },
] as cy.StylesheetStyle[];
