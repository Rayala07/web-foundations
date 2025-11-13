const expenses = [];

const expenseNameElement = document.querySelector(".js-expense-input");
const expenseAmountElement = document.querySelector(".js-expense-amount-input");
const expenseListElement = document.querySelector(".js-expense-list");
const expenseCountElement = document.querySelector(".expense-count");
const getTotalExpenseElement = document.querySelector(".total-expense");
const expenseAddedMessageElement = document.querySelector(
  ".expense-added-message"
);

// Save expense in local Storage
function saveExpenses() {
  localStorage.setItem("expenses", JSON.stringify(expenses));
}

function loadExpenses() {
  const getSavedExpenses = localStorage.getItem("expenses");

  if (getSavedExpenses !== null) {
    const parseExpenses = JSON.parse(getSavedExpenses);

    expenses.length = 0;
    for (let i = 0; i < parseExpenses.length; i++) {
      expenses.push(parseExpenses[i]);
    }
  }

  renderExpenseItems();
  expenseCountElement.innerText = expenses.length;
  getTotalExpense();
}

function addExpense() {
  const expenseName = expenseNameElement.value;
  const expenseAmount = expenseAmountElement.value;

  // Validation
  if (expenseName === "" || expenseAmount === "" || isNaN(expenseAmount)) {
    expenseAddedMessageElement.textContent =
      "Please enter a valid expense name and amount";
    return;
  }

  expenses.push({
    expenseName,
    expenseAmount,
  });

  expenseAddedMessageElement.textContent =
    "Expense Added Successfully 😀 Check Your Expenses Section.";

  renderExpenseItems();
  expenseCountElement.innerText = expenses.length;
  getTotalExpense();
  saveExpenses();

  expenseNameElement.value = "";
  expenseAmountElement.value = "";
}

function renderExpenseItems() {
  let expenseListHTML = "";

  for (let i = 0; i < expenses.length; i++) {
    const expense = expenses[i];

    const { expenseName, expenseAmount } = expense;

    const expenseAmountClass = expenseAmount >= 5000 ? "high-expense-amount" : "expense-amount";

    const html = `
    <div class="css-expense-item">
    <div class="css-expense-item-container">
    <p class="expense-name">${expenseName}</p>
    <p class="${expenseAmountClass}" >&#8377; ${expenseAmount}</p>
    </div>
    <button class="remove-expense-btn" onclick="removeExpense(${i})">Remove</button>
    </div>
    `;

    expenseListHTML += html;
  }
  expenseListElement.innerHTML = expenseListHTML;
}

function getTotalExpense() {
  let totalExpense = 0;
  for (let i = 0; i < expenses.length; i++) {
    const { expenseAmount } = expenses[i];
    totalExpense += parseInt(expenseAmount);
  }

  getTotalExpenseElement.innerHTML = `&#8377; ${totalExpense}`; 
}

function removeExpense(index) {
  expenses.splice(index, 1);

  renderExpenseItems();
  expenseCountElement.innerText = expenses.length;
  getTotalExpense();
  saveExpenses();
}

function sortExpensesListByAmount() {
  expenses.sort(function (a, b) {
    return parseInt(b.expenseAmount) - parseInt(a.expenseAmount);
  });

  renderExpenseItems();
  saveExpenses();
}

function sortExpensesListByName() {
  expenses.sort(function (a, b) {
    return a.expenseName
      .toLowerCase()
      .localeCompare(b.expenseName.toLowerCase());
  });

  renderExpenseItems();
}

loadExpenses();
