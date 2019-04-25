
//Use code below to add up all expenses and set the inner text to the total
let money = document.querySelector('.money')
let num = 248
money.innerText = `$${num}`

function addListItem(event) {
    let list = document.querySelector('.expenseList')
    let expenseName = document.querySelector('.nameInput')
    let expenseAmount = document.querySelector('.amountInput')
    //selecting the inputs and getting their data store in a variable
    let listItem = document.createElement('li')
    let createSpanName = document.createElement('span')
    let createSpanAmount = document.createElement('span')
    let trashIcon = document.createElement('img')
    let moneyDiv = document.createElement('div')
    //creating all the elements for list item above

    createSpanName.innerText = expenseName.value
    createSpanAmount.innerText = `$${expenseAmount.value}`
    trashIcon.src = './assets/trash_can.svg'

    listItem.classList.add('expenseItem')
    moneyDiv.classList.add('moneyTrash')
    inputText.classList.add('expenseItemText')
    amountText.classList.add('expenseItemText')
    amountText.classList.add('expenseMoney')
    moneyDiv.appendChild(expenseAmount, trashIcon)
    listItem.appendChild(inputText, moneyDiv)

    list.appendChild(listItem)

    console.log('hey')
}

