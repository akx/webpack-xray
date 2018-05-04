import * as React from 'react';
import {WebpackAnalysisData} from './WebpackAnalysisTypes';
import {HashRouter as Router, Link, NavLink} from 'react-router-dom';
import {router} from './routes';
import {Switch} from 'react-router';
import WelcomeView from './views/WelcomeView';
import {NavBar} from './components/NavBar';

interface AppState {
  data?: WebpackAnalysisData;
  loadingExampleData: boolean;
}

const EXAMPLE_DATA_URL = (process.env.EXAMPLE_DATA_URL || './static/example-data/example-webpack3.json');
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
          <NavBar/>
          <Switch>
            {router.getReactRoutesList({
              data,
              onAnalyzeOther: () => this.setState({data: undefined}),
            })}
          </Switch>
        </div>
      </Router>
    );
  }
}
