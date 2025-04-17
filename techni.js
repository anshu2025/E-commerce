
const products = [
    { id: 1, name: "Smartphone", price: 599.99, description: "Latest model with advanced features", image: "image/phon.avif" },
    { id: 2, name: "Laptop", price: 999.99, description: "High-performance laptop for gaming and work", image: "image/laptop.png" },
    { id: 3, name: "Tablet", price: 399.99, description: "Portable tablet for entertainment and productivity", image: "image/tab.jpg" },
    { id: 4, name: "Smartwatch", price: 199.99, description: "Fitness tracking and notification features", image: "image/watch.jpg" },
    { id: 5, name: "Headphones", price: 99.99, description: "Wireless headphones with long battery life", image: "image/headphone.jpg" },
    { id: 6, name: "Gaming Console", price: 499.99, description: "Next-generation gaming console with advanced graphics", image: "image/game-c.jpg" },
    { id: 7, name: "Camera", price: 299.99, description: "High-quality camera for photography and videography", image: "image/camera.jpg" },
    { id: 8, name: "Speaker", price: 149.99, description: "Portable speaker with waterproof design", image: "image/speaker.jpg" }
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
          <p class="age">Age: ${item.description}</p>
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
