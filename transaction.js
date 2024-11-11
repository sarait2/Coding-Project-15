//Task 3
const { assets, getAssetById } = require('./asset');
class Transaction {
    constructor(assetId, type, quantity) {
        this.assetId = assetId;
        this.type = type;
        this.quantity = quantity;
        this.asset = getAssetById(assetId);
        this.processTransaction();
    }

    processTransaction() {
        if (this.type === 'buy') {
            this.asset.quantity += this.quantity;
        } else if (this.type === 'sell') {
            if (this.asset.quantity < this.quantity) {
                throw new Error(`Insufficient quantity for sale of ${this.asset.name}`);
            }
            this.asset.quantity -= this.quantity;
        } else {
            throw new Error('Invalid transaction type. Use "buy" or "sell".');
        }
    }
}

export default Transaction;
