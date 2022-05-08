import '../components/Header.css'
import wlaimage from '../assets/logo4.png'
import openSea from '../assets/opensea.png'
import discord from '../assets/discord.png'

const Header = ({}) => {

    return (
            <div className='headerContainer'>
                <div className='logoContainer'>
                    <img src={wlaimage} className='wlaLogo' alt=''/>
                </div>
                <div className='headerItems'>
                    <form target="_blank" action="https://opensea.io/assets/matic/0x51d46e7ae5ca35172f8e505f9cfd82087a416549/0">
                        <button className='headerButton' type="submit"><img src={openSea} className='openLogo'/></button>
                    </form>
                    <form target="_blank" action="https://discord.gg/D7d7qjezX5">
                        <button className='headerButton' type="submit"><img src={discord} className='discordTwo'/></button>
                    </form>    
                </div>
            </div>
    )
}

export default Header