const income_1 = 100000;
const income_2 = 200000;
const income_3 = 300000;
const income_4 = 150000;

const usdRate = 43.7;
const eurRate = 51.2;

const yearlyRevenue = income_1 + income_2 + income_3 + income_4;

const singleTax = yearlyRevenue * 0.05;
const socialTax = 18000;
const netProfitAfterTax = yearlyRevenue - singleTax - socialTax;

const charityPZ = netProfitAfterTax * 0.10;
const charityDH = netProfitAfterTax * 0.05;
const businessFund = 100000;

const savingsEur = 2500 * eurRate;
const savingsUsd = 3000 * usdRate;
const totalCurrencySavings = savingsEur + savingsUsd;

const finalAccountBalance = netProfitAfterTax - charityPZ - charityDH - businessFund - totalCurrencySavings;

console.log(`За рік Максим заробив — ${yearlyRevenue} грн`);
console.log(`Єдиний податок 5% складає ${singleTax} грн`);
console.log(`Відрахування у фонди «Повернись живим» та «Діти Героїв» складає ${charityPZ} грн та ${charityDH} грн відповідно`);
console.log(`На валютну карту сумарно відкладено ще ${totalCurrencySavings} грн`);
console.log(`Залишок на рахунку Максима складає ${finalAccountBalance} грн`);