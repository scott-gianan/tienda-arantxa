'use strict';

const quotedPrice = document.querySelector('#quoted-price');
const totalCost = document.querySelector('#total-cost');
const labor = document.querySelector('#labor');
const overheadExpense = document.querySelector('#overhead-expenses');
const p_incentive = document.querySelector('#p-incentive');
const s_royalty = document.querySelector('#s-royalty');

const quotedPriceText = document.querySelector('#quoted-price-text');
const netAmountText = document.querySelector('#net-amount-text');
const totalCostText = document.querySelector('#total-cost-text');
const laborText = document.querySelector('#labor-text');
const overheadText = document.querySelector('#overhead-text');
const subtotal1Text = document.querySelector('#subtotal1-text');
const incentiveText = document.querySelector('#incentive-text');
const royaltiesText = document.querySelector('#royalties-text');
const subtotal2Text = document.querySelector('#subtotal2-text');
const profitText = document.querySelector('#profit-text');

function calc(){
    let netAmountValue = (quotedPrice.valueAsNumber*0.98);
    let initialProfit = netAmountValue - totalCost.valueAsNumber;
    let sumOfExpenses = ((netAmountValue*(labor.valueAsNumber/100)) + (netAmountValue*(overheadExpense.valueAsNumber/100))) + ((netAmountValue*(p_incentive.valueAsNumber/100))+(netAmountValue*(s_royalty.valueAsNumber/100)));

    if(quotedPrice.value==='' || totalCost.value===''){
        return;
    }

    quotedPriceText.innerText = '₱ '+ (quotedPrice.valueAsNumber).toLocaleString();
    netAmountText.innerText = '₱ ' + (netAmountValue).toLocaleString();
    totalCostText.innerText = '₱ ' + totalCost.valueAsNumber.toLocaleString();
    laborText.innerText = '₱ ' + (netAmountValue*(labor.valueAsNumber/100)).toLocaleString();
    overheadText.innerText = '₱ ' + (netAmountValue*(overheadExpense.valueAsNumber/100)).toLocaleString();
    subtotal1Text.innerText = '₱ ' + ((netAmountValue*(labor.valueAsNumber/100)) + (netAmountValue*(overheadExpense.valueAsNumber/100))).toLocaleString();
    incentiveText.innerText = '₱ ' + (netAmountValue*(p_incentive.valueAsNumber/100)).toLocaleString();
    royaltiesText.innerText = '₱ ' + (netAmountValue*(s_royalty.valueAsNumber/100)).toLocaleString();
    subtotal2Text.innerText = '₱ ' + ((netAmountValue*(p_incentive.valueAsNumber/100))+(netAmountValue*(s_royalty.valueAsNumber/100))).toLocaleString();
    profitText.innerText = '₱ ' + (initialProfit - sumOfExpenses).toLocaleString();
}

function reset(){
    location.reload(true);
}