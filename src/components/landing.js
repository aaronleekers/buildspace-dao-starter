import '../components/landing.css'
import { useMetamask, useEditionDrop } from '@thirdweb-dev/react';
import { useState } from 'react'
const Landing = ({}) => {

    const connectWithMetamask = useMetamask();

    const networks = {
      polygon: {
        chainId: `0x${Number(137).toString(16)}`,
        chainName: 'Polygon Mainnet',
        nativeCurrency: {
          name: "MATIC",
          symbol: "MATIC",
          decimals: 18
        },
        rpcUrls: ["https://polygon-rpc.com/"],
        blockExplorerUrls: ["https://polygonscan.com/"]
      },
    }

    const editionDrop = useEditionDrop("0x6485bAC1543e0B2532A60660932345a0Be3478b4");

    const [ setHasClaimedNFT ] = useState(false);

    const [isClaiming, setIsClaiming] = useState(false);

    const changeNetwork = async ({ networkName, setError }) => {
      try {
        if (!window.ethereum) throw new Error("No wallet connected");
        await window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              ...networks[networkName]
            }
          ]
        });
      } catch (err) {
        setError(err.message);
      }
    };

    const handleNetworkSwitch = async (networkName) => {
      await changeNetwork({ networkName });
    }


    const mintMembershipNft = async () => {
    try {
    setIsClaiming(true);
    await editionDrop.claim(0,1);
    console.log(`🌊 Successfully Minted! Check it out on OpenSea: https://opensea.io/assets/${editionDrop.getAddress()}/0`);
    setHasClaimedNFT(true);
  } catch (error) {
    setHasClaimedNFT(false);
    console.error("Failed to mint NFT", error);
  } finally {
    setIsClaiming(false);
  }
};


    return (
        <div>
          <h1 className='chrome'>Must use MetaMask brower extension to use app</h1>
        <div className='landingTop'>
          <div className='scheduleContainer'>
          <div className='schedule'>
            <h2>Upcoming Events</h2>
          <div className='scheduleItems'>
            <h3>May 9 - DAO is deployed</h3>
            <h3>May 22 - WLA Airdrop to NFT holders</h3>
            <h3>June 1 - Officers are selected</h3>
            <h3>June 10 - Ownership is transferred</h3>
          </div>
        </div>
          </div>
          <div>
          <div className='onBoarding'>
            <div className='metaMask'>
                <div>
                <div className='numbers'>
                    <h2>1</h2>
                    <h2>2</h2>
                    <h2>3</h2>
                    <h2>4</h2>
                    <h2>5</h2>
                </div>
                <div className='steps'>

                <h1>Install MetaMask Wallet on Chrome</h1>
                <h1>Connect Wallet</h1>
                <h1>Change Network to Polygon</h1>
                <h1>Send gas funds to wallet*</h1>
                <h1>Claim Membership NFT</h1>
                </div>
                </div>
                </div>
                <div className='buttonList'>
                  <div>
                  <form target='_blank' action="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn">
                        <button className='actionButton' type="submit">Click to Install</button>
                    </form>
                        <button className='actionButton' onClick={connectWithMetamask}>Connect Wallet</button>
                        <button className='actionButton' onClick={() => handleNetworkSwitch("polygon")}>Switch Network</button>     
                    <form target='_blank' action="https://forms.gle/JMRyfdHrf5W3M4sQ8">
                        <button className='actionButton' type="submit">Get Free Gas</button>
                    </form>
                    <form>
                        <button className='actionButton' disabled={isClaiming} onClick={mintMembershipNft}>
                            {isClaiming ? "Minting..." : "Mint"}
                        </button>    
                    </form>
                  </div>
                </div>
                </div>
          </div>
     
            </div>

        </div>
    )
}

export default Landing