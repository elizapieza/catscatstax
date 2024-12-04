function calculateTax() {
    const income = parseFloat(document.getElementById('Yearly income').value);
    const status = selectElement(document.getElementById('Filing Status').value);
    Option.value = "Single";
    Option.value = "Married Filing Jointly";
    Option.value = "Married Filing Separately";
    Option.value = "Head of Household";
    const deductions = parseFloat(document.getElementById('Deductions').value);
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
    document.getElementById('result').innerText = `Estimated Tax: $${tax.toFixed(2)}`;
}