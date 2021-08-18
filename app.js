function getPin() {
  const pin = Math.round(Math.random() * 10000)
  const pinString = pin + '';
  if (pinString.length == 4) {
    return pin
  }
  else {
    // console.log('got 3 digit and calling again',pin);
    return getPin()   // recursion
  }
}

function generatePin() {
  const pin = getPin()
  document.getElementById('display-pin').value = pin;
}
// keypad 
document.getElementById('key-pad').addEventListener('click',function (event) {
  // console.log(event.target); || event.target দিলে কোনটাকে click করছি সেটা বলে দিবে 
  const number = event.target.innerText
  const calcInput = document.getElementById('typed-numbers')
  if (isNaN(number)) {
    if (number == 'C') {
      calcInput.value = '';
    }
  }
  else {
  const previousNumber = calcInput.value;
  const newNumber = previousNumber + number;
  calcInput.value = newNumber
  }

})

function verifyPin() {
  const pin = document.getElementById("display-pin").value
  const typedNumbers = document.getElementById('typed-numbers').value
  const failNotification = document.getElementById('notify-fail')
  const successNotification = document.getElementById('notify-success')

  if (pin == typedNumbers) {
    successNotification.style.display = 'block'
    failNotification.style.display='none'
  }
  else {
    failNotification.style.display = 'block'
    successNotification.style.display = 'none'
  }
}

