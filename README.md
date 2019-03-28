# MQService

Within code to make it better understandable and maintainable, and abbreviations when these messages are written to files for storage or sharing using files.

```
{
  "from": "Simulation Executor|Trading Cokpit|Simulation Engine|Trading Assistant", // --> "SEX|COK|SEN|ASS"
  "to": "Simulation Executor|Trading Cokpit|Simulation Engine|Trading Assistant", // --> "SEX|COK|SEN|ASS"
  "messageType": "Order Authorization Request|Order Authorization Response|Order|Order Update", // --> "ARQ|ARS|ORD|UPT"
  "messageId": 12345, // This is a unique Id within the system that originated the message.
  "order": {
    "exchange": "Poloniex",
    "market": "BTC/USDST",
    "marginEnabled": true, // true | false --> 1|0
    "creator": "Simulation Engine|Human Trader", // --> "SE|HT"
    "type": "Market|Limit|Stop", // --> "M|L|S"
    "orderId": 31231, // This is a unique Id within the system that originated the message.
    "executionType": "Stop|Take Profit", // --> "SP|TP"
    "dateTime": 1551579300000,
    "rate": 6368.10044495,
    "stop": 6463.62195162425,
    "takeProfit": 6463.62195162425,
    "direction": "Sell|Buy", // --> "S|B"
    "size": 0.001,
    "status": "Signaled|Authorized|Not Authorized|Executing|Cancelled|Filled|Partially Filled", // --> "SIG|AUT|NAT|EXE|CAN|FIL|PRT"
    "sizeFilled": 0.00045
  }
}
```

Record Example at to be written on files.

```
let record = ["SE", "TA", "ARQ", 23234, ["Poloniex", "BTC/USDST",0,"SE", "L", 12345, "S", 1551579300000, 6368.10044495, 6368.10044495, 6368.10044495, "S", 0.001, "FIL", 0.00045]];
```
