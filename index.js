let price = document.getElementById('price');
let discount = document.getElementById('discount');
let submit = document.getElementById('submit');
let discountPrice = document.getElementById('discountPrice');
let saving = document.getElementById('saving')
let totalPrice;
let discountAmount;

    

submit.onclick = function () {

    price = Number(price.value);
    discount = Number(discount.value);
    
    if (isNaN(price) || isNaN(discount) || price < 0 || discount < 0 || discount > 100) {
        discountPrice.textContent = `Please enter a valid rate.`;
        saving.textContent = ``;
    }
    else {
        discountAmount = price * (discount/100);
        totalPrice = price - discountAmount;
        discountPrice.textContent = `Total price after discount is $${totalPrice}.`;
        saving.textContent = `You saved $${discountAmount}.`;
    }

    
}


 