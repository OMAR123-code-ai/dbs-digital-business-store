let cart = JSON.parse(localStorage.getItem('dbs_cart') || '[]');

function updateCartCount() {
  const count = cart.reduce(function(sum, item) { return sum + item.qty; }, 0);
  const el = document.getElementById('cart-count');
  if (el) el.textContent = count;
}

function addToCart(productId) {
  const product = PRODUCTS.find(function(p) { return p.id === productId; });
  if (!product) return;
  const existing = cart.find(function(item) { return item.id === productId; });
  if (existing) { existing.qty += 1; }
  else {
    cart.push({ id: product.id, name: product.name, price: product.price, image: product.image, qty: 1 });
  }
  localStorage.setItem('dbs_cart', JSON.stringify(cart));
  updateCartCount();
  const btn = event && event.target && event.target.closest ? event.target.closest('.btn-add-cart') : null;
  if (btn) {
    var original = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-check"></i> Ajouté !';
    btn.style.background = '#28a745';
    setTimeout(function() { btn.innerHTML = original; btn.style.background = ''; }, 1500);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  updateCartCount();
  var featuredEl = document.getElementById('featured-products');
  if (featuredEl) featuredEl.innerHTML = PRODUCTS.slice(0, 5).map(createProductCard).join('');
  var bestEl = document.getElementById('bestsellers');
  if (bestEl) bestEl.innerHTML = PRODUCTS.slice(5, 8).map(createProductCard).join('');
  var newEl = document.getElementById('new-arrivals');
  if (newEl) newEl.innerHTML = PRODUCTS.slice(8, 11).map(createProductCard).join('');

  var langSelect = document.getElementById('language-select');
  var currSelect = document.getElementById('currency-select');
  if (langSelect) {
    langSelect.value = localStorage.getItem('dbs_lang') || 'fr';
    langSelect.addEventListener('change', function(e) {
      localStorage.setItem('dbs_lang', e.target.value);
      alert('Langue : ' + e.target.value.toUpperCase() + ' (traduction complète à venir)');
    });
  }
  if (currSelect) {
    currSelect.value = localStorage.getItem('dbs_currency') || 'XOF';
    currSelect.addEventListener('change', function(e) {
      localStorage.setItem('dbs_currency', e.target.value);
      location.reload();
    });
  }
  var newsForm = document.getElementById('newsletter-form');
  if (newsForm) {
    newsForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Merci pour votre inscription !');
      newsForm.reset();
    });
  }
});

function generateOrderNumber() {
  var date = new Date();
  var y = date.getFullYear();
  var m = String(date.getMonth() + 1).padStart(2, '0');
  var d = String(date.getDate()).padStart(2, '0');
  var rand = Math.floor(1000 + Math.random() * 9000);
  return 'DBS-' + y + m + d + '-' + rand;
}
