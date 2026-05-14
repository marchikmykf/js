let currentBalance = 210000;

const initialRate = 43.7;

const rateMonth1 = initialRate;
const rateMonth2 = initialRate + 1;
const rateMonth3 = initialRate + 2;

const income1 = 60000;
const income2 = 2600 * rateMonth2;
const income3 = 1700 * rateMonth3;

const totalIncome = income1 + income2 + income3;

const monthlyRent = 3500;
const monthlyHardware = 4000;
const netflixUsd = 9.99;

const costsMonth1 = monthlyRent + monthlyHardware + (netflixUsd * rateMonth1);
const costsMonth2 = monthlyRent + monthlyHardware + (netflixUsd * rateMonth2);
const costsMonth3 = monthlyRent + monthlyHardware + (netflixUsd * rateMonth3);

const totalExpenses = costsMonth1 + costsMonth2 + costsMonth3;

const singleTax = 4500;
const socialContribution = totalIncome * 0.05;
const totalTaxes = singleTax + socialContribution;

const finalBalance = currentBalance + totalIncome - totalExpenses - totalTaxes;

console.log(`В цьому кварталі Максим витратив ${totalExpenses} грн`);
console.log(`Загальний дохід Максима за квартал становить ${totalIncome} грн`);
console.log(`Загальна сума податків становить ${totalTaxes} грн`);
console.log(`Отже, наприкінці кварталу залишок на рахунку Максима становить ${finalBalance} грн`);