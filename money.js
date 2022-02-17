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


})