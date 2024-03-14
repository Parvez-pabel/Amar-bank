// log in button event handler
const logInbtn = document.getElementById('btnSubmit');

logInbtn.addEventListener("click", ()=>{
  const logArea = document.getElementById("logArea");
  logArea.style.display = "none";
  const transArea = document.getElementById("transArea");
  transArea.style.display ="block";
});

// amount submit button event handler
const adddepositAmountbtn = document.getElementById("adddepositAmountbtn");

adddepositAmountbtn.addEventListener("click",()=>{
//  const depositAmount = document.getElementById("depositAmount").value;
//  const dipositAmountDgt = parseFloat(depositAmount);
const dipositAmountDgt = getInputNumber("depositAmount");

 // deposit balance board

// const currentDeposit= document.getElementById("currentDeposit").innerText;
// const currentDepositNumber = parseFloat(currentDeposit);
// const totalDeposit = dipositAmountDgt + currentDepositNumber;
// document.getElementById("currentDeposit").innerText = totalDeposit;

// Total balance board

// const currentBalance = document.getElementById("currentBalance").innerText;
// const currentBalanceNumber = parseFloat(currentBalance);
// const totalBalance = dipositAmountDgt + currentBalanceNumber ; 
// document.getElementById("currentBalance").innerText = totalBalance;
updateSpanTag("currentDeposit", dipositAmountDgt);
updateSpanTag("currentBalance", dipositAmountDgt);

document.getElementById("depositAmount").value = "";
 
});
// withdrawalAmount button event handler
const withdrawalAmountBtn = document.getElementById("withdrawalAmountBtn");
withdrawalAmountBtn.addEventListener("click",()=>{
  const withDrawNumber = getInputNumber("withdrawalAmount");
//  const withdrawalAmount = document.getElementById("withdrawalAmount").value;
//  const withdrawalAmountNumber = parseFloat(withdrawalAmount);
});

function getInputNumber(id){
  const Amount = document.getElementById(id).value;
  const amountNumber = parseFloat(Amount);
  return amountNumber;
}









function updateSpanTag(id, dipositAmountDgt){
const current = document.getElementById(id).innerText;
const currentNumber = parseFloat(current);
const total = dipositAmountDgt + currentNumber ; 
document.getElementById(id).innerText = total;

};
