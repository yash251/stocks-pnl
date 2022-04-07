var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var checkBtn = document.querySelector("#check-btn")
var output = document.querySelector("#output");

function calculateProfitAndLoss(initial, quantity, current) {
    if (initial > current) {
        // loss logic
        var loss = (initial - current) * quantity;
        var lossPercentage = ((loss / initial) * 100).toFixed(2); 
        output.innerText = (`loss is ${loss} which is ${lossPercentage}% of initial`);
    } 
    else if (initial < current) {
        // profit logic
        var profit = (current - initial) * quantity;
        var profitPercentage = ((profit / initial) * 100).toFixed(2);
        output.innerText = (`profit is ${profit} which is ${profitPercentage}% of initial`);
    } 
    else {
        output.innerText = (`no profit no loss`);
    }
}

function clickHandler() {
    var ip = initialPrice.value;
    var qty = stocksQuantity.value;
    var curr = currentPrice.value;

    calculateProfitAndLoss(ip, qty, curr)
}

checkBtn.addEventListener('click', clickHandler);

