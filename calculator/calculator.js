window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  let rateInput = document.getElementById("loan-rate").value;
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: + setRateDecimal(rateInput)
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let amountInput = document.getElementById("loan-amount");
  let yearsInput = document.getElementById("loan-years");
  let rateInput = document.getElementById("loan-rate");
  let monthlyPaymentUI = document.getElementById("monthly-payment");

  amountInput.value = 100000;
  yearsInput.value = 30;
  rateInput.value = 5;

  let rate =  setRateDecimal(rateInput.value);

  let loanValues = {
    amount: parseInt(amountInput.value),
    years: parseInt(yearsInput.value),
    rate: rate
  }
  monthlyPaymentUI.innerText = `$${calculateMonthlyPayment(loanValues)}`;
}


// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let monthlyPaymentUI = document.getElementById("monthly-payment");
  monthlyPaymentUI.innerText = monthly;
}


// Get the current values from the UI
// Update the monthly payment
function update() {
  let monthlyPayment = `$${calculateMonthlyPayment(getCurrentUIValues())}`;
  updateMonthly(monthlyPayment);
}


// calculate the interest rate as a decimal 
function setRateDecimal(num) {
  num = Math.round(num * 100) / 100;
  return (Math.round((num / 100) * 10000) / 10000);
} 

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {

  if(!Number.isFinite(values.amount) || !Number.isFinite(values.years) || !Number.isFinite(values.rate) || values.years === 0) {
    return 0;
  } else if (values.rate === 0) {
    return Math.round(values.amount / (values.years * 12));
  } else {
    let principle = values.amount;
    let perioidicInterest = values.rate / 12;
    let numberOfPayments = values.years * 12;
    let monthyPayment = (principle * perioidicInterest) / (1 - ((1 + perioidicInterest)**(-Math.abs(numberOfPayments))));
    return Math.round(monthyPayment);
  }
}


