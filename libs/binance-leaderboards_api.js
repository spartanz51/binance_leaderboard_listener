const got = require('got')

const BASE_API = "https://www.binance.com/bapi/futures/v1/"

module.exports = {
    encryptedUid: null,
    tradeType: null,
    init(payload) {
        this.encryptedUid = payload.encryptedUid
        this.tradeType = payload.tradeType
    },
    async getPrice() {
        const url = BASE_API + "public/future/leaderboard/getOtherPosition"
        const payload = {
            json: {
                encryptedUid: this.encryptedUid,
                tradeType: this.tradeType
            }
        }
        const { data } = await got.post(url, payload)
            .json()
        return data
    }
}