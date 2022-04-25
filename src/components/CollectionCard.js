import react from "react";
import './CollectionCard.css'
import wlaimage from '../assets/wwuDAO2.png'
import { useState } from 'react';
import { useAddress, useMetamask, useEditionDrop, useToken, useNftTokenMetadata, useNFTDrop, getNFTDrop, getAllClaimerAddresses, useNFTCollection } from '@thirdweb-dev/react';


const CollectionCard = ({ id, name, traits, image }) => {

    const editionDrop = useEditionDrop("0x5c49ce397507a8dE4D2c9B431b204fF42bB5f502");
    // Initialize our token contract
    const token = useToken("0xAF9621D4C4AE4419840577e04908EbeC12243BE9");
    // Initalize our 721Drop contract
    const nftDrop = useNFTDrop("0x4F3424D49aeF37BB1D68276bF59DBa1EFa6e779A");
    // Initialize Sittner NFT collection
    const Sittner = useEditionDrop("0x5c49ce397507a8dE4D2c9B431b204fF42bB5f502");
    
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
              <button className='mint' disabled={isClaiming} onClick={mintSittnerNft}>
                {isClaiming ? "Minting..." : "Claim"}
              </button>            
            </div>
            </div>
            </div>
            </div>
            
        
           
        </div>
    )
}

export default CollectionCard