import * as React from 'react';
import {WebpackAnalysisData} from './WebpackAnalysisTypes';
import {HashRouter as Router, Link, NavLink} from 'react-router-dom';
import * as routes from './routes';
import {router} from './routes';
import {Switch} from 'react-router';
import WelcomeView from './views/WelcomeView';

interface AppState {
  data?: WebpackAnalysisData;
  loadingExampleData: boolean,
}

const EXAMPLE_DATA_URL = (process.env.EXAMPLE_DATA_URL || '/example-data.json');
const LOAD_EXAMPLE_DATA_INITIALLY = (process.env.NODE_ENV !== 'production');

export default class App extends React.Component<any, AppState> {
  state: AppState = {
    data: undefined,
    loadingExampleData: false,
  };

  componentDidMount() {
    if (LOAD_EXAMPLE_DATA_INITIALLY) {
      this.loadExampleData();
    }
  }

  loadExampleData() {
    this.setState({loadingExampleData: true});
    fetch(EXAMPLE_DATA_URL)
      .then((resp) => resp.json())
      .then((data: WebpackAnalysisData) => {
        this.setState({loadingExampleData: false, data});
      })
      .catch((error) => {
        alert(`Could not load example data: ${error}`);
        this.setState({loadingExampleData: false, data: undefined});
      });
  }

  render() {
    const {data, loadingExampleData} = this.state;
    if (loadingExampleData) {
      return <>Loading example data...</>;
    }
    if (!data) {
      return (
        <WelcomeView
          onLoadFile={(newData) => this.setState({data: newData})}
          onRequestExample={() => this.loadExampleData()}
        />
      );
    }
    return (
      <Router>
        <div>
          <div className="navbar is-dark">
            <div className="navbar-start">
              <NavLink exact to={routes.Home.path} className="navbar-item" activeClassName="is-active">
                Home
              </NavLink>
              <NavLink to={routes.AssetList.path} className="navbar-item" activeClassName="is-active">
                Assets
              </NavLink>
              <NavLink to={routes.ChunkList.path} className="navbar-item" activeClassName="is-active">
                Chunks
              </NavLink>
              <NavLink to={routes.EntrypointList.path} className="navbar-item" activeClassName="is-active">
                Entrypoints
              </NavLink>
              <NavLink to={routes.ModuleList.path} className="navbar-item" activeClassName="is-active">
                Modules
              </NavLink>
            </div>
          </div>
          <Switch>
            {router.getReactRoutesList({data})}
          </Switch>
        </div>
      </Router>
    );
  }
}
