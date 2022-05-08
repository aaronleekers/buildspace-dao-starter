import './CollectionCard.css'
import { useState } from 'react';
import { useEditionDrop } from '@thirdweb-dev/react';


const CollectionCard = ({ id, name, traits, image }) => {

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
            <h1>
            </h1>
            </div>
            </div>
            </div>
            
        
           
        </div>
    )
}

export default CollectionCard