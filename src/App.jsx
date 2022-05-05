import { useAddress, useEditionDrop } from '@thirdweb-dev/react';
import { useState, useEffect } from 'react';
import { Buffer } from 'buffer';
import Header from './components/Header';
import '../src/index.css'
import NFTCardList from './components/NFTCardList';
import Officer from './components/Officer'
import Landing from './components/landing';
import ContractCollection from './components/ContractCollection';
import WwudaoBody from './components/wwudaoBody';
import Footer from './components/Footer'

const App = () => {
  // Use the hooks thirdweb give us.
  const address = useAddress();
  console.log("👋 Address:", address);

  

  window.Buffer = Buffer;
  // Initialize our editionDrop contract
  const editionDrop = useEditionDrop("0x51D46e7AE5cA35172f8E505f9cFd82087A416549");
  // State variable for us to know if user has our NFT.
  const [hasClaimedNFT, setHasClaimedNFT,] = useState(false);


  useEffect(() => {
    // If they don't have an connected wallet, exit!
    if (!address) {
      return;
    }

    const checkBalance = async () => {
      try {
        const balance = await editionDrop.balanceOf(address, 0);
        if (balance.gt(0)) {
          setHasClaimedNFT(true);
          console.log("🌟 this user has a membership NFT!");
        } else {
          setHasClaimedNFT(false);
          console.log("😭 this user doesn't have a membership NFT.");
        }
      } catch (error) {
        setHasClaimedNFT(false);
        console.error("Failed to get balance", error);
      }
    };
    checkBalance();
  }, [address, editionDrop]);
  
  


  // This is the case where the user hasn't connected their wallet
  // to your web app. Let them call connectWallet.
  if (!hasClaimedNFT) {
    return (
        <div className='landingPage'>
        <Header/>
        <Landing/>
        <WwudaoBody/>
        <ContractCollection/>
        <Footer/>
      </div>
    );
  }

  if (hasClaimedNFT) {
  return (
      <div className='memberPage'>
        <Header/>
        <Officer/>
        <NFTCardList/>
        <Footer/>
      </div> 
  );
  }
};

export default App