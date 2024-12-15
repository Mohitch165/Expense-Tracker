document.addEventListener("DOMContentLoaded", function () {
    const expenseForm = document.getElementById("expense-form");
    const expenseNameInput = document.getElementById("expense-name");
    const expenseAmountInput =  document.getElementById("expense-amount");
    const expenseList = document.getElementById("expense-list");
    const totalAmountDisplay = document.getElementById("total-amount");

    let expenses = JSON.parse(localStorage.getItem("expense")) || [];
    //let totalAmount = calculateTotal();

    expenseForm.addEventListener("submit", (e) => {
        e.preventDefault();
        let name = expenseNameInput.value.trim();
        let amount = parseFloat(expenseAmountInput.value.trim());
        if(name !== "" && !isNaN(amount) && amount > 0){
            const newExpense = {
                id: Date.now(),
                name,
                amount
            }

            expenses.push(newExpense);
            expenseNameInput.value = "";
            expenseAmountInput.value = "";
            addToLocalStorage();
        }
    })

    function addToLocalStorage (){
        localStorage.setItem("expense", JSON.stringify(expenses));
    }
})