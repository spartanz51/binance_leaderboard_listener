const BinanceLeaderboard = require('./binance-leaderboards_api')
const EventEmitter = require('events')
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

let last = {}
let delay = 5000

async function checkContent(ee) {
    while (1) {
        let data = null
        try {
            data = await BinanceLeaderboard.getPrice()
        } catch (e) {
            console.log('[ ERR ] Crashed (Rate limit?) ['+(new Date()).toGMTString()+"]")
            throw(e)
        }
        const result = data.otherPositionRetList
        if (last !== result) {
            last = result
            ee.emit('update', result)
        }
        await sleep(delay)
    }
}
    
module.exports = {
    listen(payload) {
        delay = payload.delay
        BinanceLeaderboard.init({
            encryptedUid: payload.encryptedUid,
            tradeType: payload.tradeType
        })
        const eventEmitter = new EventEmitter()
        checkContent(eventEmitter)
        return eventEmitter
    }
}
