import '../components/landing.css'
import { useMetamask } from '@thirdweb-dev/react';
import video from '../assets/video.mov'
import image from '../assets/logo4.png'
const Landing = ({}) => {

    const connectWithMetamask = useMetamask();

    
    return (
        <div>
         <div className="landing">
        <img className='logo' src ={image}/>

        <button className='connect' onClick={connectWithMetamask}>
          Connect wallet
        </button>
        </div>
        </div>
    )
}

export default Landing