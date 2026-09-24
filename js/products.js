const PRODUCTS = [
  { id: 1, name: "Écouteurs sans fil Bluetooth", price: 31990, oldPrice: 39990, discount: 20, rating: 4.8, reviews: 124, image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&q=80", category: "accessoires", badge: "-20%", stock: 56 },
  { id: 2, name: "Montre connectée Smartwatch", price: 25490, oldPrice: 29990, discount: 15, rating: 4.7, reviews: 98, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80", category: "electronique", badge: "-15%", stock: 32 },
  { id: 3, name: "Baskets tendance unisexe", price: 22490, oldPrice: 29990, discount: 25, rating: 4.6, reviews: 76, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80", category: "mode", badge: "-25%", stock: 40 },
  { id: 4, name: "Robe élégante femme", price: 17490, oldPrice: 24990, discount: 30, rating: 4.9, reviews: 52, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&q=80", category: "mode", badge: "-30%", stock: 18 },
  { id: 5, name: "Sac à dos multifonction", price: 16990, oldPrice: 20990, discount: 19, rating: 4.5, reviews: 41, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80", category: "accessoires", badge: "-19%", stock: 28 },
  { id: 6, name: "Chargeur rapide 65W", price: 12990, oldPrice: 15990, discount: 19, rating: 4.8, reviews: 210, image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&q=80", category: "electronique", badge: "-19%", stock: 65 },
  { id: 7, name: "Casque audio Bluetooth", price: 18990, oldPrice: null, discount: 0, rating: 4.7, reviews: 176, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80", category: "accessoires", badge: null, stock: 22 },
  { id: 8, name: "T-shirt homme premium", price: 14990, oldPrice: null, discount: 0, rating: 4.6, reviews: 132, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80", category: "mode", badge: null, stock: 50 },
  { id: 9, name: "Tablette Android 10\"", price: 79990, oldPrice: null, discount: 0, rating: 4.5, reviews: 88, image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&q=80", category: "electronique", badge: "Nouveau", stock: 15 },
  { id: 10, name: "Parfum homme", price: 22990, oldPrice: null, discount: 0, rating: 4.8, reviews: 64, image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&q=80", category: "beaute", badge: "Nouveau", stock: 30 },
  { id: 11, name: "Montre connectée femme", price: 21990, oldPrice: null, discount: 0, rating: 4.7, reviews: 53, image: "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=400&q=80", category: "electronique", badge: "Nouveau", stock: 20 },
  { id: 12, name: "Smartphone 5G 128 Go", price: 249990, oldPrice: 299990, discount: 17, rating: 4.9, reviews: 124, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80", category: "electronique", badge: "-17%", stock: 12 }
];

function formatPrice(amount, currency) {
  currency = currency || localStorage.getItem('dbs_currency') || 'XOF';
  if (currency === 'XOF') return new Intl.NumberFormat('fr-FR').format(amount) + ' FCFA';
  if (currency === 'USD') return '$' + (amount / 600).toFixed(2);
  if (currency === 'EUR') return '€' + (amount / 655).toFixed(2);
  return amount + ' ' + currency;
}

function createProductCard(product) {
  const badgeHtml = product.badge ? '<span class="product-badge">' + product.badge + '</span>' : '';
  const oldPriceHtml = product.oldPrice ? '<span class="old">' + formatPrice(product.oldPrice) + '</span>' : '';
  return '<div class="product-card" data-id="' + product.id + '">' +
    badgeHtml +
    '<a href="product.html?id=' + product.id + '" class="product-image"><img src="' + product.image + '" alt="' + product.name + '" loading="lazy"></a>' +
    '<div class="product-info">' +
      '<h3><a href="product.html?id=' + product.id + '">' + product.name + '</a></h3>' +
      '<div class="product-rating">' + '★'.repeat(Math.floor(product.rating)) + '☆'.repeat(5 - Math.floor(product.rating)) + ' <span>(' + product.reviews + ')</span></div>' +
      '<div class="product-price"><span class="current">' + formatPrice(product.price) + '</span>' + oldPriceHtml + '</div>' +
      '<button class="btn-add-cart" onclick="addToCart(' + product.id + ')"><i class="fas fa-shopping-cart"></i> Ajouter au panier</button>' +
    '</div></div>';
}
