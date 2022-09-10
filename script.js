
/**
 * Show & hide cart
 */
const cartIcon = document.getElementById('cart');
cartIcon.addEventListener('click', function () {
    const cartList = document.getElementById('cart-list');
    if (cartList.style.display === 'none') {
        cartList.style.display = 'block';
    } else {
        cartList.style.display = 'none';
    }
})

/**
 * increase & decrease qty
 */
let bookListContainer = document.querySelector('.book-list');
let addedItemContainer = document.querySelector('.added-item-container');

bookListContainer.addEventListener('click', increaseDecreaseQty)
addedItemContainer.addEventListener('click', increaseDecreaseQty)

function increaseDecreaseQty(e) {
    if (e.target.classList.contains('plus-qty')) {
        const parentPlusQty = e.target.parentNode;
        let inputQty = parentPlusQty.querySelector('.input-qty');
        inputQty.value = Number(inputQty.value) + 1;
    }
    else if (e.target.classList.contains('minus-qty')) {
        const parentMinusQty = e.target.parentNode;
        let inputQty = parentMinusQty.querySelector('.input-qty');
        if (inputQty.value <= 1) {
            return;
        }
        inputQty.value = Number(inputQty.value) - 1;
    }
} 