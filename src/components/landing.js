import '../components/landing.css'
import { useMetamask, useEditionDrop, useNetworkMismatch, useNetwork } from '@thirdweb-dev/react';
import video from '../assets/video.mov'
import image from '../assets/logo4.png'
import Header from './Header';
import WwuDAO from './wwudao';
import { useState } from 'react'
import ContractCollection from './ContractCollection';
const Landing = ({}) => {

    const connectWithMetamask = useMetamask();

    const isMismatched = useNetworkMismatch();

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

    const editionDrop = useEditionDrop("0x0aA1c2d61CE84f40FF1FC4aA6324CBF2bb28a252");

    const [hasClaimedNFT, setHasClaimedNFT,] = useState(false);

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
    await editionDrop.claim(0, 1);
    console.log(`🌊 Successfully Minted! Check it out on OpenSea: https://opensea.io/assets/${editionDrop.getAddress()}/0`);
    setHasClaimedNFT(true);
  } catch (error) {
    setHasClaimedNFT(false);
    console.error("Failed to mint NFT", error);
  } finally {
    setIsClaiming(false);
  }
};


    console.log(isMismatched);

    return (
        <div>
        <div>
        </div>
        <div className='onBoarding'>
            <h1>Five Steps to join the DAO</h1>
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
                <div>
                <h1>Install MetaMask Wallet</h1>
                <h1>Connect Wallet</h1>
                <h1>Change Network to Polygon</h1>
                <h1>Send gas funds to wallet*</h1>
                <h1>Claim Membership NFT</h1>
                </div>
                </div>
                <div className='buttonList'>
                    <div>
                    <form target='_blank' action="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn">
                        <button className='actionButtonTopRight' type="submit">Click to Install</button>
                    </form>

                        <button className='actionButton' onClick={connectWithMetamask}>Connect Wallet</button>
                        <button className='actionButton' onClick={() => handleNetworkSwitch("polygon")}>Switch Network</button>

                        
                    <form target='_blank' action="https://forms.gle/JMRyfdHrf5W3M4sQ8">
                        <button className='actionButton' type="submit">Get Free Gas</button>
                    </form>
                    <form>
                        <button className='actionButtonBottomRight' disabled={isClaiming} onClick={mintMembershipNft}>
                            {isClaiming ? "Minting..." : "Claim Membership NFT"}
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