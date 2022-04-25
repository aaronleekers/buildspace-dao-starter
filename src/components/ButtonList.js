import '../components/ButtonList.css'
import { useAddress, useMetamask, useEditionDrop, useToken, useNftTokenMetadata, useNFTDrop, getNFTDrop, getAllClaimerAddresses } from '@thirdweb-dev/react';

const ButtonList = ({}) => {

    const editionDrop = useEditionDrop("0x51D46e7AE5cA35172f8E505f9cFd82087A416549");
    // Initialize our token contract
    const token = useToken("0xAF9621D4C4AE4419840577e04908EbeC12243BE9");
    // Initalize our 721Drop contract
    const nftDrop = useNFTDrop("0x4F3424D49aeF37BB1D68276bF59DBa1EFa6e779A");
    // State variable for us to know if user has our NFT.
    // isClaiming lets us easily keep a loading state while the NFT is minting.

    




    return (
        <div className="topcontainer">
        <div>
          <div className="buttonlist">
              <form action='https://opensea.io/assets/matic/0x51D46e7AE5cA35172f8E505f9cFd82087A416549/0'>
              <button type="submit">Browse Sittner Hall NFT Collection</button></form>
  
              <form action='https://opensea.io/assets/matic/0x51D46e7AE5cA35172f8E505f9cFd82087A416549/0'>
              <button type="submit">Browse "Buildings on Campus" NFT Collection</button></form>

        </div>
          </div>
        </div>
    )
}

export default ButtonList