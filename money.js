document.getElementById('calculate-btn').addEventListener('click', function () {
    const inputIncome = document.getElementById('input-income');

    const costFood = document.getElementById('input-food');
    const costRent = document.getElementById('input-rent');
    const costClothes = document.getElementById('input-clothes');



    const inputIncomeText = inputIncome.value;
    const inputCost = parseFloat(inputIncomeText);

    const costFoodText = costFood.value;
    const foodCost = parseFloat(costFoodText);

    const costRentText = costRent.value;
    const rentCost = parseFloat(costRentText);

    const costClothesText = costClothes.value;
    const clothesCost = parseFloat(costClothesText);

    const restExpense = (foodCost + rentCost + clothesCost);

    const total = (inputCost - restExpense);

    console.log(total);

    // total cost calculation for show
    const totalExpense = document.getElementById('total-expense');

    const remainingBalanceText = totalExpense.innerText;

    const remainingBalance = parseFloat(remainingBalanceText);

    totalExpense.innerText = restExpense;

    // balance
    const totalBalance = document.getElementById('total-balance');

    const totalBalanceText = totalBalance.innerText;

    const balanceFinal = parseFloat(totalBalanceText);

    totalBalance.innerText = total;


    document.getElementById('save-button').addEventListener('click', function () {


        const saveInput = document.getElementById('save-input');
        const saveInputText = saveInput.value;
        const saveInputFinal = parseFloat(saveInputText);

        const savingAmount = (total * (saveInputFinal / 100));

        const remainingBalance = total - savingAmount;

        // saving amount
        const savingAmount1 = document.getElementById('saving-amount');

        const savingAmountText = savingAmount1.innerText;

        const savingAmount2 = parseFloat(savingAmountText);

        savingAmount1.innerText = savingAmount;
        const remainingBalanceFinal = document.getElementById('remaining-balance');

        const remainingBalanceFinalText = remainingBalanceFinal.innerText;

        remainingBalanceFinal.innerText = remainingBalance;




    })
})