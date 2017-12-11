'use strict'

const Model = require('../model')

class Trade extends Model {
  serialize () {
    return [
      this.id,
      this.pair,
      this.mtsCreate,
      this.orderID,
      this.execAmount,
      this.execPrice,
      this.orderType,
      this.orderPrice,
      this.maker ? 1 : 0,
      this.fee,
      this.feeCurrency
    ]
  }

  static unserialize (arr) {
    if (arr.length > 8) { // Funding Ticker
      return {
        seq: arr[0],
        id: arr[1],
        orderID: arr[4],
        pair: arr[2],
        mtsCreate: arr[3],
        execAmount: arr[5],
        execPrice: arr[6],
        orderType: arr[7],
        orderPrice: arr[8],
        fee: arr[9],
        feeCurrency: arr[10]
      };
    } else {
      return {
        seq: arr[0],
        id: arr[1],
        orderID: arr[4],
        pair: arr[2],
        mtsCreate: arr[3],
        execAmount: arr[5],
        execPrice: arr[6],
        orderType: arr[7],
        orderPrice: arr[8],
        fee: arr[9],
        feeCurrency: arr[10]
      };
    }
  }
}

module.exports = Trade
