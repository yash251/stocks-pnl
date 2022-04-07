var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var checkBtn = document.querySelector("#check-btn")
var output = document.querySelector("#output");
var main = document.querySelector("#main");

checkBtn.addEventListener('click', () => {
    clickHandler(initialPrice.value, stocksQuantity.value, currentPrice.value, output);
  });
  
  function clickHandler(initial, quantity, current, op) {
  
    if (initial !== "" && quantity !== "" && current !== "") {
      if (initial >= 0 && quantity >= 0 && current >= 0) {
        initial = parseFloat(initial);
        quantity = parseFloat(quantity);
        current = parseFloat(current);
        if (initial > current) {
            // loss logic
            var loss = (initial - current) * quantity;
            var lossPercentage = ((loss / initial) * 100).toFixed(2); 
          
            output.textContent = `Aww you just lost ₹${loss} which is ${lossPercentage}% of the initial price.`;
            if (parseFloat(lossPercentage) >= 50) {
                main.style.backgroundColor = "red";
          }
        } 
        else if (initial < current) {
            // profit logic
            var profit = (current - initial) * quantity;
            var profitPercentage = ((profit / initial) * 100).toFixed(2);

            output.textContent = `Yayy! You just earned profit of ₹${profit} which is ${profitPercentage}% of the initial price.`;
            if (parseFloat(profitPercentage) >= 50) {
                main.style.backgroundColor = "green";
          }
        } else {
          console.log("No profit no loss");
          output.textContent = "No profit no loss";
        }
      } else {
        console.log("Positive Amount Only");
        output.textContent = "Positive Amount Only";
      }
    } else {
      console.log("Please enter all details");
      output.textContent = "Please enter all details";
    }
  }