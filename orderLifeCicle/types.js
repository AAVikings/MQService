const MESSAGE_ENTITY = {
    SimulationExecutor: 'EX',
    TradingCokpit: 'CO',
    SimulationEngine: 'EN',
    TradingAssistant: 'AS'
  }
  const MESSAGE_TYPE = {
    HeartBeat: 'HBT',
    OrderAuthorizationRequest: 'REQ',
    OrderAuthorizationResponse: 'RES',
    Order: 'ORD',
    OrderUpdate: 'UPD'
  }
  const ORDER_CREATOR = { SimulationEngine: 'S', HumanTrader: 'H' }
  const ORDER_TYPE = { Market: 'M', Limit: 'L', Stop: 'S', }
  const ORDER_OWNER = { Node: 'N', Team: 'T', User: 'U', }
  const ORDER_DIRECTION = { Sell: 'Sell', Buy: 'Buy' }
  const ORDER_STATUS = {
    Signaled: 'SIG',
    ManualAuthorized: 'MAU',
    ManualNotAuthorized: 'MNA',
    AutoAuthorized: 'AAU',
    AutoNotAuthorized: 'ANA',
    Executing: 'EXE',
    Cancelled: 'CAN',
    Filled: 'FIL',
    PartiallyFilled: 'PRT',
    Discarded: 'DIS',
    Placed: 'PLA'
  }
  const ORDER_EXIT_OUTCOME = {  StopLoss: 'SL', TakeProfit: 'TP' }

  module.exports = {
    MESSAGE_ENTITY, MESSAGE_TYPE, ORDER_CREATOR, ORDER_TYPE, ORDER_OWNER, ORDER_DIRECTION, ORDER_STATUS, ORDER_EXIT_OUTCOME
  }
