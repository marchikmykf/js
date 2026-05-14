const usdPayment = 3500;
const rateUah = 43.7;
const feePercent = 0.005;

const convertedSum = usdPayment * rateUah;
const bankFee = convertedSum * feePercent;
const resultAmount = convertedSum - bankFee;

console.log(`Після виконання проєкту, буде нараховано ${resultAmount} грн з урахуванням комісії банку!`);