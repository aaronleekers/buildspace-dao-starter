import { useAddress, useMetamask, useEditionDrop, useToken, useNftTokenMetadata, useNFTDrop, getNFTDrop, getAllClaimerAddresses } from '@thirdweb-dev/react';
import { useState, useEffect, useMemo } from 'react';
import { Buffer } from 'buffer';
import Image from 'next/image'
import Link from 'next/link'
import CollectionCard from './components/CollectionCard';
import axios from 'axios'
import Header from './components/Header';
import ButtonList from './components/ButtonList'
import Wwudao from './components/wwudao'
import '/Users/aaronleek/Desktop/DAO BACKUP/buildspace-dao-starter copy/src/index.css'
import NFTCardList from './components/NFTCardList';

const App = () => {
  // Use the hooks thirdweb give us.
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  console.log("👋 Address:", address);

  

  window.Buffer = Buffer;
  // Initialize our editionDrop contract
  const editionDrop = useEditionDrop("0x51D46e7AE5cA35172f8E505f9cFd82087A416549");
  // Initialize our token contract
  const token = useToken("0xAF9621D4C4AE4419840577e04908EbeC12243BE9");
  // Initalize our 721Drop contract
  const nftDrop = useNFTDrop("0x4F3424D49aeF37BB1D68276bF59DBa1EFa6e779A");
  // State variable for us to know if user has our NFT.
  const [hasClaimedNFT, setHasClaimedNFT, clickedLink, setHasClickedLink] = useState(false);
  // isClaiming lets us easily keep a loading state while the NFT is minting.
  const [isClaiming, setIsClaiming] = useState(false);

  // Holds the amount of token each member has in state.
const [memberTokenAmounts, setMemberTokenAmounts] = useState([]);
// The array holding all of our members addresses.
const [memberAddresses, setMemberAddresses] = useState([]);

// A fancy function to shorten someones wallet address, no need to show the whole thing. 
const shortenAddress = (str) => {
  return str.substring(0, 6) + "..." + str.substring(str.length - 4);
};

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

  const mintOfficerNft = async () => {
    try {
      setIsClaiming(true); 
      await editionDrop.claim(1, 1);
      console.log(`🌊 Successfully Minted! Check it out on OpenSea: https://opensea.io/assets/${editionDrop.getAddress()}/0`);
      setHasClaimedNFT(true);
    } catch (error) {
      setHasClaimedNFT(false);
      console.error("Failed to mint NFT", error);
    } finally {
      setIsClaiming(false);
    }
  };


  // This is the case where the user hasn't connected their wallet
  // to your web app. Let them call connectWallet.
  if (!address) {
    return (
      <div className="landing">
        <h1>Welcome to wwuDAO</h1>
        <button onClick={connectWithMetamask} className="btn-hero">
          Connect your wallet
        </button>
      </div>
    );
  }

  if (hasClaimedNFT) {
  return (
    <div className="member-page">
      <div>
        <Header/>
      </div>
      <div>
        <Wwudao/>
      </div>
      <div className='nftCardList'>
        <div>
          <NFTCardList/>
        </div>    
      </div>
    </div>
  );
};

  
  // Render mint nft screen.
  return (
    <div className="mint-nft">
      <h1>Mint your free wwuDAO Membership NFT</h1>
      <button disabled={isClaiming} onClick={mintMembershipNft}>
        {isClaiming ? "Minting..." : "Mint your nft (FREE)"}
      </button>
    </div>
  );
}

export default App;