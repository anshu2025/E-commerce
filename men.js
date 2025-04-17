
const products =[
    { id: 1, name: "Leather Jacket", price: 99.99, age: "18-30", image: "image/jacket.jpg" },
    { id: 2, name: "Graphic T-Shirt", price: 19.99, age: "15-25", image: "image/graphic.jpg" },
    { id: 3, name: "Slim Fit Jeans", price: 49.99, age: "20-40", image: "image/jeans.webp" },
    { id: 4, name: "Dress Shoes", price: 79.99, age: "25-50", image: "image/shoe.webp" },
    { id: 5, name: "Hoodie", price: 29.99, age: "15-30", image: "image/hoddie.webp" }
  ];

  function generateClothingItems() {
    const collectionElement = document.querySelector(".collection");
    products.forEach((item) => {
      const clothingItemElement = document.createElement("div");
      clothingItemElement.classList.add("clothing-item");
      clothingItemElement.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div class="details">
          <h2 class="name">${item.name}</h2>
          <p class="price">$${item.price}</p>
          <p class="age">Age: ${item.age}</p>
          <button class="add-to-cart" onclick="addToCart(${item.id})">Add to Cart</button>
          <button class="payment add-to-cart" > <a href="pay.html">  Buy Now </a></button>

        </div>
      `;
      collectionElement.appendChild(clothingItemElement);
    });
  }

  function addToCart(itemId) {
    const item = products.find((item) => item.id === itemId);
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${item.name} has been added to the cart!`);
  }

  generateClothingItems();
