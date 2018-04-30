import {ModuleId, WebpackAnalysisData} from '../WebpackAnalysisTypes';
import {sanitizeModuleName} from '../utils';
import React from 'react';
import {getModuleRefs} from '../data-utils';

export const ModuleRefsTable = ({data, moduleId}: {
  data: WebpackAnalysisData,
  moduleId: ModuleId,
}) => {
  const refs = getModuleRefs(data, moduleId);
  return (
    <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
      <tbody>
      {refs.referrents.map((m) => <tr key={`to_${m.id}`}>
        <td>&rarr;</td>
        <td>{sanitizeModuleName(m.name)}</td>
      </tr>)}
      {refs.referrers.map((m) => <tr key={`fr_${m.id}`}>
        <td>&larr;</td>
        <td>{sanitizeModuleName(m.name)}</td>
      </tr>)}
      </tbody>
    </table>
  );
};
