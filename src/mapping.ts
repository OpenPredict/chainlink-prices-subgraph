import {
  AccessControlledAggregator,
  AnswerUpdated
} from "../generated/AccessControlledAggregator/AccessControlledAggregator"
import { Price, AssetPair } from "../generated/schema"

export function handleAnswerUpdated(event: AnswerUpdated): void {

  // get description for pair
  let contract = AccessControlledAggregator.bind(event.address);
  let descriptionResult = contract.try_description();
  if (descriptionResult.reverted) {
    return;
  }
  // Remove spaces
  const description = descriptionResult.value.split(" ").join("");

  // Add assetPair (just overwrites if it already exists)
  let assetPair = new AssetPair(description);
  assetPair.save();
  
  // create new entry
  let entity = new Price(description + "/" + event.params.updatedAt.toHexString());
  entity.assetPair = assetPair.id;
  entity.timestamp = event.params.updatedAt;
  entity.price = event.params.current;
  entity.save();
}
