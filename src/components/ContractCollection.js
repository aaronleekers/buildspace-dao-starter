import '../components/ContractCollection.css'


const ContractCollection = ({ }) => {

    return (
        <div className='contractContainer'>
        <div className='mintCard'>
            <h1>Membership NFT 2022</h1>
                <img className='memberNft' src={'https://bafybeibhsuueykrx7kiha3kw5aluorw2q35w5yb3vhs6ddfzdemqshlte4.ipfs.nftstorage.link/'} alt=''/>
            <form target='_blank' action="https://opensea.io/assets/matic/0x51d46e7ae5ca35172f8e505f9cfd82087a416549/0">
                <button className='cardButton' type="submit">View</button>
            </form>
            <p>Holders of this NFT will be considered DAO members and will gain access to the member page.</p>
      </div>
      <div className='mintCard'>
            <h1>Officer NFT 2022</h1>
                <img className='memberNft' src={'https://bafybeiexjllz3g6a67famfr5wpkonfzerumn22o5bnj5ujgjsczcfkv7dm.ipfs.nftstorage.link/'} alt=''/>
            <form target='_blank' action="https://opensea.io/assets/matic/0x51d46e7ae5ca35172f8e505f9cfd82087a416549/1">
                <button className='cardButton' type="submit">View</button>
            </form>
            <p>Holders of this NFT will be considered DAO officers and will further develop the DAO on campus</p>
      </div>
      <div className='mintCard'>
            <h1>Sittner NFTs 2022</h1>
                <img className='memberNft' src={'https://bafybeicckwd2firzoujztqm4e6c5zceqg6da4rqey6zx2x6k6cximhx4by.ipfs.nftstorage.link/'} alt=''/>
            <form target='_blank' action="https://opensea.io/collection/sittner-nfts-v4">
                <button className='cardButton' type="submit">View</button>
            </form>
            <p>
             Two of every room in Sittner Hall. Taken in Spring 2022
            </p>     
            </div>
        </div>
    )
}

export default ContractCollection