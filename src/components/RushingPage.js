import * as React from 'react';
import RushingTable from './RushingTable';

export default function RushingPage() {
  return (
    <div>
      <h1 className='pageHeaders'>View the Rushing Leaders for the 2023 Season!</h1>
      <center><RushingTable /></center>
    </div>
  );
}