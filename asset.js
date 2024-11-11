// Task 1 

//Define and export an array of assets
const assets = [
    { id: 1, name: "Stock A", type: "stock", price: 150, quantity: 60 },
    { id: 2, name: "Bond B", type: "bond", price: 230, quantity: 50 },
    { id: 3, name: "Stock C", type: "stock", price: 100, quantity: 70 }
];
//function that returns asset details based on the provided id
function getAssetById(id) {
    return assets.find(asset => asset.id === id);
}

module.exports = { assets, getAssetById };
