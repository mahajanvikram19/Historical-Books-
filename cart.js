function addToCart(idx) {
  const found = cart.find(item => item.idx === idx);
  if (found) {
    found.qty += 1;
  } else {
    cart.push({ idx, qty: 1 });
  }
  updateCart();
}

function updateCart() {
  let total = 0, count = 0, html = '';
  if (cart.length === 0) {
    cartItems.innerHTML = '<li>Cart is empty.</li>';
    cartTotal.textContent = '';
    cartCount.textContent = '0';
    return;
  }
  cart.forEach(item => {
    const book = books[item.idx];
    total += book.price * item.qty;
    count += item.qty;
    html += `<li>
      ${book.title} x${item.qty}
      <button onclick="removeFromCart(${item.idx})" style="margin-left:10px; background:#444; color:white; border:none; border-radius:3px; cursor:pointer;">Remove</button>
      </li>`;
  });
  cartItems.innerHTML = html;
  cartTotal.textContent = "Total: ₹" + total;
  cartCount.textContent = count;
}

window.removeFromCart = function(idx) {
  cart = cart.filter(item => item.idx !== idx);
  updateCart();
}
