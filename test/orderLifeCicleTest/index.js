const {
  MESSAGE_ENTITY, MESSAGE_TYPE, ORDER_CREATOR, ORDER_TYPE, ORDER_OWNER, ORDER_DIRECTION,
  ORDER_STATUS, ORDER_EXIT_OUTCOME
} = require("../../orderLifeCicle/types")

const { createRecord, getRecord, getExpandedRecord } = require("../../orderLifeCicle/index")

testCreateRecord()
testGetRecord()
testGetExpandedRecord()

function testCreateRecord() {
  let expected = JSON.stringify([
    90,
    "EN",
    "EX",
    "ORD",
    1553850096262,
    [
      1,
      "S",
      155385234234,
      "U",
      "Poloniex",
      "BTC/USDT",
      0,
      "L",
      6286.707,
      6381.007,
      0,
      "Sell",
      0,
      "SIG",
      0,
      "SL"
    ]
  ])

  let record = createRecord(90, MESSAGE_ENTITY.SimulationEngine, MESSAGE_ENTITY.SimulationExecutor,
    MESSAGE_TYPE.Order, 1553850096262, 1, ORDER_CREATOR.SimulationEngine, 155385234234, ORDER_OWNER.User,
    "Poloniex", "BTC/USDT", 0, ORDER_TYPE.Limit, 6286.707, 6381.007, 0, ORDER_DIRECTION.Sell, 0,
    ORDER_STATUS.Signaled, 0, ORDER_EXIT_OUTCOME.StopLoss)

  let result = JSON.stringify(record)

  console.log("testGetRecord: " + (expected === result))

}

function testGetRecord() {
  let fileContent = '[90, "EN", "EX", "ORD", 1553850096262, [1, "S", 155385234234, "U", "Poloniex", "BTC/USDT", 0, "L", 6286.707, 6381.007, 0, "Sell", 0, "SIG", 0, "SL"]]'

  let expected = JSON.stringify({
    "id": 90,
    "from": "EN",
    "to": "EX",
    "messageType": "ORD",
    "dateTime": 1553850096262,
    "order": {
      "id": 1,
      "creator": "S",
      "dateTime": 155385234234,
      "owner": "U",
      "exchange": "Poloniex",
      "market": "BTC/USDT",
      "marginEnabled": 0,
      "type": "L",
      "rate": 6286.707,
      "stop": 6381.007,
      "takeProfit": 0,
      "direction": "Sell",
      "size": 0,
      "status": "SIG",
      "sizeFilled": 0,
      "exitOutcome": "SL"
    }
  })

  let record = getRecord(fileContent)
  let result = JSON.stringify(record)

  console.log("testGetRecord: " + (expected === result))

}

function testGetExpandedRecord() {
  let fileContent = '[90, "EN", "EX", "ORD", 1553850096262, [1, "S", 155385234234, "U", "Poloniex", "BTC/USDT", 0, "L", 6286.707, 6381.007, 0, "Sell", 0, "SIG", 0, "SL"]]'

  let expected = JSON.stringify({
    "id": 90,
    "from": "Simulation Engine",
    "to": "Simulation Executor",
    "messageType": "Order",
    "dateTime": 1553850096262,
    "order": {
      "id": 1,
      "creator": "Simulation Engine",
      "dateTime": 155385234234,
      "owner": "User",
      "exchange": "Poloniex",
      "market": "BTC/USDT",
      "marginEnabled": 0,
      "type": "Limit",
      "rate": 6286.707,
      "stop": 6381.007,
      "takeProfit": 0,
      "direction": "Sell",
      "size": 0,
      "status": "Signaled",
      "sizeFilled": 0,
      "exitOutcome": "Stop Loss"
    }
  })

  let expandedRecord = getExpandedRecord(fileContent)
  let result = JSON.stringify(expandedRecord)

  console.log("testGetExpandedRecord: " + (expected === result))
}

