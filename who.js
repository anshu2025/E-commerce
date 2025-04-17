
const products = [
    { id: 1, name: "Facial Cream", price: 19.99, description: "Moisturizing cream for dry skin", image: "image/facial.jpg" },
    { id: 2, name: "Shampoo", price: 9.99, description: "Sulfate-free shampoo for all hair types", image: "image/shampoo.webp" },
    { id: 3, name: "Vitamin C Serum", price: 29.99, description: "Anti-aging serum for brightening skin", image: "image/C-serum.jpg" },
    { id: 4, name: "Body Lotion", price: 14.99, description: "Hydrating lotion for dry skin", image: "image/body-lotion.jpg" },
    { id: 5, name: "Eye Cream", price: 24.99, description: "Anti-aging eye cream for reducing fine lines", image: "image/eye-cream.webp" },
    { id: 6, name: "Face Mask", price: 12.99, description: "Detoxifying face mask for all skin types", image: "image/face-mask.jpg" },
    { id: 7, name: "Hair Conditioner", price: 11.99, description: "Moisturizing conditioner for dry hair", image: "image/hair-condi.jpg" },
    { id: 8, name: "Lip Balm", price: 6.99, description: "Hydrating lip balm for dry lips", image: "image/lip-balm.jpg" }
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
