# binance-leaderboard-listener

A simple pnl watcher for Binance leaderboard

## Installation

```bash
npm i binance-leaderboard-listener
```

## Basic usage

```javascript
const pnlWatcher = require("binance-leaderboard-listener")

const listener = pnlWatcher.listen({
    encryptedUid: <BINANCE_ENCRYPTED_USER_ID>,
    delay: <DELAY (5000)>,
    tradeType: <TRADETYPE ("PERPETUAL" for example)>
})
listener.on('update', (data) => {
  <process data...>
})
```

## Examples

```
node examples/watch_changes.js
```
