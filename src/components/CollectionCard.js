import './CollectionCard.css'
import { useState, useEffect } from 'react';
import { useEditionDrop, useAddress } from '@thirdweb-dev/react';


const CollectionCard = ({ id, name, traits, image }) => {

  const address = useAddress();

    // Initialize Sittner NFT collection
    const editionDrop = useEditionDrop("0x6485bAC1543e0B2532A60660932345a0Be3478b4");
    const Sittner = useEditionDrop("0x5c49ce397507a8dE4D2c9B431b204fF42bB5f502");
    
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


    const [isClaiming, setIsClaiming] = useState(false);

    const mintSittnerNft = async () => {
        try { 
          setIsClaiming(true);
          await Sittner.claim(id, 1)
          console.log(`🌊 Successfully Minted! Check it out on OpenSea: https://opensea.io/assets/${Sittner.getAddress()}/0`);
        } catch (error) {
          console.error("Failed to mint NFT", error);
        } finally {
          setIsClaiming(false);
        }
      };


    return (
        <div>
      
            <div className="collectionCard">
                <img className src={image} alt="" />
                <div className='details'>
                <div className='name'>
                {name} <div className='id'>#{id}</div>
            <div>
              <button className='mint' disabled={isClaiming || !address} onClick={mintSittnerNft}>
                {isClaiming ? "Minting..." : "Claim"}
              </button>            
            </div>
            <h1>
            </h1>
            </div>
            </div>
            </div>
            
        
           
        </div>
    )
}

export default CollectionCard