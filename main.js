// Task 4

const { calculatePortfolioValue, getPortfolioAllocation } = require('./portfolio');
const { Transaction } = require('./transaction');

function displayPortfolioDetails() {
    console.log("Total Portfolio Value:", calculatePortfolioValue());
    console.log("Portfolio Allocation:", getPortfolioAllocation());
}

console.log("Initial Portfolio Details:");
displayPortfolioDetails();

try {
    console.log("\nPerforming Transactions...");
    new Transaction(1, "buy", 10);
    new Transaction(2, "sell", 5);
    new Transaction(3, "sell", 25);  // This will throw an error
} catch (error) {
    console.error("Transaction Error:", error.message);
}

console.log("\nUpdated Portfolio Details:");
displayPortfolioDetails();
