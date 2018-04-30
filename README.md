<p align="center">
<img src="https://raw.githubusercontent.com/akx/webpack-xray/master/design/icon.png" align="center">
</p>


A modern take on [webpack/analyse](https://github.com/webpack/analyse)
powered by TypeScript, React, React-Table and Bulma.

:point_right: Supports Webpack 3 and Webpack 4 JSON data!

## Usage

webpack-xray is [available online at https://akx.github.io/webpack-xray/](https://akx.github.io/webpack-xray/).

If you like, you can also use it offline (and these instructions double as instructions on how to get hacking on it):

* Clone the repository
* Install dependencies with `yarn` (or `npm i`)
* Run the [Poi][poi] dev server with `yarn dev --open` (`npm run dev -- --open`).

## Features

* Lists the assets, chunks, entry points and modules in your bundle in sortable tables
* Drilldowns: chunk origins, module reasons, etc.
* Chunk-and-module graph (a little slow on large projects)
* Module referrer/referrent tables

## Missing features (c.f. analyse)

* Hints
* Profiler data
* Support for Webpack 3 `children` data?

## Other planned features

* "Critical path" analysis, i.e. "why are these large modules included?"

[poi]: http://poi.js.org/
