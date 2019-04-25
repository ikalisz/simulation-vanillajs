
//Use code below to add up all expenses and set the inner text to the total
let money = document.querySelector('.money')
let num = 248
money.innerText = `$${num}`

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
    listItem.classList.add('expenseItem')
    let createSpanAmount = document.createElement('span')
    let expenseAmount = document.querySelector('.amountInput')
    createSpanAmount.innerText = `$${expenseAmount.value}`
    createSpanAmount.classList.add('expenseItemText')
    createSpanAmount.classList.add('expenseMoney')
    moneyDiv.appendChild(createSpanAmount)
    moneyDiv.appendChild(trashIcon)
    listItem.appendChild(createSpanName)
    listItem.appendChild(moneyDiv)
    list.appendChild(listItem)
}






function callAdd() {
    addListItem()
}