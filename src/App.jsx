import { useAddress, useMetamask, useEditionDrop, useToken, useNftTokenMetadata, useNFTDrop, getNFTDrop, getAllClaimerAddresses } from '@thirdweb-dev/react';
import { useState, useEffect, useMemo } from 'react';
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
  const editionDrop = useEditionDrop("0x0aA1c2d61CE84f40FF1FC4aA6324CBF2bb28a252");
  // Initialize our token contract
  const token = useToken("0xAF9621D4C4AE4419840577e04908EbeC12243BE9");
  // State variable for us to know if user has our NFT.
  const [hasClaimedNFT, setHasClaimedNFT,] = useState(false);
  // isClaiming lets us easily keep a loading state while the NFT is minting.
  const [isClaiming, setIsClaiming] = useState(false);

  // Holds the amount of token each member has in state.
const [memberTokenAmounts, setMemberTokenAmounts] = useState([]);
// The array holding all of our members addresses.
const [memberAddresses, setMemberAddresses] = useState([]);

// This useEffect grabs all the addresses of our members holding our NFT.
useEffect(() => {
  if (!hasClaimedNFT) {
    return;
  }

  // Just like we did in the 7-airdrop-token.js file! Grab the users who hold our NFT
  // with tokenId 0.
  const getAllAddresses = async () => {
    try {
      const memberAddresses = await editionDrop.history.getAllClaimerAddresses(0);
      setMemberAddresses(memberAddresses);
      console.log("🚀 Members addresses", memberAddresses);
    } catch (error) {
      console.error("failed to get member list", error);
    }

  };
  getAllAddresses();
}, [hasClaimedNFT, editionDrop.history]);

// This useEffect grabs the # of token each member holds.
useEffect(() => {
  if (!hasClaimedNFT) {
    return;
  }

  const getAllBalances = async () => {
    try {
      const amounts = await token.history.getAllHolderBalances();
      setMemberTokenAmounts(amounts);
      console.log("👜 Amounts", amounts);
    } catch (error) {
      console.error("failed to get member balances", error);
    }
  };
  getAllBalances();
}, [hasClaimedNFT, token.history]);

// Now, we combine the memberAddresses and memberTokenAmounts into a single array
const memberList = useMemo(() => {
  return memberAddresses.map((address) => {
    // We're checking if we are finding the address in the memberTokenAmounts array.
    // If we are, we'll return the amount of token the user has.
    // Otherwise, return 0.
    const member = memberTokenAmounts?.find(({ holder }) => holder === address);

    return {
      address,
      tokenAmount: member?.balance.displayValue || "0",
    }
  });
}, [memberAddresses, memberTokenAmounts]);

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
      <div>
          <meta name="viewport" content="'width=device-width, initial-scale=1.0"></meta>
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
    <div className="member-page">
                <meta name="viewport" content="'width=device-width, initial-scale=1.0"></meta>
      <div>
        <Header/>
      </div>
      <div className='officerPage'>
        <Officer/>
      </div>
      <div className='nftCardList'>
        <div>
          <NFTCardList/>
        </div>   
        <div>
        <div>
      </div>
      </div>
    </div>
    <Footer/>
    </div> 
  );
  }
};

export default App