import * as React from 'react';
import {ModuleId, WebpackAnalysisData} from '../WebpackAnalysisTypes';
import {getModuleRefs} from '../data-utils';
import {ModuleLink} from './links';

export default ({data, moduleId}: {
  data: WebpackAnalysisData,
  moduleId: ModuleId,
}) => {
  const refs = getModuleRefs(data, moduleId);
  return (
    <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
      <tbody>
      {refs.referrents.map((m) => <tr key={`to_${m.id}`}>
        <td>&rarr;</td>
        <td><ModuleLink module={m}/></td>
      </tr>)}
      {refs.referrers.map((m) => <tr key={`fr_${m.id}`}>
        <td>&larr;</td>
        <td><ModuleLink module={m}/></td>
      </tr>)}
      </tbody>
    </table>
  );
};
