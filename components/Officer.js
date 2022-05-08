import '../components/Officer.css'
import { useEditionDrop,  } from '@thirdweb-dev/react'
import { useState } from 'react'

const Officer = ({}) => {

    const editionDrop = useEditionDrop("0x51D46e7AE5cA35172f8E505f9cFd82087A416549");
    // isClaiming lets us easily keep a loading state while the NFT is minting.
    const [isClaiming, setIsClaiming] = useState(false);  


    const mintOfficerNft = async () => {
        try {
          setIsClaiming(true); 
          await editionDrop.claim(1, 1);
          console.log(`🌊 Successfully Minted! Check it out on OpenSea: https://opensea.io/assets/${editionDrop.getAddress()}/0`);
        } catch (error) {
          console.error("Failed to mint NFT", error);
        } finally {
          setIsClaiming(false);
        }
      };

    return (
        <div>
          
        <div className='officerContainer'>
          <div className='officerCard'>
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
              </div>
        <div>
        <h2 className='five'>
                - Distribute Annual Membership NFTs<br/>
                - Seek out resources to post in the community channels<br/>
                - Research and apply new features as they become available<br/>
                - Obtain funding to ensure ease of involvement on campus<br/>
                - Launch an annual NFT collection that pools together the art and design of students & members
        </h2>
        </div>
            <form action="https://forms.gle/jLfTwkBxe5ifNYKRA">
                    <button className='officerApply' type="submit">Apply Here</button>
                </form>
        </div>
        <div className="officerNftCard">
                <img src={'https://bafybeicepey3m3eyf5pygpjqveyc3idcz6bh6opvyfsf7xtbb4uezl2dpm.ipfs.nftstorage.link/'} alt="" />
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