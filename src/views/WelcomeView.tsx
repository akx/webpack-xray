import * as React from 'react';
import {Link} from 'react-router-dom';
import {omit} from 'lodash';
import {WebpackAnalysisData} from '../WebpackAnalysisTypes';

export default class WelcomeView extends React.Component<{
  onLoadFile: (data: WebpackAnalysisData) => void,
  onRequestExample: () => void,
}, any> {
  loadFile = (file: File) => {
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

  render() {
    return (
      <>
        <section className="section">
          <div className="container">
            <h1 className="title is-1">
              Welcome to webpack-xray!
            </h1>
            <p>
              To get started, you'll need a Webpack JSON file.
              If you're using vanilla Webpack, you can generate one
              by adding the <code>--json</code> flag (and optionally the <code>--profile</code> flag,
              for additional timing information) to your Webpack command line and directing the output to a file.
              <pre><code>$ webpack --mode=production --json --profile > stats.json</code></pre>
              For other build systems and Webpack wrappers, please consult their documentation.
            </p>
            <p>
              Once you have a Webpack JSON file, choose it below.
              {' '}<b>The file will not be uploaded anywhere. It will just be analyzed on your machine.</b>
            </p>
            <div
              className="file is-primary is-large is-boxed"
              onChange={(e) => this.loadFile((e.target as HTMLInputElement).files![0])}
              style={{justifyContent: 'center', padding: '2em'}}
            >
              <label className="file-label">
                <input className="file-input" type="file" name="resume"/>
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
              <a
                className="button is-medium"
                onClick={() => this.props.onRequestExample()}
                style={{margin: 'auto', marginTop: '1em'}}
              >Load Example</a>
            </div>

          </div>
        </section>
      </>
    );
  }
}
