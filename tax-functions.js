

function main()
{
    var chargeAmount;
    var tip = parseFloat(.15);
    var tipAmount;
    var tax = parseFloat(.07);
    var taxAmount;
    var withTax;
    var totalAmount;

    chargeAmount = getChargeAmount(chargeAmount);
    taxAmount = calcTaxAmount(chargeAmount, tax, taxAmount);
    withTax = calcWithTax(chargeAmount, taxAmount, withTax);
    tipAmount = calcTipAmount(withTax, tip, tipAmount);
    totalAmount = calcTotalAmount(withTax, tipAmount, totalAmount);
    tip = cleanTip(tip);
    tax = cleanTax(tax);
    taxAmount = cleanTaxAmount(taxAmount);
    tipAmount = cleanTipAmount(tipAmount);
    totalAmount = cleanTotalAmount(totalAmount);
    displayOutput(tip, tax, taxAmount, tipAmount, totalAmount);
}

function getChargeAmount(chargeAmount)
{
    return chargeAmount = parseFloat(prompt("Enter charge of food:"));
}


function calcTaxAmount(chargeAmount, tax, taxAmount)
{
    return taxAmount = (chargeAmount * tax);
}

function calcWithTax(chargeAmount, taxAmount, withTax)
{
    return withTax = parseFloat(chargeAmount + taxAmount);
}

function calcTipAmount(withTax, tip, tipAmount)
{
    return tipAmount = (withTax * tip);
}

function calcTotalAmount(withTax, tipAmount, totalAmount)
{
    return totalAmount = (withTax + tipAmount);
}

function cleanTip(tip)
{
    return tip = (tip * 100).toFixed(0);
}

function cleanTax(tax)
{
    return tax = (tax * 100).toFixed(0);
    
}

function cleanTaxAmount(taxAmount)
{
    return taxAmount = taxAmount.toFixed(2);
}

function cleanTipAmount(tipAmount)
{
    return tipAmount = tipAmount.toFixed(2);
}

function cleanTotalAmount(totalAmount)
{
    return totalAmount = totalAmount.toFixed(2);
}

function displayOutput(tip, tax, taxAmount, tipAmount, totalAmount)
{
    alert("With the sales tax of " + tax + "% you will pay: $" + taxAmount + " in tax." +
    "\nWith the tip of " + tip + "% you will pay: $" + tipAmount + " in tip." +
    "\nIn total, you will pay: $" + totalAmount + " for your meal.");
}
main();




