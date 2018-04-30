import * as React from 'react';
import * as cy from 'cytoscape';
// import * as cycola from 'cytoscape-cola';
// import * as cydagre from 'cytoscape-dagre';
import * as cyklay from 'cytoscape-klay';

import ModuleRefsTable from '../../components/ModuleRefsTable';
import style from './style';
import {formatInteger} from '../../formatting';
import {generateElements} from './convert';
import {getModule} from '../../data-utils';
import {sanitizeModuleName} from '../../utils';
import {WebpackAnalysisData} from '../../WebpackAnalysisTypes';

// Register layouts with cytoscape
cyklay(cy);
// Other layouts temporarily disabled:
// cycola(cy);
// cydagre(cy);

type GraphViewProps = { data: WebpackAnalysisData };
type GraphViewState = { focus?: React.ReactElement<any> };


export default class GraphView extends React.Component<GraphViewProps, GraphViewState> {
  state = {
    focus: undefined,
  } as GraphViewState;

  private cy?: cy.Core;
  private container?: HTMLDivElement;

  componentDidMount() {
    this.initializeCy();
  }

  componentWillUnmount() {
    if (this.cy) {
      this.cy.destroy();
      this.cy = undefined;
    }
  }

  generateElements(): cytoscape.ElementsDefinition {
    return generateElements(this.props.data);
  }

  initializeCy = () => {
    if (this.container && !this.cy) {
      this.cy = cy({
        container: this.container,
        boxSelectionEnabled: false,
        autounselectify: true,
        style,
        elements: this.generateElements(),
        layout: {
          name: 'klay',
          klay: {
            layoutHierarchy: true,
            direction: 'DOWN',
          },
        } as any,
      });
      this.cy.on('mouseover', 'node.module', (event) => {
        const moduleId = event.target[0].data('moduleId');
        this.focusOnModule(`${moduleId}`);
      });
    }
  }


  focusOnModule(moduleIdString: string): void {
    const data = this.props.data;
    const moduleId = parseInt(moduleIdString, 10);
    const module = getModule(data, moduleId);
    if (!module) {
      this.setState({focus: undefined});
      return;
    }
    const focus = (
      <div>
        <h3 className="title">{sanitizeModuleName(module.name)}</h3>
        Size: {formatInteger(module.size)}
        <ModuleRefsTable data={data} moduleId={moduleId}/>
      </div>
    );
    this.setState({focus});
  }

  render() {
    const {focus} = this.state;

    return (
      <div>
        <div className="columns">
          <div className="column is-two-thirds">
            <div
              ref={(container) => {
                this.container = container!;
                this.initializeCy();
              }}
              id="graph-container"
            />
          </div>
          <div className="column">
            {focus}
          </div>
        </div>

      </div>
    );
  }
}
