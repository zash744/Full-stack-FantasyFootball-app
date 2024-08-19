import * as React from 'react';
import TableShow from './TableShow';

export default function PassPage() {
  return (
    <div>
      <h1 className='pageHeaders'>View the Passing Leaders for the 2023 Season!</h1>
      <center><TableShow /></center>
    </div>
  );
}