// submit Button Event controller
const submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", function () {
  const loginArea = document.getElementById("login-area");
  loginArea.style.display = "none";
  const transactionArea = document.getElementById("transaction-area");
  transactionArea.style.display = "block";
});
// Deposit Button Controller
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function () {
  const depositNumber = getInputNumber("depositAmount");

  updateSpanText("currentDeposit", depositNumber);
  updateSpanText("currentBalance", depositNumber);
  document.getElementById("depositAmount").value = " ";
})

// Withdrow Button Controller
const withdrowBtn = document.getElementById("addWithdrow");
withdrowBtn.addEventListener("click", function () {
  const withdrowNumber = getInputNumber("withdrowAmount");

  updateSpanText("currentWithdrow", withdrowNumber);
  updateSpanText("currentBalance", -1 * withdrowNumber);
  document.getElementById("withdrowAmount").value = " ";
})
// function-1
function getInputNumber(id) {
  const amount = document.getElementById(id).value;
  const amountNumber = parseFloat(amount);
  return amountNumber;
}
// function-2
function updateSpanText(id, addedNumber) {
  const current = document.getElementById(id).innerText;
  const currentNumber = parseFloat(current);
  const totalAmount = addedNumber + currentNumber;
  document.getElementById(id).innerText = totalAmount;
}
