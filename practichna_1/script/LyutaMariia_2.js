const usdRate = 43.7;
const fixedSocialTax = 4500;
const incomeTaxRate = 0.05;

const incomeMonth1 = 68000;
const incomeMonth2 = 2600 * usdRate;
const incomeMonth3 = 1900 * usdRate;

const totalQuarterlyIncome = incomeMonth1 + incomeMonth2 + incomeMonth3;
const totalTaxAmount = (totalQuarterlyIncome * incomeTaxRate) + fixedSocialTax;

console.log(`Загальна сума доходу Максима складає ${totalQuarterlyIncome} грн.`);
console.log(`В кінці кварталу Максиму необхідно сплатити ${totalTaxAmount} грн.`);