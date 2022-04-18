import sdk from "./1-initialize-sdk.js";
import { MaxUint256 } from "@ethersproject/constants";

const editionDrop = sdk.getEditionDrop("0xBb3484Fac50f332985081905d7eaf685D6549516");

(async () => {
  try {
    // We define our claim conditions, this is an array of objects because
    // we can have multiple phases starting at different times if we want to
    const claimConditions = [{
      // When people are gonna be able to start claiming the NFTs (now)
      startTime: new Date(),
      // The maximum number of NFTs that can be claimed.
      maxQuantity: 1,
      // The price of our NFT (free)
      price: 0,
      // The amount of NFTs people can claim in one transaction.
      quantityLimitPerTransaction: 1,
      // We set the wait between transactions to MaxUint256, which means
      // people are only allowed to claim once.
      waitInSeconds: 1,
    }]
    for (let i = 0; i < 3; i++) {
        await editionDrop.claimConditions.set(i, claimConditions);
        console.log("✅ Sucessfully set claim condition for ID number", i);
    }
    
  } catch (error) {
    console.error("Failed to set claim condition", error);
  }
})();