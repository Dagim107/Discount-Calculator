let priceInput = document.getElementById('price');
let discountInput = document.getElementById('discount');
const submit = document.getElementById('submit');
const discountPrice = document.getElementById('discountPrice');
const saving = document.getElementById('saving')
let totalPrice;
let discountAmount;

submit.onclick = function () {

    price = Number(priceInput.value);
    discount = Number(discountInput.value);

    if (isNaN(price) || isNaN(discount) || price < 0 || discount < 0 || discount > 100) {
        discountPrice.textContent = `Entry is not valid.`;
        saving.textContent = ``;
    }
    else {
        discountAmount = price * (discount/100);
        totalPrice = price - discountAmount;
        discountPrice.textContent = `Total price after discount is $${totalPrice.toFixed(2)}`;
        saving.textContent = `You saved $${discountAmount.toFixed(2)}`;
    }

}



 