# MQService

The MQService is a process running at each Superalgos Node that enables the communication between system components in general. Components can send messages between them through this service or raise events for other to listen and react to them.

This does not mean to eliminate micro-service API access but to complement it. Well known components are better to be accesed thouth their static APIs. Components like bots instances, which are not allways running might prefer to communicate themselves through this MQService.

## Messages Formats

We are going to be slowly transitioning the current infraestructure to use this messaging service. For the first set of use cases we already know a message format we will use and is the one described in this section. Expect this to be extended / improved as we move fordward.

### Trading Orders related Messages

With this format we will enable communications between the Simulation Engine, Simulation Executor, Trading Cockpit and Trading Assistant. We expect that messages flowing between these components to be in this agreed format, while messages logged into files should go through a minification process to save space. The minification process criteria is not the about taking the messages to their absolute minimun weight but to a balance where the weight is small but at the same time understandable by a human with enough contect while reading them on a file.

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
    "orderId": 31231, // This is a unique Id within the system that originated the order.
    "executionType": "Stop|Take Profit", // --> "SP|TP"
    "dateTime": 1551579300000,
    "rate": 6368.10044495,
    "stop": 6463.62195162425,
    "takeProfit": 6463.62195162425,
    "direction": "Sell|Buy", // --> "Sell|Buy"
    "size": 0.001,
    "status": "Signaled|Authorized|Not Authorized|Executing|Cancelled|Filled|Partially Filled", // --> "SIG|AUT|NAT|EXE|CAN|FIL|PRT"
    "sizeFilled": 0.00045
  }
}
```

Record Example to be written on files.

```
let record = [
"SE", 
"TA", "
ARQ", 
23234, 
[
  "Poloniex", 
  "BTC/USDST",
  0,
  "SE", 
  "L", 
  12345, 
  "SP", 
  1551579300000, 
  6368.10044495, 
  6368.10044495, 
  6368.10044495, 
  "Sell", 
  0.001, 
  "FIL", 
  0.00045
  ]
];
```
