import * as React from 'react';
import Description from './Description';


export default function Opening() {
  return (
    <div className='maincontent'>
      <center><img src="https://1000logos.net/wp-content/uploads/2017/05/NFL-logo.png" alt='NFL' width="250"/></center>
      <h1 className='h1Fs'>WELCOME TO FANTASY STAT CHECK!</h1>
      <p className='pfs'>Use the top right links to go view the stats you need to see!</p>
      <Description/>
    </div>
  );
}