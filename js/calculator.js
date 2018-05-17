let dropdownMenu = document.querySelector('div.ui.pointing.dropdown.link.item');
let selectedDropdownMenuItem = document.querySelector('span.default.text');
let targetRevenueInput = document.querySelector('body > div:nth-child(2) > div > span.ui.small.input.item > input[type="number"]');
let targetRevenueInputElement = document.querySelector('body > div:nth-child(2) > div > span.ui.small.input.item');
let resultInput = document.querySelector('body > div:nth-child(2) > div > span:nth-child(3) > input[type="text"]');
let errorFlashMessage = document.querySelector('body > div:nth-child(2) > div.ui.negative.message.hidden');
let closeFlashMessageIcon = document.querySelector('body > div:nth-child(2) > div.ui.negative.message > i');
let paypal = new Processor('PayPal', .971, .30);
let stripe = new Processor('Stripe', .971, .30);
let square = new Processor('Square', .965, .15);

function Processor(name, percentage, fixed) {
  this.name = name;
  this.yield = Number(percentage);
  this.fixed = Number(fixed);
  this.calculator = (targetRevenue) => {
    let price;
    targetRevenue = Number(targetRevenueInput.value);
    if (targetRevenue > 0.01 || targetRevenue === "") {
      price = (targetRevenue + this.fixed) / this.yield;
      price = price.toFixed(2);
      resultInput.value = price;
    } else {
      targetRevenueInputElement.classList.add("error");
      errorFlashMessage.classList.remove("hidden");

      closeFlashMessageIcon.addEventListener("click", () => {
        errorFlashMessage.classList.toggle("hidden");
        targetRevenueInputElement.classList.toggle("error");
      });
    }
  }
}


function selected(processor) {
  switch (processor.target.textContent) {
    case "PayPal":
      paypal.calculator();
      break;
    case "Stripe":
      stripe.calculator();
      break;
    case "Square":
      square.calculator();
      break;
    default:
    // Do nothing.
  }
}



dropdownMenu.addEventListener('click', selected);
