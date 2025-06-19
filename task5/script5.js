const products = [
  {
    name: "Cotton Tee",
    price: 250,
    category: "clothing",
    image: "https://tse1.mm.bing.net/th?id=OIP.Qq9FobpXvOeqxhAgr7yEsAHaHa&pid=Api&P=0&h=180"
  },
  {
    name: "Bluetooth Speaker",
    price: 600,
    category: "electronics",
    image: "https://tse3.mm.bing.net/th?id=OIP.TQi4QxSYvdDsDte6AManzwHaIO&pid=Api&P=0&h=180"
  },
  {
    name: "Baseball Cap",
    price: 150,
    category: "clothing",
    image: "https://tse4.mm.bing.net/th?id=OIP.9FvNHdtRnao9oIBYsCPd_gHaHa&pid=Api&P=0&h=180"
  },
  {
    name: "USB Desk Lamp",
    price: 300,
    category: "electronics",
    image: "https://m.media-amazon.com/images/I/61s7RGRwSoL.jpg"
  },
  {
    name: "Frocks",
    price: 350,
    category: "clothing",
    image: "https://tse3.mm.bing.net/th?id=OIP.kWMwRSrHuww9vfNSXQnMcAHaJ3&pid=Api&P=0&h=180"
  },
  {
    name: "Portable Charger",
    price: 400,
    category: "electronics",
    image: "https://tse1.mm.bing.net/th?id=OIP.UkIs5CWjNRmoZZmyKx8hEgHaHa&pid=Api&P=0&h=180"
  },
  {
    name: "Canvas Tote Bag",
    price: 200,
    category: "clothing",
    image: "https://tse3.mm.bing.net/th?id=OIP.p9n59xSLUeyIE9B6IePUaQHaJ2&pid=Api&P=0&h=180"
  },
  {
    name: "Wireless Mouse",
    price: 2500,
    category: "electronics",
    image: "https://tse1.mm.bing.net/th?id=OIP.gKZO7_tGQqOMENZH0JJwmQHaF5&pid=Api&P=0&h=180"
  }
];

let cartCount = 0;

const grid = document.getElementById("productGrid");
const filter = document.getElementById("categoryFilter");
const sort = document.getElementById("sortOption");
const search = document.getElementById("searchBar");
const toggleMode = document.getElementById("toggleMode");
const cartCounter = document.getElementById("cartCount");

// Display product cards
function displayProducts(items) {
  grid.innerHTML = "";
  items.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}" class="product-img" />
      <h3>${p.name}</h3>
      <p class="price">₹${p.price}</p>

      <p>${p.category}</p>
      <button onclick="addToCart()">Add to Cart</button>
    `;
    grid.appendChild(card);
  });
}

// Add item to cart
function addToCart() {
  cartCount++;
  cartCounter.textContent = cartCount;
}

// Filter, search, and sort logic
function updateDisplay() {
  let filtered = [...products];

  const searchValue = search.value.toLowerCase();
  if (searchValue) {
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(searchValue)
    );
  }

  if (filter.value !== "all") {
    filtered = filtered.filter(p => p.category === filter.value);
  }

  if (sort.value === "price") {
    filtered.sort((a, b) => a.price - b.price);
  } else {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  }

  displayProducts(filtered);
}

// Event listeners
filter.addEventListener("change", updateDisplay);
sort.addEventListener("change", updateDisplay);
search.addEventListener("input", updateDisplay);

// Dark mode toggle
toggleMode.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Initial display
displayProducts(products);
