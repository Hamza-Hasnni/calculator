const input = document.getElementById('resualt')
const equal = document.getElementById('equal')
const buttonNumber = document.querySelectorAll('.number')
const buttonOperator = document.querySelectorAll('.operator')
let addClicked = false
let divCliceked = false
let multiClicked = false
let subsClicked = false
let equalClicked = false
let secondOperation = null
let firstInput = null
let lastOperation = null

buttonNumber.forEach((button) => {
  button.addEventListener('click', () => {
    if (input.innerText == 'error') {
      ac()
      input.innerText = input.innerText + button.textContent
    } else if (input.innerText == '0') {
      return
    } else if (
      addClicked == true ||
      multiClicked == true ||
      divCliceked == true ||
      subsClicked == true ||
      equalClicked == true
    ) {
      input.innerText =
        parseFloat(input.innerText) * +0 + parseFloat(button.textContent)
      addClicked = false
      divCliceked = false
      multiClicked = false
      subsClicked = false
      equalClicked = false
    } else {
      input.innerText = input.innerText + button.textContent
    }
  })
})

/********************* Operation ********************** */
buttonOperator.forEach((button) => {
  button.addEventListener('click', () => {
    switch (button.textContent) {
      case '+':
        if (firstInput == null) {
          firstInput = input.innerText
        } else if (firstInput != null) {
          input.innerText = lastOperationRes(lastOperation)
        }
        addClicked = true
        lastOperation = '+'
        break
      case '-':
        if (firstInput == null) {
          firstInput = input.innerText
        } else {
          input.innerText = lastOperationRes(lastOperation)
        }
        subsClicked = true
        lastOperation = '-'
        break
      case '*':
        if (firstInput == null) {
          firstInput = input.innerText
        } else {
          input.innerText = lastOperationRes(lastOperation)
        }
        multiClicked = true
        lastOperation = '*'
        break
      case '/':
        if (firstInput == null) {
          firstInput = input.innerText
        } else {
          input.innerText = lastOperationRes(lastOperation)
        }
        divCliceked = true
        lastOperation = '/'
        break
      default:
        break
    }
  })
})

const lastOperationRes = (lastOperation) => {
  if (lastOperation == '+' && firstInput != null) {
    firstInput = parseFloat(firstInput) + parseFloat(input.innerText)
  } else if (lastOperation == '-' && firstInput != null) {
    firstInput = parseFloat(firstInput) - parseFloat(input.innerText)
  } else if (lastOperation == '*' && firstInput != null) {
    firstInput = parseFloat(firstInput) * parseFloat(input.innerText)
  } else if (lastOperation == '/' && firstInput != null) {
    firstInput = parseFloat(firstInput) / parseFloat(input.innerText)
  } else {
    return
  }
  lastOperation = null
  if (firstInput.toString().includes('.')) {
    return firstInput.toFixed(4)
  } else {
    return firstInput
  }
}

/*******************Helpres****************** */
const ac = () => {
  input.innerText = null
  lastOperation = null
  firstInput = null
  second = null
  addClicked = false
  divCliceked = false
  multiClicked = false
  subsClicked = false
  equalClicked = false
}

const dot = () => {
  if (input.innerText.includes('.')) {
    return
  } else if (input.innerText == null) {
    input.innerText = '0.'
  }
  input.innerText = input.innerText + '.'
}
const negative = () => {
  input.innerText = parseFloat(input.innerText) * -1
}
const del = () => {
  if (input.innerText == null) {
    return
  } else {
    input.innerText = input.innerText.toString().slice(0, -1)
  }
}

const percent = () => {
  input.innerText = parseFloat(input.innerText) / 100
}

/******************Click Resualt Button ********************** */

equal.addEventListener('click', () => {
  if (input.innerText == null || equalClicked == true) {
    return
  } else {
    input.innerText = lastOperationRes(lastOperation)
  }
  equalClicked = true
  firstInput = null
  lastOperation = null
})
