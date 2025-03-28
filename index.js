let price = document.getElementById('price');
let discount = document.getElementById('discount');
let submit = document.getElementById('submit');
let discountPrice = document.getElementById('discountPrice');
let x;
submit.onclick = function () {
    price = Number(price.value);
    discount = Number(discount.value);

    x = price - price * (discount/100);
    discountPrice.textContent = `Total price after discount is $${x}.`;
}


// When full price and discount rate is inserted, calculate the total price that will be paid. 