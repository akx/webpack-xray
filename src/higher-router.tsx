/**
 * Simple abstraction over regular react-router to allow
 * declarative, named, typed, reversable routes.
 */
import * as React from 'react';
import {parse, tokensToFunction} from 'path-to-regexp';
import {Route as ReactRoute} from 'react-router';

type AnyReactElement = React.ReactElement<any>;
type AnyRoute = Route<any>;

interface MakeRouteArgs {
  path: string;
  exact?: boolean;
  render: (props: any) => AnyReactElement | null;
}

export interface Route<TRouteArgs> extends MakeRouteArgs {
  reverse: (args?: TRouteArgs) => string;
  exact: boolean;
}

export function makeRoute<TRouteArgs>(make: MakeRouteArgs): Route<TRouteArgs> {
  const reverser = tokensToFunction(parse(make.path));
  return {
    reverse: (args?: TRouteArgs) => reverser(args),
    path: make.path,
    render: make.render,
    exact: !!make.exact,
  };
}

export function makeReactRoutesList(routes: AnyRoute[], props: {[key: string]: any}): AnyReactElement[] {
  return routes.map((route) => (
    <ReactRoute
      key={route.path}
      path={route.path}
      exact={route.exact}
      render={(matchProps) => route.render({...props, ...matchProps})}
    />
  ));
}

export default class HigherRouter {
  private routes: AnyRoute[] = [];

  /**
   * Make a route object and register it with the router.
   */
  public route<TRouteArgs>(make: MakeRouteArgs): Route<TRouteArgs> {
    const route = makeRoute<TRouteArgs>(make);
    this.routes.push(route);
    return route;
  }

  public getReactRoutesList(props: {[key: string]: any} = {}): AnyReactElement[] {
    return makeReactRoutesList(this.routes, props);
  }
}
