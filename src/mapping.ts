import { BigInt } from "@graphprotocol/graph-ts"
import {
  BTCUSD,
  AddedAccess,
  AnswerUpdated,
  AvailableFundsUpdated,
  CheckAccessDisabled,
  CheckAccessEnabled,
  NewRound,
  OracleAdminUpdateRequested,
  OracleAdminUpdated,
  OraclePermissionsUpdated,
  OwnershipTransferRequested,
  OwnershipTransferred,
  RemovedAccess,
  RequesterPermissionsSet,
  RoundDetailsUpdated,
  SubmissionReceived,
  ValidatorUpdated
} from "../generated/BTCUSD/BTCUSD"
import { ExampleEntity } from "../generated/schema"

export function handleAddedAccess(event: AddedAccess): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (entity == null) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.user = event.params.user

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.allocatedFunds(...)
  // - contract.availableFunds(...)
  // - contract.checkEnabled(...)
  // - contract.decimals(...)
  // - contract.description(...)
  // - contract.getAdmin(...)
  // - contract.getAnswer(...)
  // - contract.getOracles(...)
  // - contract.getRoundData(...)
  // - contract.getTimestamp(...)
  // - contract.hasAccess(...)
  // - contract.latestAnswer(...)
  // - contract.latestRound(...)
  // - contract.latestRoundData(...)
  // - contract.latestTimestamp(...)
  // - contract.linkToken(...)
  // - contract.maxSubmissionCount(...)
  // - contract.maxSubmissionValue(...)
  // - contract.minSubmissionCount(...)
  // - contract.minSubmissionValue(...)
  // - contract.oracleCount(...)
  // - contract.oracleRoundState(...)
  // - contract.owner(...)
  // - contract.paymentAmount(...)
  // - contract.requestNewRound(...)
  // - contract.restartDelay(...)
  // - contract.timeout(...)
  // - contract.validator(...)
  // - contract.version(...)
  // - contract.withdrawablePayment(...)
}

export function handleAnswerUpdated(event: AnswerUpdated): void {}

export function handleAvailableFundsUpdated(
  event: AvailableFundsUpdated
): void {}

export function handleCheckAccessDisabled(event: CheckAccessDisabled): void {}

export function handleCheckAccessEnabled(event: CheckAccessEnabled): void {}

export function handleNewRound(event: NewRound): void {}

export function handleOracleAdminUpdateRequested(
  event: OracleAdminUpdateRequested
): void {}

export function handleOracleAdminUpdated(event: OracleAdminUpdated): void {}

export function handleOraclePermissionsUpdated(
  event: OraclePermissionsUpdated
): void {}

export function handleOwnershipTransferRequested(
  event: OwnershipTransferRequested
): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleRemovedAccess(event: RemovedAccess): void {}

export function handleRequesterPermissionsSet(
  event: RequesterPermissionsSet
): void {}

export function handleRoundDetailsUpdated(event: RoundDetailsUpdated): void {}

export function handleSubmissionReceived(event: SubmissionReceived): void {}

export function handleValidatorUpdated(event: ValidatorUpdated): void {}
