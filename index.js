
//Use code below to add up all expenses and set the inner text to the total
const money = document.querySelector('.money')
let num = 0
money.innerText = `$${num}`

let trashClick = document.getElementsByClassName('trash')

function addTrash() {
    const length = trashClick.length
    for (let i = 0; i < length; i++){
        trashClick[i].addEventListener('click', removeItem)
    }
}
console.log(trashClick)

function addListItem(event) {
    let list = document.querySelector('.expenseList')
    let listItem = document.createElement('li')
    let expenseName = document.querySelector('.nameInput')
    let createSpanName = document.createElement('span')
    let trashIcon = document.createElement('img')
    createSpanName.innerText = expenseName.value
    createSpanName.classList.add('expenseItemText')
    let moneyDiv = document.createElement('div')
    moneyDiv.classList.add('moneyTrash')
    trashIcon.src = './assets/trash_can.svg'
    trashIcon.classList.add('trash')
    listItem.classList.add('expenseItem')
    listItem.id = `${expenseName.value}`
    let createSpanAmountMoney = document.createElement('span')
    let expenseAmount = document.querySelector('.amountInput')
    let createSpanMoneySign = document.createElement('span')
    let createNumberAmount = document.createElement('span')
    createNumberAmount.innerText = expenseAmount.value
    createSpanMoneySign.innerText = '$'
    createSpanAmountMoney.append(createSpanMoneySign)
    createSpanAmountMoney.append(createNumberAmount)
    createSpanAmountMoney.classList.add('expenseItemText')
    createNumberAmount.classList.add('expenseMoney')
    moneyDiv.appendChild(createSpanAmountMoney)
    moneyDiv.appendChild(trashIcon)
    listItem.appendChild(createSpanName)
    listItem.appendChild(moneyDiv)
    list.appendChild(listItem)
    expenseName.value = ''
    expenseAmount.value = ''
}

function checkBudget() {
    let num = 0
    let amounts = document.getElementsByClassName('expenseMoney')
    for (let i = 0; i < amounts.length; i++) {
        num += +amounts[i].innerText
    }
    money.innerText = `$${num}`
}

window.addEventListener('onload', checkBudget)

function removeItem(e) {
    let eventArr = e.composedPath()
    eventArr[2].remove()
    checkBudget()
    
}

function onload() {
    addTrash()
    checkBudget()
}

window.onload = onload()

function callAdd() {
    addListItem()
    addTrash()
    checkBudget()
}