
import '../components/wwudao.css'
import { useState } from 'react';
import { useEditionDrop } from '@thirdweb-dev/react';
import Header from './Header';


const WwuDAO = ({}) => {

const editionDrop = useEditionDrop("0x0aA1c2d61CE84f40FF1FC4aA6324CBF2bb28a252");


const [hasClaimedNFT, setHasClaimedNFT,] = useState(false);

const [isClaiming, setIsClaiming] = useState(false);

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


    return (
      <div>
        <Header/>
        <div className='container'>
        <div>
        <div className='mintCard'>
        <h1>Mint a free membership NFT to access the member page</h1>
        <img className='memberNft' src={'https://bafybeihmw6yymm7hgbnaqcjurhp2dxnpf2fgcd3psedcbyqyuilqgp3i7i.ipfs.nftstorage.link/'}/>
      <button className='claim' disabled={isClaiming} onClick={mintMembershipNft}>
        {isClaiming ? "Minting..." : "Claim Membership NFT"}
      </button>
      </div>
        </div>
        <div>
        <h1 className='headerC'>What is the wwuDAO?</h1>
        <div>
        <div className='body'>
        <p>
        The wwuDAO is an organization that is owned and operated by students of Walla Walla University, for the purpose of empowering students to network and collaborate on cutting edge technology. The DAO in wwuDAO stands for Decentralized Autonomous Organization. Before we go further with seemingly meaningless buzzwords, it should be noted that the wwuDAO is not an investment fund, nor is it a binding representative body on campus. 
        </p>
        <p>
        Those who wish to know more about blockchain technologies and want to get active exposure to the industry by participating in the furthered development of the DAO can do so by minting officer NFTs, which gives them developmental power over the DAO. Officers are expected to publish up-to-date resources about the industry, expand their skillset through the technical development of the front-end web app, and facilitate events and projects that get the members involved. 
        </p>
        <p>
        The DAO will operate under control of the officers, until it is stable enough to open the voting to all members, who will decide the direction of the DAO through proposals. Voting will be done through the DAO native token, WLA, which is airdropped to members & officers at the beginning of each membership period. 
        </p>
        </div>
        </div>
        </div>

        </div>
      </div>
      
    )
}

export default WwuDAO