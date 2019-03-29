
let mqServiceClient = newMqServiceClient()

let messageString = '[90, "SEN", "SEX", "Order", 1553850096262, [1, "SE", "Node/Team/User", "Poloniex", "BTC/USDT", 0, "L", 6286.707, 6381.007605000001, 0, "Sell", "All", "Signaled", 0, ""]]'
let response = mqServiceClient.inflateMessage(messageString)

console.log(response)

function newMqServiceClient() {
  let thisObject = {
    inflateMessage: inflateMessage,
    deflateMessage: deflateMessage
  }
  return thisObject

  function deflateMessage(pMessageString) { }

  function inflateMessage(pMessageString) {
    let mqMessage = JSON.parse(pMessageString)

    let message = {
      id: mqMessage[0],
      from: mqMessage[1],
      to: mqMessage[2],
      messageType: mqMessage[3],
      dateTime: mqMessage[4],
      order: {
        id: mqMessage[5][0],
        creator: mqMessage[5][1],
        dateTime: mqMessage[5][2],
        owner: mqMessage[5][3],
        exchange: mqMessage[5][4],
        market: mqMessage[5][5],
        marginEnabled: mqMessage[5][6],
        type: mqMessage[5][7],
        rate: mqMessage[5][8],
        stop: mqMessage[5][9],
        takeProfit: mqMessage[5][10],
        direction: mqMessage[5][11],
        size: mqMessage[5][12],
        status: mqMessage[5][13],
        sizeFilled: mqMessage[5][14],
        exitOutcome: mqMessage[5][15]
      }
    }

    message.fron = inflateSenderReceiver(message.from)
    message.to = inflateSenderReceiver(message.to)
    message.type = inflateMessageType(message.type)
    message.order.creator = inflateOrderCreator(message.order.creator)
    message.order.status = inflateOrderStatus(message.order.status)

    return message

    function inflateSenderReceiver(pText) {
      switch (pText) {
        case 'SEX': {
          return 'Simulation Executor'
          break
        }
        case 'COK': {
          return 'Trading Cockpit'
          break
        }
        case 'SEN': {
          return 'Simulation Engine'
          break
        }
        case 'ASS': {
          return 'Trading Assistant'
          break
        }
        default: {
          return pText
        }
      }
    }

    function inflateMessageType(pText) {
      switch (pText) {
        case 'HBT': {
          return 'Heart Beat'
          break
        }
        case 'ARQ': {
          return 'Order Authorization Request'
          break
        }
        case 'ARS': {
          return 'Order Authorization Response'
          break
        }
        case 'ORD': {
          return 'Order'
          break
        }
        case 'UPT': {
          return 'Order Update'
          break
        }
        default: {
          return pText
        }
      }
    }

    function inflateOrderCreator(pText) {
      switch (pText) {
        case 'SE': {
          return 'Simulation Engine'
          break
        }
        case 'HT': {
          return 'Human Trader'
          break
        }
        default: {
          return pText
        }
      }
    }

    function inflateOrderType(pText) {
      switch (pText) {
        case 'M': {
          return 'Market'
          break
        }
        case 'L': {
          return 'Limit'
          break
        }
        case 'S': {
          return 'Stop'
          break
        }
        default: {
          return pText
        }
      }
    }

    function inflateOrderStatus(pText) {
      switch (pText) {
        case 'SIG': {
          return 'Signaled'
          break
        }
        case 'MAU': {
          return 'Manual Authorized'
          break
        }
        case 'MNA': {
          return 'Manual Not Authorized'
          break
        }
        case 'AAU': {
          return 'Auto Authorized'
          break
        }
        case 'ANA': {
          return 'Auto Not Authorized'
          break
        }
        case 'EXE': {
          return 'Executing'
          break
        }
        case 'CAN': {
          return 'Cancelled'
          break
        }
        case 'FIL': {
          return 'Filled'
          break
        }
        case 'PRT': {
          return 'Partially Filled'
          break
        }
        case 'DIS': {
          return 'Discarded'
          break
        }
        case 'PLA': {
          return 'Placed'
          break
        }
        default: {
          return pText
        }
      }
    }
  }
}
