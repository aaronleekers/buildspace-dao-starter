import '/Users/aaronleek/Desktop/DAO BACKUP/buildspace-dao-starter copy/src/components/Header.css'
import wlaimage from '/Users/aaronleek/Desktop/DAO BACKUP/buildspace-dao-starter copy/src/assets/logo4.png'
import searchIcon from '/Users/aaronleek/Desktop/DAO BACKUP/buildspace-dao-starter copy/src/assets/search.png'

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
                <form action="https://forms.gle/jLfTwkBxe5ifNYKRA">
                    <button className='headerButton' type="submit">Become an Officer</button>
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