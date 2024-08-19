// src/components/Appbar.js
import * as React from 'react';
import { Link } from 'react-router-dom';
import football from '../assets/football.png'

export default function Appbar() {
  return (
    <nav>
      <img src={football} alt='football' height="120" className='barlogo'/>
      <h3 class ="logo--text"><Link to="/" style={{ color: 'white', textDecoration: 'none', marginRight: '16px' }}>
        Home
        </Link></h3>
      

    <Link to="/passing" style={{ color: 'white', textDecoration: 'none', marginRight: '80px' }}>
        <img src='https://png.pngtree.com/png-vector/20220207/ourmid/pngtree-american-football-quarterback-throw-ball-isolated-cartoon-isolated-rugby-football-vector-png-image_11704906.png' 
        alt='quarterback' height={100} width={90} className='barlogo'/>
        </Link>

      <Link to="/rushing" style={{ color: 'white', textDecoration: 'none', marginRight: '80px' }}>
        <img src='https://png.pngtree.com/png-clipart/20230804/original/pngtree-american-football-running-back-fending-cartoon-running-back-north-american-football-illustration-vector-picture-image_9585772.png' 
        alt='runningback'  height={100} width={90} className='barlogo'/>
        </Link>

      <Link to="/receiving" style={{ color: 'white', textDecoration: 'none', marginRight: '80px' }}>
        <img src='https://miro.medium.com/v2/resize:fit:1358/1*yaEXb97NwbUpXWTm5d4sqA.gif' alt = 'receiver'  height={100} width={90} className='barlogo'/>
        </Link>


      
    </nav>
    // <Box sx={{ flexGrow: 1 }}>
    //   <AppBar position="static">
    //     <Toolbar variant="dense">
    //       <img src="https://www.shutterstock.com/image-vector/kids-drawing-cartoon-vector-illustration-600nw-2380017893.jpg" alt='football' height="50" className='barlogo'/>
    //       <Link to="/" style={{ color: 'inherit', textDecoration: 'none', marginRight: '16px' }}>
    //       <h3 class ="logo--text">Home</h3>
    //         </Link>
    //       <Typography className='logo--text' variant="h6" color="inherit" component="div">
    //         <Link to="/passing" style={{ color: 'inherit', textDecoration: 'none', marginRight: '16px' }}>
    //           Passing Stats
    //         </Link>
    //       </Typography>
    //       <Typography variant="h6" color="inherit" component="div">
    //         <Link to="/rushing" style={{ color: 'inherit', textDecoration: 'none', marginRight: '16px' }}>
    //           Rushing Stats
    //         </Link>
    //       </Typography>
    //       <Typography variant="h6" color="inherit" component="div">
    //         <Link to="/receiving" style={{ color: 'inherit', textDecoration: 'none', marginRight: '16px' }}>
    //          Recieving Stats
    //         </Link>
    //       </Typography>
    //     </Toolbar>
    //   </AppBar>
    // </Box>
  );
}
