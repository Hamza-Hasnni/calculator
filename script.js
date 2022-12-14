const input = document.getElementById('resualt')
const equal = document.getElementById('equal')
let addClicked = false
let divCliceked = false
let multiClicked = false
let subsClicked = false
let firstOperation = null
let secondOperation = null
let first = null
let second = null
let lastOperation = null

const zero = () => {
  if (input.value == 'error') {
    ac()
    input.value = input.value + 0
  } else if (
    addClicked == true ||
    multiClicked == true ||
    divCliceked == true ||
    subsClicked == true
  ) {
    input.value = parseFloat(input.value) * +0 + 0
    addClicked = false
    divCliceked = false
    multiClicked = false
    subsClicked = false
  } else {
    input.value = input.value + 0
  }
}
const one = () => {
  if (input.value == 'error') {
    ac()
    input.value = input.value + 1
  } else if (
    addClicked == true ||
    multiClicked == true ||
    divCliceked == true ||
    subsClicked == true
  ) {
    input.value = parseFloat(input.value) * +0 + 1
    addClicked = false
    divCliceked = false
    multiClicked = false
    subsClicked = false
  } else {
    input.value = input.value + 1
  }
}
const two = () => {
  if (input.value == 'error') {
    ac()
    input.value = input.value + 2
  } else if (
    addClicked == true ||
    multiClicked == true ||
    divCliceked == true ||
    subsClicked == true
  ) {
    input.value = parseFloat(input.value) * +0 + 2
    addClicked = false
    divCliceked = false
    multiClicked = false
    subsClicked = false
  } else {
    input.value = input.value + 2
  }
}
const three = () => {
  if (input.value == 'error') {
    ac()
    input.value = input.value + 3
  } else if (
    addClicked == true ||
    multiClicked == true ||
    divCliceked == true ||
    subsClicked == true
  ) {
    input.value = parseFloat(input.value) * +0 + 3
    addClicked = false
    divCliceked = false
    multiClicked = false
    subsClicked = false
  } else {
    input.value = input.value + 3
  }
}
const four = () => {
  if (input.value == 'error') {
    ac()
    input.value = input.value + 4
  } else if (
    addClicked == true ||
    multiClicked == true ||
    divCliceked == true ||
    subsClicked == true
  ) {
    input.value = parseFloat(input.value) * +0 + 4
    addClicked = divCliceked = false
    multiClicked = false
    subsClicked = false
  } else {
    input.value = input.value + 4
  }
}
const five = () => {
  if (input.value == 'error') {
    ac()
    input.value = input.value + 5
  } else if (
    addClicked == true ||
    multiClicked == true ||
    divCliceked == true ||
    subsClicked == true
  ) {
    input.value = parseFloat(input.value) * +0 + 5
    addClicked = false
    divCliceked = false
    multiClicked = false
    subsClicked = false
  } else {
    input.value = input.value + 5
  }
}
const six = () => {
  if (input.value == 'error') {
    ac()
    input.value = input.value + 6
  } else if (
    addClicked == true ||
    multiClicked == true ||
    divCliceked == true ||
    subsClicked == true
  ) {
    input.value = parseFloat(input.value) * +0 + 6
    addClicked = false
    divCliceked = false
    multiClicked = false
    subsClicked = false
  } else {
    input.value = input.value + 6
  }
}
const seven = () => {
  if (input.value == 'error') {
    ac()
    input.value = input.value + 7
  } else if (
    addClicked == true ||
    multiClicked == true ||
    divCliceked == true ||
    subsClicked == true
  ) {
    input.value = parseFloat(input.value) * +0 + 7
    addClicked = false
    divCliceked = false
    multiClicked = false
    subsClicked = false
  } else {
    input.value = input.value + 7
  }
}
const eight = () => {
  if (input.value == 'error') {
    ac()
    input.value = input.value + 8
  } else if (
    addClicked == true ||
    multiClicked == true ||
    divCliceked == true ||
    subsClicked == true
  ) {
    input.value = parseFloat(input.value) * +0 + 8
    addClicked = false
    divCliceked = false
    multiClicked = false
    subsClicked = false
  } else {
    input.value = input.value + 8
  }
}
const nine = () => {
  if (input.value == 'error') {
    ac()
    input.value = input.value + 9
  } else if (
    addClicked == true ||
    multiClicked == true ||
    divCliceked == true ||
    subsClicked == true
  ) {
    input.value = parseFloat(input.value) * +0 + 9
    addClicked = false
    divCliceked = false
    multiClicked = false
    subsClicked = false
  } else {
    input.value = input.value + 9
  }
}
/********************* Operation ********************** */
const add = () => {
  if (first == null && second == null) {
    first = input.value
  } else if (first != null && second == null) {
    second = parseFloat(first) + parseFloat(input.value)
    first = second
    input.value = second
  } else if (first != null && second != null) {
    second = parseFloat(first) + parseFloat(input.value)
    first = second
    input.value = second
  }
  addClicked = true
  lastOperation = '+'
  console.log('first = ' + first)
  console.log('second = ' + second)
}
const division = () => {
  if (first == null && second == null) {
    first = input.value
  } else if (first != null && input.value == 0) {
    input.value = 'error'
  } else if (first != null && second == null) {
    second = parseFloat(first) / parseFloat(input.value)
    first = second
    input.value = second
  } else if (first != null && second != null) {
    second = parseFloat(first) / parseFloat(input.value)
    first = second
    input.value = second
  }
  divCliceked = true
  lastOperation = '/'
  console.log('first = ' + first)
  console.log('second = ' + second)
}
const multiplication = () => {
  if (first == null && second == null) {
    first = input.value
  } else if (first != null && second == null) {
    second = parseFloat(first) * parseFloat(input.value)
    first = second
    input.value = second
  } else if (first != null && second != null) {
    second = parseFloat(first) * parseFloat(input.value)
    first = second
    input.value = second
  }
  multiClicked = true
  lastOperation = '*'
  console.log('first = ' + first)
  console.log('second = ' + second)
}
const subtraction = () => {
  if (first == null && second == null) {
    first = input.value
  } else if (first != null && second == null) {
    second = parseFloat(first) - parseFloat(input.value)
    first = second
    input.value = second
  } else if (first != null && second != null) {
    second = parseFloat(first) - parseFloat(input.value)
    first = second
    input.value = second
  }
  subsClicked = true
  lastOperation = '-'
  console.log('first = ' + first)
  console.log('second = ' + second)
}

/*******************Helpres****************** */
const ac = () => {
  input.value = null
  first = null
  second = null
  addClicked = false
  divCliceked = false
  multiClicked = false
  subsClicked = false
}

const dot = () => {
  if (input.value.includes('.')) {
    return
  } else if (input.value == null) {
    input.value = '0.'
  }
  input.value = input.value + '.'
}
const negative = () => {
  input.value = parseFloat(input.value) * -1
}
const del = () => {
  if (input.value == null) {
    return
  } else {
    input.value = input.value.toString().slice(0, -1)
  }
}

const percent = () => {
  input.value = parseFloat(input.value) / 100
}

/**************************************** */

const resualts = () => {
  equal.addEventListener('click', function () {
    if (lastOperation == null) {
      return
    } else if (second == null && lastOperation == '+') {
      input.value = parseFloat(first) + parseFloat(input.value)
    } else if (second != null && lastOperation == '+') {
      input.value = parseFloat(second) + parseFloat(input.value)
    } else if (second == null && lastOperation == '/') {
      input.value = parseFloat(first) / parseFloat(input.value)
    } else if (second != null && lastOperation == '/') {
      input.value = parseFloat(second) / parseFloat(input.value)
    } else if (
      (first != null && second == null) ||
      (input.value == 0 && lastOperation == '/')
    ) {
      input.value = 'error'
    }
    first = null
    second = null
    lastOperation = null
  })
}

resualts()
