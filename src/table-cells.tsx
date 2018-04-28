import * as React from 'react';
import {formatInteger} from './formatting';

export function IntegerCell(data: any): string {
  return formatInteger(data.value);
}

export function BooleanCell(data: any): React.ReactElement<any> {
  return (
    data.value ?
      <span className="has-text-success">Yes</span> :
      <span className="has-text-danger">No</span>
  );
}
