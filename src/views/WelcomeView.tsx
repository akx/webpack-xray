import * as React from 'react';
import {Link} from 'react-router-dom';
import {WebpackAnalysisData} from '../WebpackAnalysisTypes';

interface WelcomeViewProps {
  onLoadFile: (data: WebpackAnalysisData) => void,
  onRequestExample: (url: string) => void,
}

interface WelcomeViewState {
  isDropping: boolean;
}

export default class WelcomeView extends React.Component<WelcomeViewProps, WelcomeViewState> {
  public state: WelcomeViewState = {
    isDropping: false,
  };

  public render() {
    return this.renderInner();
  }

  private loadFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      let data;
      try {
        data = JSON.parse(reader.result);
      } catch (e) {
        alert(`Could not parse the file as JSON:\n${e}`);
        return;
      }
      if (!data.version) {
        alert('This data does not look like Webpack JSON (missing the version key)');
        return;
      }
      this.props.onLoadFile(data);
    };
    reader.readAsText(file);
  }

  private renderInner() {
    return (
      <>
        <section className={`WelcomeView-inner section ${this.state.isDropping ? 'dropping' : ''}`}>
          <div className="container">
            <h1 className="title is-1">
              Welcome to webpack-xray!
            </h1>
            <p>
              To get started, you'll need a Webpack JSON file.
              If you're using vanilla Webpack, you can generate one
              by adding the <code>--json</code> flag (and optionally the <code>--profile</code> flag,
              for additional timing information) to your Webpack command line and directing the output to a file.
              <br/>
              <b>Webpack 3:</b> <code>$ webpack -p --stats --profile > stats.json</code><br/>
              <b>Webpack 4:</b> <code>$ webpack --mode=production --json --profile > stats.json</code><br/>
              For other build systems and Webpack wrappers, please consult their documentation.
            </p>
            <p>
              Once you have a Webpack JSON file, choose it below (or drag it onto the button).
              {' '}<b>The file will not be uploaded anywhere. It will just be analyzed on your machine.</b>
            </p>
            <div
              className="file is-primary is-large is-boxed"
              style={{justifyContent: 'center', padding: '2em'}}
            >
              <label className="file-label">
                <input
                  className="file-input"
                  type="file"
                  onChange={(e) => this.loadFile((e.target as HTMLInputElement).files![0])}
                />
                <span className="file-cta">
                  <span className="file-label">
                    Choose a Webpack JSON file…
                  </span>
                </span>
              </label>
            </div>
            <div className="has-text-centered">
              <p>
                Alternatively, if you don't have a Webpack JSON file lying around and want to just kick the tires,
                you can load an example file.
              </p>
              <div style={{margin: 'auto', marginTop: '1em'}}>
                <a
                  className="button is-medium"
                  onClick={() => this.props.onRequestExample('./example-data/example-webpack3.json')}
                >
                  Load Webpack 3 Example
                </a>
                &nbsp;
                <a
                  className="button is-medium"
                  onClick={() => this.props.onRequestExample('./example-data/example-webpack4.json')}
                >
                  Load Webpack 4 Example
                </a>
              </div>
            </div>

          </div>
        </section>
      </>
    );
  }
}
