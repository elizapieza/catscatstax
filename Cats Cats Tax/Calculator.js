function calculateTax() {
    const income = parseFloat(document.getElementById('income').value);
    let status = document.getElementById('status').value;
    let deductions = 0;
    if (status === "Single") {
        deductions = 15000;
    } else if (status === "Married Filing Jointly") {
        deductions = 30000;
    } else if (status === "Married Filing Separately") {
        deductions = 15000;
    } else if (status === "Head of Household") {
        deductions = 22500;
    }

    const taxableIncome = income - deductions;
    const tax = taxableIncome * 0.15; // Example flat tax rate
    document.getElementById('result').innerText = `Estimated Yearly Tax Due: $${tax.toFixed(2)}`;
}