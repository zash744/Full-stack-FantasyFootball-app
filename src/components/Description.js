import * as React from 'react';

export default function Description(){
    return (
        
        <>
        <center>
        <div className='divDescription'>
            <div className='descriptionPass'>
            <img src='https://png.pngtree.com/png-vector/20220207/ourmid/pngtree-american-football-quarterback-throw-ball-isolated-cartoon-isolated-rugby-football-vector-png-image_11704906.png'
            alt='quarterback'    width={80} height={140} />
            <h3>Passing Stats</h3>
            </div>
        
        <div className='descriptionPass'>
        <img src='https://png.pngtree.com/png-clipart/20230804/original/pngtree-american-football-running-back-fending-cartoon-running-back-north-american-football-illustration-vector-picture-image_9585772.png'
            alt='runningback'    width={80} height={140} />
            <h3>Rushing Stats</h3>
            </div>

            <div className='descriptionPass'>
            
            <img src='https://miro.medium.com/v2/resize:fit:1358/1*yaEXb97NwbUpXWTm5d4sqA.gif' alt='receiver' width={120} height={140}/>
            <h3>Receiving Stats</h3>
            </div>
            </div>
            </center>
            </>  

            
    )
}