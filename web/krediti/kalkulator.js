document.addEventListener('DOMContentLoaded', function () {
    const loanTypeSelect = document.getElementById('loan-type');
    const amountInput = document.getElementById('amount');
    const yearsInput = document.getElementById('years');

    loanTypeSelect.addEventListener('change', function () {
        const selectedOption = loanTypeSelect.options[loanTypeSelect.selectedIndex];
        const minAmount = parseFloat(selectedOption.getAttribute('data-min-amount'));
        const maxAmount = parseFloat(selectedOption.getAttribute('data-max-amount'));
        const minYears = parseInt(selectedOption.getAttribute('data-min-years'));
        const maxYears = parseInt(selectedOption.getAttribute('data-max-years'));

        amountInput.value = '';
        yearsInput.value = '';

        amountInput.setAttribute('min', minAmount);
        amountInput.setAttribute('max', maxAmount);
        yearsInput.setAttribute('min', minYears);
        yearsInput.setAttribute('max', maxYears);
    });
});

function calculateLoan() {
    const amount = parseFloat(document.getElementById('amount').value);
    const interestRate = parseFloat(document.getElementById('loan-type').value);
    const years = parseInt(document.getElementById('years').value);

    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = years * 12;
    const monthlyPayment = (amount * monthlyInterestRate) / (1 - Math.pow((1 + monthlyInterestRate), -numberOfPayments));
    const totalPayment = monthlyPayment * numberOfPayments;
    const totalInterest = totalPayment - amount;

    document.getElementById('monthly-payment').innerText = monthlyPayment.toFixed(2);
    document.getElementById('total-payment').innerText = totalPayment.toFixed(2);
    document.getElementById('total-interest').innerText = totalInterest.toFixed(2);
}
