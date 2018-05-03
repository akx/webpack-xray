import * as React from 'react';
import {Link} from 'react-router-dom';
import * as routes from '../routes';
import {WebpackAnalysisData} from '../WebpackAnalysisTypes';
import {formatInteger} from '../formatting';

function nl2br(s: string): React.ReactElement<any> {
  const bits: any[] = [];
  s.split('\n').forEach((line, index) => {
    bits.push(line);
    bits.push(<br key={index}/>);
  });
  bits.pop();
  return (<React.Fragment>{bits}</React.Fragment>);
}

const WarningsAndErrorsSection = ({data}: { data: WebpackAnalysisData }) => {
  if (!(data.warnings.length || data.errors.length)) {
    return null;
  }
  return (
    <section className="section">
      <div className="container">
        <h2 className="title">Warnings and Errors</h2>
        {data.warnings.map((warning, i) => (
          <div className="notification is-warning" key={i}>
            {nl2br(warning)}
          </div>
        ))}
        {data.errors.map((error, i) => (
          <div className="notification error" key={i}>
            {nl2br(error)}
          </div>
        ))}
      </div>
    </section>
  );
};

const StatsParagraphs = ({data}) => {
  const nEntrypoints = (data.entrypoints ? Object.keys(data.entrypoints).length : 0);
  return (
    <>
      <p>
        Looks like today we're analyzing a <b>Webpack {data.version}</b> bundle built
        in <b>{(data.time / 1000).toLocaleString()} seconds</b>{' '}
        at <b>{(data.builtAt ? new Date(data.builtAt).toLocaleString() : 'a strange time')}</b>.
      </p>
      <p>
        The compilation packed
        {' '}<Link to={routes.ModuleList.path}><b>{formatInteger(data.modules.length)} modules</b></Link>
        {' '}into <Link to={routes.ChunkList.path}><b>{formatInteger(data.chunks.length)} chunks</b></Link>
        {' '}which map to <Link to={routes.EntrypointList.path}><b>{formatInteger(nEntrypoints)} entrypoints</b></Link>.
        A total of <Link to={routes.AssetList.path}><b>{formatInteger(data.assets.length)} assets</b></Link> were
        emitted.
      </p>
    </>
  );
};

export default class HomeView extends React.Component<{
  data: WebpackAnalysisData,
  onAnalyzeOther: () => void,
},
  any> {
  render() {
    const {data} = this.props;
    return (
      <>
        <section className="section">
          <div className="container">
            <h1 className="title is-1">
              Hi there!
            </h1>
            <StatsParagraphs data={data}/>
          </div>
        </section>
        <WarningsAndErrorsSection data={data}/>
        <section className="section">
          <div className="container">
            <a href="#" onClick={() => this.props.onAnalyzeOther()}>Analyze another file...</a>
          </div>
        </section>
      </>
    );
  }
}
