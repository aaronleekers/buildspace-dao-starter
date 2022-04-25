import '../components/Header.css'
import wlaimage from '../assets/logo4.png'
import discord from '../assets/white2.png'
import opensea from '../assets/opensea.png'

const Header = ({}) => {

    return (
        <div>
            <div className='header'>
            <div className='logoContainer'>
                <img src={wlaimage} className='wlaLogo' alt=''/>
            </div>
            <div>
                <div className='headerItems'>
                <form action="https://opensea.io/assets/matic/0x51d46e7ae5ca35172f8e505f9cfd82087a416549/0">
                    <button className='headerButton' type="submit">OpenSea</button>
                </form>
                <form action="https://discord.gg/D7d7qjezX5">
                    <button className='headerButton' type="submit">Discord</button>
                </form>
                <form action="https://medium.com/@leekaaron5/on-the-wwudao-63fe77e6bc70">
                    <button className='headerButton' type="submit">Learn More</button>
                </form>
    
            </div>
            </div>
        </div>
        </div>
    )
}

export default Header