function calculate(product, weight, price){
    console.log(`I need $${((weight*price)/1000).toFixed(2)} to buy ${(weight/1000).toFixed(2)} kilograms ${product}.`);
}
calculate('orange', 2500, 1.80);