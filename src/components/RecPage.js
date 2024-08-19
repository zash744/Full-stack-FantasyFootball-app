import * as React from 'react';
import RecTable from './RecTable';

export default function RushingPage() {
  return (
    <div>
      <h1 className='pageHeaders'>View the Receiving Leaders for the 2023 Season!</h1>
      <center><RecTable /></center>
    </div>
  );
}