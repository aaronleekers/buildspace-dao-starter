import '../components/Officer.css'
import wlaimage from '../assets/logo4.png'
import discord from '../assets/white2.png'
import opensea from '../assets/opensea.png'
import CollectionCard from './CollectionCard'
import { useEditionDrop, useToken, useNFTDrop } from '@thirdweb-dev/react'
import { useState } from 'react'

const Officer = ({}) => {

    const editionDrop = useEditionDrop("0x51D46e7AE5cA35172f8E505f9cFd82087A416549");
    // Initialize our token contract
    const token = useToken("0xAF9621D4C4AE4419840577e04908EbeC12243BE9");
    // Initalize our 721Drop contract
    const nftDrop = useNFTDrop("0x4F3424D49aeF37BB1D68276bF59DBa1EFa6e779A");
    // State variable for us to know if user has our NFT.
    const [hasClaimedNFT, setHasClaimedNFT, clickedLink, setHasClickedLink] = useState(false);
    // isClaiming lets us easily keep a loading state while the NFT is minting.
    const [isClaiming, setIsClaiming] = useState(false);  


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

    return (
        <div>
        <div className='container'>
        <div className='officerCard'>
        <h1 className='header'>Officers Wanted</h1>
            <div>
            <p>
            The DAO needs officers to run effectively. Ideal officers are CS majors and business majors who are interested in working on a project that will teach them about the digital technology industry and economics. The role of an officer is somewhat vague, this is to allow for officers to jump to the necessary roles as they are further defined by the officers of the DAO.           
            </p>
            <p>
            Holders of Officer NFTs will be airdropped 5x more governance tokens than holders of Member NFTs. This is to allow for the voice of the leadership and the members to be weighted proportionally in terms of DAO involvement. 
            </p>
            <p>
            The mission of the officers and the DAO is also somewhat loose. However, there are a few imperatives that are laid out here to ensure the DAO has potential to remain present on campus. They are as follows:
            </p>
            <p className='five'>
                Distribute Annual Membership NFTs<br/>
                Seek out resources to post in the community channels<br/>
                Research and apply new features as they become available<br/>
                Obtain funding to ensure ease of involvement on campus<br/>
                Launch an annual NFT collection that pools together the art and design of students & members
 
            </p>
            </div>
            <form action="https://forms.gle/jLfTwkBxe5ifNYKRA">
                    <button className='officerApply' type="submit">Apply Here</button>
                </form>
        </div>
        <div className="officerNftCard">
                <img src={'https://bafybeidqrkckkh5oxqbpvjudy26wvhabuva6d7wp227442gwxvxjv5ptam.ipfs.nftstorage.link/'} alt="" />
                <div className='officerDetails'>
                <div className='officerName'>
                {'wwuDAO Officer NFT'} <div className='officerId'>must be whitelisted</div>
                <div className='priceContainer'>
                <div className='price'>{Officer}</div>
            </div>
            <div>
            <button className='officerMint' disabled={isClaiming} onClick={mintOfficerNft}>
                {isClaiming ? "Minting..." : "Claim"}
              </button>                        
              </div>
            </div>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Officer