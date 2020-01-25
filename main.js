function getRandomDie(max) {
  return Math.floor(Math.random() * max) + 1;
}

function startGame() {
  // Get the bet ammount and check for issues
  var startBet = document.getElementById("startBet").value;
  console.log(startBet)
  if (startBet == null) {
    alert("Error: Starting bet can't be empty");
    return false;
  } else if (startBet == 0) {
    alert("Error: Starting bet can't be 0");
    return false;
  }

  // Main loop logic
  var money = startBet;
  var maxMoney = startBet;
  var maxMoneyRolls = 0
  var totalRolls = 0;
  while (money > 0) {

    // Roll the dice
    var die1 = getRandomDie(6);
    var die2 = getRandomDie(6);
    var total = die1 + die2;
    totalRolls += 1
    console.log(total);

    // Check for the roll conditions
    if (total == 7) {
      money += 4;
    } else {
      money -= 1;
    }
    if (money > maxMoney) {
      maxMoney = money;
      maxMoneyRolls = totalRolls;
    }
  }

  // Display Results
  document.getElementById('startBetAmount').innerText = startBet;
  document.getElementById('totalRolls').innerText = totalRolls;
  document.getElementById('maxMoney').innerText = maxMoney;
  document.getElementById('maxMoneyRolls').innerText = maxMoneyRolls;
  return true;
}
