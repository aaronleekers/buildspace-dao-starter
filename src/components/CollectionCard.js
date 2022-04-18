import react from "react";
import './CollectionCard.css'
import wlaimage from '/Users/aaronleek/Desktop/DAO BACKUP/buildspace-dao-starter copy/src/assets/wwuDAO2.png'
import { useAddress, useMetamask, useEditionDrop, useToken, useNftTokenMetadata, useNFTDrop, getNFTDrop, getAllClaimerAddresses, useNFTCollection } from '@thirdweb-dev/react';


const CollectionCard = ({ id, name, traits, image }) => {

    const editionDrop = useEditionDrop("0x51D46e7AE5cA35172f8E505f9cFd82087A416549");
    // Initialize our token contract
    const token = useToken("0xAF9621D4C4AE4419840577e04908EbeC12243BE9");
    // Initalize our 721Drop contract
    const nftDrop = useNFTDrop("0x4F3424D49aeF37BB1D68276bF59DBa1EFa6e779A");
    // Initialize Sittner NFT collection
    const Sittner = useEditionDrop("0xBb3484Fac50f332985081905d7eaf685D6549516");

    const mintSittnerNft = async () => {
        try {
          await Sittner.claim(id, 1)
          console.log(`🌊 Successfully Minted! Check it out on OpenSea: https://opensea.io/assets/${editionDrop.getAddress()}/0`);
        } catch (error) {
          console.error("Failed to mint NFT", error);
        } finally {
        }
      };


    return (
        <div>
            <div className="collectionCard">
                <img className src={image} alt="" />
                <div className='details'>
                <div className='name'>
                {name} <div className='id'>#{id}</div>
                <div className='priceContainer'>
                <img src={wlaimage} className='wlaImage' alt=''/>
                <div className='price'>{traits[0]?.value}</div>
            </div>
            <div>
            <button className='mint' onClick={mintSittnerNft}>Mint</button>   
            </div>
            </div>
            </div>
            </div>
            
        
           
        </div>
    )
}

export default CollectionCard