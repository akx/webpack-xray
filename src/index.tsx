import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './App';

import 'react-table/react-table.css';
import './style.scss';

const wrapper = document.createElement('div');
wrapper.id = 'wrapper';
document.body.appendChild(wrapper);

ReactDOM.render(<App/>, wrapper);
