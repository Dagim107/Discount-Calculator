let price = document.getElementById('price');
let discount = document.getElementById('discount');
let submit = document.getElementById('submit');
let discountPrice = document.getElementById('discountPrice');
let saving = document.getElementById('saving')
let x;
submit.onclick = function () {
    price = Number(price.value);
    discount = Number(discount.value);

    discount = price * (discount/100);
    x = price - discount;
    discountPrice.textContent = `Total price after discount is $${x}.`;
    saving.textContent = `You saved $${discount}.`
}


 