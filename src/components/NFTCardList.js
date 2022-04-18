import react from "react";
import CollectionCard from "./CollectionCard";
import './NFTCardList.css'

const NFTCardList = ({}) => {

    return (
        <div>
        <h1>Sittner NFTs</h1>
        <form action='https://opensea.io/collection/sittner-nfts-v2'>
        <button className='openSea' type="submit">View Collection on OpenSea</button></form>
        <div className ='collectionContainer'>
            <div>
                <CollectionCard id={0} name={`Sittner Hall 208`} traits={[{ value: 1 }]} image='https://bafybeihxwlnayt5lk6aorzzxjwjj6kxrlmmrpilvqkb5nq44qxut4aewom.ipfs.nftstorage.link/'/>
                <CollectionCard id={1} name={`Sittner Hall 209`} traits={[{ value: 1 }]} image='https://bafybeie362iy2tibymjlzxfj3lp7yeilfpvfmnqj6selg5lekh4hjhgcx4.ipfs.nftstorage.link/'/>
                <CollectionCard id={2} name={`Sittner Hall 210`} traits={[{ value: 1 }]} image='https://bafybeie362iy2tibymjlzxfj3lp7yeilfpvfmnqj6selg5lekh4hjhgcx4.ipfs.nftstorage.link/'/>
                <CollectionCard id={3} name={`Sittner Hall 211`} traits={[{ value: 1 }]} image='https://bafybeie362iy2tibymjlzxfj3lp7yeilfpvfmnqj6selg5lekh4hjhgcx4.ipfs.nftstorage.link/'/>
                <CollectionCard id={3} name={`Sittner Hall 211`} traits={[{ value: 1 }]} image='https://bafybeie362iy2tibymjlzxfj3lp7yeilfpvfmnqj6selg5lekh4hjhgcx4.ipfs.nftstorage.link/'/>
                <CollectionCard id={3} name={`Sittner Hall 211`} traits={[{ value: 1 }]} image='https://bafybeie362iy2tibymjlzxfj3lp7yeilfpvfmnqj6selg5lekh4hjhgcx4.ipfs.nftstorage.link/'/>
                <CollectionCard id={3} name={`Sittner Hall 211`} traits={[{ value: 1 }]} image='https://bafybeie362iy2tibymjlzxfj3lp7yeilfpvfmnqj6selg5lekh4hjhgcx4.ipfs.nftstorage.link/'/>
                <CollectionCard id={3} name={`Sittner Hall 211`} traits={[{ value: 1 }]} image='https://bafybeie362iy2tibymjlzxfj3lp7yeilfpvfmnqj6selg5lekh4hjhgcx4.ipfs.nftstorage.link/'/>
                <CollectionCard id={3} name={`Sittner Hall 211`} traits={[{ value: 1 }]} image='https://bafybeie362iy2tibymjlzxfj3lp7yeilfpvfmnqj6selg5lekh4hjhgcx4.ipfs.nftstorage.link/'/>
                <CollectionCard id={3} name={`Sittner Hall 211`} traits={[{ value: 1 }]} image='https://bafybeie362iy2tibymjlzxfj3lp7yeilfpvfmnqj6selg5lekh4hjhgcx4.ipfs.nftstorage.link/'/>
                <CollectionCard id={3} name={`Sittner Hall 211`} traits={[{ value: 1 }]} image='https://bafybeie362iy2tibymjlzxfj3lp7yeilfpvfmnqj6selg5lekh4hjhgcx4.ipfs.nftstorage.link/'/>
                <CollectionCard id={3} name={`Sittner Hall 211`} traits={[{ value: 1 }]} image='https://bafybeie362iy2tibymjlzxfj3lp7yeilfpvfmnqj6selg5lekh4hjhgcx4.ipfs.nftstorage.link/'/>
                <CollectionCard id={3} name={`Sittner Hall 211`} traits={[{ value: 1 }]} image='https://bafybeie362iy2tibymjlzxfj3lp7yeilfpvfmnqj6selg5lekh4hjhgcx4.ipfs.nftstorage.link/'/>
                <CollectionCard id={3} name={`Sittner Hall 211`} traits={[{ value: 1 }]} image='https://bafybeie362iy2tibymjlzxfj3lp7yeilfpvfmnqj6selg5lekh4hjhgcx4.ipfs.nftstorage.link/'/>
                <CollectionCard id={3} name={`Sittner Hall 211`} traits={[{ value: 1 }]} image='https://bafybeie362iy2tibymjlzxfj3lp7yeilfpvfmnqj6selg5lekh4hjhgcx4.ipfs.nftstorage.link/'/>
                <CollectionCard id={3} name={`Sittner Hall 211`} traits={[{ value: 1 }]} image='https://bafybeie362iy2tibymjlzxfj3lp7yeilfpvfmnqj6selg5lekh4hjhgcx4.ipfs.nftstorage.link/'/>
                <CollectionCard id={3} name={`Sittner Hall 211`} traits={[{ value: 1 }]} image='https://bafybeie362iy2tibymjlzxfj3lp7yeilfpvfmnqj6selg5lekh4hjhgcx4.ipfs.nftstorage.link/'/>
            </div>
        </div> 
        </div>
    )
}

export default NFTCardList