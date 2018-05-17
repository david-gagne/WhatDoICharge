let dropdownMenu = document.querySelector('body > div:nth-child(2) > div > div');
let selectedDropdownMenuItem = document.querySelector('body > div:nth-child(2) > div > div > span.text');
let targetRevenueInput = document.querySelector('body > div:nth-child(2) > div > span.ui.small.input.item > input[type="number"]');
let resultInput = document.querySelector('body > div:nth-child(2) > div > span:nth-child(3) > input[type="text"]');
let paypal = new Processor('PayPal', .971, .30);
let stripe = new Processor('Stripe', .971, .30);
let square = new Processor('Square', .965, .15);

function Processor(name, percentage, fixed) {
  this.name = name;
  this.yield = Number(percentage);
  this.fixed = Number(fixed);
  this.calculator = (targetRevenue) => {
    let price;
    // console.log(`Hit the calculator method on the ${this.name} object`);
    targetRevenue = Number(targetRevenueInput.value);
    // console.log(`You want to earn ${targetRevenue}, right?`);
    // N = (TR + PPfixed) / (1 - PP%)
    price = (targetRevenue + this.fixed) / this.yield;
    price = price.toFixed(2);
    // console.log(price);
    resultInput.value = price;

  }
}


function selected(processor) {
  switch (processor.target.textContent) {
    case "PayPal":
      // console.log(`This processor deducts 2.9% + 30¢`);
      paypal.calculator();
      break;
    case "Stripe":
      // console.log(`This processor deducts 2.9% + 30¢`);
      stripe.calculator();
      break;
    case "Square":
      // console.log(`This processor deducts 3.5% + 15¢`);
      square.calculator();
      break;
    default:
    // Do nothing.
  }
}



dropdownMenu.addEventListener('click', selected);
