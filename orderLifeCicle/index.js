const { MESSAGE_ENTITY, MESSAGE_TYPE, ORDER_CREATOR, ORDER_TYPE, ORDER_OWNER, ORDER_DIRECTION,
  ORDER_STATUS, ORDER_EXIT_OUTCOME } = require("./types")

function createRecord(messageId, from, to, messageType, messageDateTime, orderId, creator, orderDateTime,
  owner, exchange, market, marginEnabled, type, rate, stop, takeProfit, direction, size, status, sizeFilled, exitOutcome) {

  return [
    messageId,
    from,
    to,
    messageType,
    messageDateTime,
    [
      orderId,
      creator,
      orderDateTime,
      owner,
      exchange,
      market,
      marginEnabled,
      type,
      rate,
      stop,
      takeProfit,
      direction,
      size,
      status,
      sizeFilled,
      exitOutcome
    ]
  ]
}

function getRecord(fileContent) {
  let parsedFileContent = JSON.parse(fileContent)

  return {
    id: parsedFileContent[0],
    from: parsedFileContent[1],
    to: parsedFileContent[2],
    messageType: parsedFileContent[3],
    dateTime: parsedFileContent[4],
    order: {
      id: parsedFileContent[5][0],
      creator: parsedFileContent[5][1],
      dateTime: parsedFileContent[5][2],
      owner: parsedFileContent[5][3],
      exchange: parsedFileContent[5][4],
      market: parsedFileContent[5][5],
      marginEnabled: parsedFileContent[5][6],
      type: parsedFileContent[5][7],
      rate: parsedFileContent[5][8],
      stop: parsedFileContent[5][9],
      takeProfit: parsedFileContent[5][10],
      direction: parsedFileContent[5][11],
      size: parsedFileContent[5][12],
      status: parsedFileContent[5][13],
      sizeFilled: parsedFileContent[5][14],
      exitOutcome: parsedFileContent[5][15]
    }
  }
}

function getExpandedRecord(fileContent) {
  let parsedFileContent = JSON.parse(fileContent)

  return {
    id: parsedFileContent[0],
    from: getKeyByValue(MESSAGE_ENTITY, parsedFileContent[1]),
    to: getKeyByValue(MESSAGE_ENTITY, parsedFileContent[2]),
    messageType: getKeyByValue(MESSAGE_TYPE, parsedFileContent[3]),
    dateTime: parsedFileContent[4],
    order: {
      id: parsedFileContent[5][0],
      creator: getKeyByValue(ORDER_CREATOR, parsedFileContent[5][1]),
      dateTime: parsedFileContent[5][2],
      owner: getKeyByValue(ORDER_OWNER, parsedFileContent[5][3]),
      exchange: parsedFileContent[5][4],
      market: parsedFileContent[5][5],
      marginEnabled: parsedFileContent[5][6],
      type: getKeyByValue(ORDER_TYPE, parsedFileContent[5][7]),
      rate: parsedFileContent[5][8],
      stop: parsedFileContent[5][9],
      takeProfit: parsedFileContent[5][10],
      direction: getKeyByValue(ORDER_DIRECTION, parsedFileContent[5][11]),
      size: parsedFileContent[5][12],
      status: getKeyByValue(ORDER_STATUS, parsedFileContent[5][13]),
      sizeFilled: parsedFileContent[5][14],
      exitOutcome: getKeyByValue(ORDER_EXIT_OUTCOME, parsedFileContent[5][15])
    }
  }
}

function getKeyByValue(object, value) {
  let retrievedValue = Object.keys(object).find(key => object[key] === value)
  if (retrievedValue !== undefined) {
    retrievedValue = retrievedValue.replace(/([A-Z])/g, ' $1').trim()
  }
  else {
    throw new Error("The property is not valid: " + value + ". Available values: " + JSON.stringify(Object.values(object)))
  }
  return retrievedValue
}

module.exports = {
  createRecord, getRecord, getExpandedRecord
}
