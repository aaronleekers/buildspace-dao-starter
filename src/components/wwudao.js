
import '../components/wwudao.css'
import { useState } from 'react';
import { useEditionDrop } from '@thirdweb-dev/react';
import Header from './Header';


const WwuDAO = ({}) => {


    return (
      <div>
        <div className='containerTop'>
        <div>
        </div>
        <div>
        <div className='schedule'>
        <h2>Upcoming Events</h2>
        <div className='scheduleItems'>
        <h3>May 1 - DAO is deployed</h3>
        <h3>May 22 - WLA Airdrop to NFT holders</h3>
        <h3>June 1 - Officers are selected</h3>
        <h3>June 10 - Ownership is transferred</h3>
        </div>
        </div>
        <div>
        <div className='body'>
        </div>
        </div>
        </div>

        </div>
      </div>
      
    )
}

export default WwuDAO