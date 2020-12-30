import { BigInt } from "@graphprotocol/graph-ts"
import {
  BTCUSD,
  AnswerUpdated
} from "../generated/BTCUSD/BTCUSD"
import { Price } from "../generated/schema"

export function handleAnswerUpdated(event: AnswerUpdated): void {

  let entity = new Price("BTC/USD" + "/" + event.params.updatedAt.toHexString());

  entity.assetPair = "BTC/USD";
  entity.timestamp = event.params.updatedAt;
  entity.price = event.params.current;
  entity.save();
}
