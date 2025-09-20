// Sample books data
const imagePath="static/images"
const books = [
  {
    title: 'Adhunik Maharashtracha Itihass',
    author: 'Vicky Mali',
    price: 299,
    image: 'https://dms.mydukaan.io/original/jpeg/5689855/1556a557-a6b2-4db1-b14e-a50625c33ac9/whatsapp-image-2022-04-09-at-11-17caa04c-22b3-4915-8586-9c56631a85bd.jpeg',
  },
  {
    title: 'Prachin Maharashtra',
    author: 'Mayur chaudhari',
    price: 249,
    image: 'C:/Users/Vicky/Downloads/historicalbooks/static/images/10.jpeg',
  },
  {
    title: 'Sangharshgatha',
    author: 'Chetan Gavali',
    price: 199,
    image: 'C:/Users/Vicky/Downloads/historicalbooks/static/images/29.jpg',
  },
  {
    title: 'Maharashtra Ani Maratha',
    author: 'Vikam Mahajan',
    price: 299,
    image: 'https://m.media-amazon.com/images/I/61qxEIZXGIL._SL1280_.jpg',
  },
  {
    title: 'Maharashtra Sanskruti',
    author: 'Vishal Rathod',
    price: 189,
    image: 'https://m.media-amazon.com/images/I/91kieboBfoL._SL1500_.jpg',
  },
  {
    title: 'Maharashtratil Panth',
    author: 'Dipak Vichare',
    price: 239,
    image: 'https://m.media-amazon.com/images/I/71IzMxW-E3L._SL1500_.jpg',
  },
  {
    title: 'The Forts Of Maharashtra',
    author: 'Krishna Khodpe',
    price: 299,
    image: 'C:/Users/Vicky/Downloads/historicalbooks/static/images/5.jpeg',
  },
   {
    title: 'Maharashtra Sanskruti',
    author: 'Prakash',
    price: 299,
    image: 'C:/Users/Vicky/Downloads/historicalbooks/static/images/7.jpeg',
  },
   {
    title: 'Chh. Shri Shivaji Maharaj',
    author: 'Gopal Nandulkar',
    price: 699,
    image: 'C:/Users/Vicky/Downloads/historicalbooks/static/images/41.jpg',
  },
   {
    title: 'Maharashtratil Parivartan',
    author: 'Jyoti Raut',
    price: 499,
    image: 'C:/Users/Vicky/Downloads/historicalbooks/static/images/40.jpg',
  },
   {
    title: 'Savarkarv Samjun Ghetana',
    author: 'Ganesh Raut',
    price: 299,
    image: 'C:/Users/Vicky/Downloads/historicalbooks/static/images/39.jpg',
  },
   {
    title: 'Mahatma Phule',
    author: 'Krishna Khodpe',
    price: 599,
    image: 'C:/Users/Vicky/Downloads/historicalbooks/static/images/38.jpg',
  },
   {
    title: 'Maharaja Sayajirao',
    author: 'Dr.Rajendra Magar',
    price: 299,
    image: 'C:/Users/Vicky/Downloads/historicalbooks/static/images/37.jpg',
  },
   {
    title: 'Itihasik Jatanshastra',
    author: 'K.D.Kawdeker',
    price: 199,
    image: 'C:/Users/Vicky/Downloads/historicalbooks/static/images/36.jpg',
  },
   {
    title: 'Marathancha Itihas',
    author: 'Kavita Bhalerao',
    price: 599,
    image: 'C:/Users/Vicky/Downloads/historicalbooks/static/images/35.jpg',
  },
   {
    title: 'kartya karvitya',
    author: 'Mrunalin Chitale',
    price: 199,
    image: 'C:/Users/Vicky/Downloads/historicalbooks/static/images/34.jpg',
  },
   {
    title: 'Renaissance State',
    author: 'Girish Kuber',
    price: 499,
    image: 'C:/Users/Vicky/Downloads/historicalbooks/static/images/33.jpg',
  },
   {
    title: 'Maharashtrachi Lokyatra',
    author: 'SAKAL',
    price: 399,
    image: 'C:/Users/Vicky/Downloads/historicalbooks/static/images/32.jpg',
  },
   {
    title: 'Sarvajanik Satyadharma',
    author: 'Parladh',
    price: 799,
    image: 'C:/Users/Vicky/Downloads/historicalbooks/static/images/31.jpg',
  },
   {
    title: 'Lokmanya Tilak',
    author: 'Unknown',
    price: 569,
    image: 'C:/Users/Vicky/Downloads/historicalbooks/static/images/30.jpg',
  },
   {
    title: 'Majhi sangharshgatha',
    author: 'Naryan Kulkarni',
    price: 199,
    image: 'C:/Users/Vicky/Downloads/historicalbooks/static/images/29.jpg',
  },
   {
    title: 'Prampara ani Parivartan',
    author: 'Dr.Prabhakar Dev',
    price: 251,
    image: 'C:/Users/Vicky/Downloads/historicalbooks/static/images/28.jpg',
  },
   {
    title: 'Rajshri Shahu Maharaj',
    author: 'Unknown',
    price: 499,
    image: 'C:/Users/Vicky/Downloads/historicalbooks/static/images/27.jpg',
  },
   {
    title: 'Maharashtratil Ladhe',
    author: 'Dr.Madhav Potedar',
    price: 699,
    image: 'C:/Users/Vicky/Downloads/historicalbooks/static/images/26.jpg',
  },
   {
    title: 'Ladha',
    author: 'B.N.Joog',
    price: 499,
    image: 'C:/Users/Vicky/Downloads/historicalbooks/static/images/25.jpg',
  },
   {
    title: 'Chhatrapati Shivaji Maharaj',
    author: 'Unknown',
    price: 799,
    image: 'C:/Users/Vicky/Downloads/historicalbooks/static/images/24.jpg',
  },
   {
    title: 'Sarsenapati Hambirrao',
    author: 'Dr.Sadashiv Shivande',
    price: 239,
    image: 'C:/Users/Vicky/Downloads/historicalbooks/static/images/23.jpg',
  },
   {
    title: 'The greate Indian History',
    author: 'Sankaran Nair',
    price: 199,
    image: 'C:/Users/Vicky/Downloads/historicalbooks/static/images/22.jpg',
  },
   {
    title: 'Zeit Der Finsternis',
    author: 'Shashi Tharoor',
    price: 599,
    image: 'C:/Users/Vicky/Downloads/historicalbooks/static/images/21.jpg',
  },
   {
    title: 'Freedom at Midnight',
    author: 'Larry Collins',
    price: 299,
    image: 'C:/Users/Vicky/Downloads/historicalbooks/static/images/20.jpg',
  },
   {
    title: 'Famous Freedom Fighters',
    author: 'Unknown',
    price: 699,
    image: 'C:/Users/Vicky/Downloads/historicalbooks/static/images/19.jpg',
  },
   {
    title: 'Perspective in Indian',
    author: 'M.Jankiraman',
    price: 299,
    image: 'C:/Users/Vicky/Downloads/historicalbooks/static/images/18.jpeg',
  },
   {
    title: 'Ancient Indian History',
    author: 'Dr.Sunil Saxena',
    price: 499,
    image: 'C:/Users/Vicky/Downloads/historicalbooks/static/images/17.jpeg',
  },
   {
    title: 'Sources of Indian History',
    author: 'Abhijeet Bagchi',
    price: 299,
    image: 'C:/Users/Vicky/Downloads/historicalbooks/static/images/16.jpeg',
  },
   {
    title: 'An Entirely New History',
    author: 'Erancois Gautier',
    price: 199,
    image: 'C:/Users/Vicky/Downloads/historicalbooks/static/images/15.jpeg',
  },
   {
    title: 'A Survey of Indian History',
    author: 'K.M.Panikkar',
    price: 219,
    image: 'C:/Users/Vicky/Downloads/historicalbooks/static/images/14.jpeg',
  },
   {
    title: 'Lakshimibai Tilak',
    author: 'Shanta Gokhale',
    price: 449,
    image: 'C:/Users/Vicky/Downloads/historicalbooks/static/images/13.jpeg',
  },
   {
    title: 'Women and Social Laws',
    author: 'Shirgaokar',
    price: 79,
    image: 'C:/Users/Vicky/Downloads/historicalbooks/static/images/12.jpeg',
  },
   {
    title: 'Shivkalin Maharashtra',
    author: 'Dr.A.R.Kulkarni',
    price: 299,
    image: 'C:/Users/Vicky/Downloads/historicalbooks/static/images/11.jpeg',
  },
   {
    title: 'Shivkalin Maharashtra',
    author: 'V.K.Bhave',
    price: 299,
    image: 'C:/Users/Vicky/Downloads/historicalbooks/static/images/10.jpeg',
  },
   {
    title: 'Maharashtrache Darshan',
    author: 'Gopal Dandeker',
    price: 359,
    image: 'C:/Users/Vicky/Downloads/historicalbooks/static/images/9.jpeg',
  },
   {
    title: 'Aadhunik Itihass',
    author: 'Jitendra Bhamre',
    price: 99,
    image: 'C:/Users/Vicky/Downloads/historicalbooks/static/images/8.jpeg',
  },
   {
    title: 'Maharashtra Sanskruti',
    author: 'Dr.P.M.Deshpande',
    price: 199,
    image: 'C:/Users/Vicky/Downloads/historicalbooks/static/images/7.jpeg',
  },
   {
    title: 'Satvavahankalin ',
    author: 'Dr.Morevandhuker',
    price: 599,
    image: 'C:/Users/Vicky/Downloads/historicalbooks/static/images/6.jpeg',
  },
   {
    title: 'The Forts Of Maharashtra',
    author: 'Shikha Jain',
    price: 259,
    image: 'C:/Users/Vicky/Downloads/historicalbooks/static/images/5.jpeg',
  },
   {
    title: 'Yaani Ghadavali Maharashtra',
    author: 'Dr.Ganesh Raut',
    price: 409,
    image: 'C:/Users/Vicky/Downloads/historicalbooks/static/images/4.jpeg',
  },
   {
    title: 'Maximum City',
    author: 'Mheta',
    price: 99,
    image: 'C:/Users/Vicky/Downloads/historicalbooks/static/images/3.jpg',
  },
   {
    title: 'Ancient Indian Science',
    author: 'Saroj Sharma',
    price: 399,
    image: 'C:/Users/Vicky/Downloads/historicalbooks/static/images/2.jpg',
  },
   {
    title: 'The Incredible History',
    author: 'Sanjeev Sanyal',
    price: 299,
    image: 'C:/Users/Vicky/Downloads/historicalbooks/static/images/4.jpeg',
  },
];

const bookList = document.getElementById('book-list');
const cartCount = document.getElementById('cart-count');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

let cart = [];

// Populate book grid
function renderBooks() {
  bookList.innerHTML = '';
  books.forEach((book, idx) => {
    const card = document.createElement('div');
    card.className = 'book-card';
    card.innerHTML = `
      <img src="${book.image}" alt="${book.title}" class="book-img"/>
      <div class="book-title">${book.title}</div>
      <div class="book-author">${book.author}</div>
      <div class="book-price">₹${book.price}</div>
      <button class="add-cart-btn" data-idx="${idx}">Add to Cart</button>
    `;
    bookList.appendChild(card);
  });
  document.querySelectorAll('.add-cart-btn').forEach(btn => {
    btn.onclick = () => addToCart(parseInt(btn.dataset.idx));
  });
}

// Add to cart
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

// Responsive nav
const menuToggle = document.getElementById('menu-toggle');
const navList = document.getElementById('nav-list');

menuToggle.addEventListener('click', () => {
  navList.classList.toggle('active');
});

renderBooks();
updateCart();