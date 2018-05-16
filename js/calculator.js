let dropdownMenu = document.querySelector('body > div:nth-child(2) > div > div');
let selectedDropdownMenuItem = document.querySelector('body > div:nth-child(2) > div > div > span.text');

let paypal = new Processor('PayPal', .029, .30);
let stripe = new Processor('Stripe', .029, .30);
let square = new Processor('Square', .035, .15);

function Processor(name, percentage, fixed) {
  this.name = name;
  this.percentage = Number(percentage);
  this.fixed = Number(fixed);
  this.calculator = (targetRevenue) => {
    console.log(`Hit the calculator method on the ${this.name} object`);
  }
}


function selected(processor) {
  switch (processor.target.textContent) {
    case "PayPal":
    case "Stripe":
      console.log(`This processor deducts 2.9% + 30¢`);
      break;
    case "Square":
      console.log(`This processor deducts 3.5% + 15¢`);
      break;
    default:
  }
}



dropdownMenu.addEventListener('click', selected);
