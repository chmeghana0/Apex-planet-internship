const products = [
  {
    name: 'Laptop',
    category: 'electronics',
    price: 12000,
    rating: 4.5,
    image: 'https://tse4.mm.bing.net/th?id=OIP.QUGiTT9jglfF30zRQqMvxQHaEB&pid=Api&P=0&h=180&c=1'
  },
  {
    name: 'T-Shirt',
    category: 'clothing',
    price: 200,
    rating: 4.0,
    image: 'https://m.media-amazon.com/images/I/71KuheX063L._AC_UL1500_.jpg'
  },
  {
    name: 'Headphones',
    category: 'electronics',
    price: 1000,
    rating: 4.2,
    image: 'https://tse3.mm.bing.net/th?id=OIP.NPH9VVxn-LToOyH-yndCkAHaIz&pid=Api&P=0&h=180&c=1'
  },
  {
    name: 'Jeans',
    category: 'clothing',
    price: 500,
    rating: 3.8,
    image: 'https://tse4.mm.bing.net/th?id=OIP.rJhaBX2PQwqSDBTG5lpxUgHaJk&pid=Api&P=0&h=180&c=1'
  },
  {
    name: 'Smartwatch',
    category: 'electronics',
    price: 2000,
    rating: 4.7,
    image: 'https://tse2.mm.bing.net/th?id=OIP.WGOZNjuNIvkVixSj9rQBcAHaIs&pid=Api&P=0&h=180&c=1'
  },
  {
    name: 'Sneakers',
    category: 'clothing',
    price: 9000,
    rating: 4.3,
    image: 'https://tse3.mm.bing.net/th?id=OIP.CTNibKSVhOIRNIgRn3e7pwHaJQ&pid=Api&P=0&h=180&c=1'
  },
  {
    name: 'Backpack',
    category: 'accessories',
    price: 600,
    rating: 4.4,
    image: 'https://tse4.mm.bing.net/th?id=OIP.Io1IwUYYouIu2Dtid3BH4AHaJA&pid=Api&P=0&h=180&c=1'
  },
  {
    name: 'Sunglasses',
    category: 'accessories',
    price: 300,
    rating: 4.1,
    image: 'https://tse1.mm.bing.net/th?id=OIP.yiKRR_ARoSQxEOZ3psr33AHaDj&pid=Api&P=0&h=180&c=1'
  },
  {
    name: 'Bluetooth Speaker',
    category: 'electronics',
    price: 750,
    rating: 4.0,
    image: 'https://tse2.mm.bing.net/th?id=OIP.x3zFvWwkmvt28h5AlnCZLwHaHa&pid=Api&P=0&h=180'
  },
  {
    name: 'Hoodie',
    category: 'clothing',
    price: 400,
    rating: 4.6,
    image: 'https://tse1.mm.bing.net/th?id=OIP.UrdU256sc1QmwJxAZZvmCAHaIw&pid=Api&P=0&h=180'
  }
];

const productContainer = document.getElementById('products');
const categoryFilter = document.getElementById('categoryFilter');
const sortCriteria = document.getElementById('sortCriteria');

function displayProducts(items) {
  productContainer.innerHTML = '';
  items.forEach(p => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
      <img src="${p.image}" alt="${p.name}" class="product-img" />
      <h3>${p.name}</h3>
      <p>Category: ${p.category}</p>
      <p>Price: ₹${p.price.toLocaleString('en-IN')}</p>
      <p>Rating: ⭐ ${p.rating}</p>`;
    productContainer.appendChild(div);
  });
}

function filterAndSort() {
  let filtered = [...products];

  const category = categoryFilter.value;
  if (category !== 'all') {
    filtered = filtered.filter(p => p.category === category);
  }

  const sort = sortCriteria.value;
  filtered.sort((a, b) => a[sort] - b[sort]);

  displayProducts(filtered);
}

categoryFilter.onchange = filterAndSort;
sortCriteria.onchange = filterAndSort;

filterAndSort();
