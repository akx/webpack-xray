import * as React from 'react';
import {Link, NavLink} from 'react-router-dom';
import * as routes from '../routes';

// tslint:disable-next-line
const LogoSVG = require('../../design/icon-only.svg');

export const NavBar = () => (
  <div className="navbar is-dark">
    <div className="navbar-brand">
      <Link to={routes.Home.path} className="navbar-item">
        <img src={LogoSVG} width="32" />
      </Link>
    </div>
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
      <NavLink to={routes.Graph.path} className="navbar-item" activeClassName="is-active">
        Graph
      </NavLink>
    </div>
  </div>
);
